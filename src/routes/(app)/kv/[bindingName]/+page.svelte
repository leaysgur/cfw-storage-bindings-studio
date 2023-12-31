<script>
  import { getContext } from "svelte";
  import { createInfiniteQuery, useQueryClient } from "@tanstack/svelte-query";
  import { page } from "$app/stores";
  import AddKey from "./add-key.svelte";
  import ShowValue from "./show-value.svelte";
  import UpdateKey from "./update-key.svelte";
  import DeleteKey from "./delete-key.svelte";

  const { bindings } = getContext("appContext");
  const queryClient = useQueryClient();

  $: bindingName = $page.params.bindingName;
  /** @type {import("@cloudflare/workers-types/experimental").KVNamespace} */
  $: KV = bindings[bindingName];

  $: queryKey = ["kv", bindingName, "list"];
  $: listQuery = createInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => KV.list({ cursor: pageParam.cursor, limit: 25 }),
    initialPageParam:
      /** @type {import("@cloudflare/workers-types/experimental").KVNamespaceListOptions} */ ({
        cursor: null,
      }),
    getNextPageParam: (data) => (data.list_complete ? undefined : data),
  });

  let filter = "";
</script>

<section>
  <h2>
    [KV] {$page.params.bindingName}
  </h2>

  <details>
    <summary>Add new key:value</summary>
    <AddKey {KV} {bindingName} />
  </details>

  {#if $listQuery.isLoading}
    🌀 Loading keys...
  {:else if $listQuery.isError}
    <pre>💥 {$listQuery.error.message}</pre>
  {:else if $listQuery.isSuccess}
    <div class="action">
      <label>
        Filter key:
        <input type="search" bind:value={filter} />
      </label>

      <button
        disabled={$listQuery.isFetching}
        on:click={() => queryClient.invalidateQueries({ queryKey })}
      >
        Refresh all
      </button>
    </div>

    <div class="scroller">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each $listQuery.data.pages as page}
            {#each page.keys as key (key.name)}
              {#if filter === "" || key.name.includes(filter)}
                <tr>
                  <td align="left">{key.name}</td>
                  <td align="left"><ShowValue {KV} {bindingName} {key} /></td>
                  <td>
                    <button
                      on:click={() =>
                        queryClient.invalidateQueries({ queryKey: ["kv", bindingName, key.name] })}
                      >Refresh</button
                    >
                    <UpdateKey {KV} {bindingName} {key} />
                    <DeleteKey {KV} {bindingName} {key} />
                  </td>
                </tr>
              {/if}
            {:else}
              <tr><td colspan={3}>No entries...</td></tr>
            {/each}
          {/each}
        </tbody>
      </table>
    </div>
    {#if $listQuery.hasNextPage}
      <button disabled={$listQuery.isFetchingNextPage} on:click={() => $listQuery.fetchNextPage()}>
        Load more
      </button>
    {/if}
  {/if}
</section>

<style>
  section {
    display: grid;
    gap: var(--size-4);
    padding-block: var(--size-2);
    padding-inline: var(--size-3);
    align-content: start;
  }

  .action {
    display: flex;
    justify-content: space-between;
  }

  .scroller {
    overflow: auto;

    & > table {
      font-family: var(--font-mono);
      width: max-content;
    }

    & > table td {
      max-inline-size: unset;
    }
  }
</style>
