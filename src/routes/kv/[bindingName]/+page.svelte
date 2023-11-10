<script>
  import { getContext } from "svelte";
  import { createInfiniteQuery, useQueryClient } from "@tanstack/svelte-query";
  import { page } from "$app/stores";
  import AddKey from "./add-key.svelte";
  import DeleteKey from "./delete-key.svelte";
  import KvValue from "./kv-value.svelte";

  const { bindings } = getContext("appContext");
  const queryClient = useQueryClient();

  $: bindingName = $page.params.bindingName;
  /** @type {import("@cloudflare/workers-types/experimental").KVNamespace} */
  $: KV = bindings[bindingName];

  $: queryKey = ["kv", bindingName, "list"];
  $: listQuery = createInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => KV.list({ cursor: pageParam.cursor, limit: 50 }),
    initialPageParam:
      /** @type {import("@cloudflare/workers-types/experimental").KVNamespaceListOptions} */ ({
        cursor: null,
      }),
    getNextPageParam: (data) => (data.list_complete ? undefined : data),
  });

  let filter = "";
</script>

kv/{$page.params.bindingName}

<button
  disabled={$listQuery.isFetching}
  on:click={() => queryClient.invalidateQueries({ queryKey })}
>
  Refresh
</button>

<details>
  <summary>Add new key:value</summary>
  <AddKey {KV} {bindingName} />
</details>

<hr />

{#if $listQuery.isLoading}
  🌀 Loading keys...
{:else if $listQuery.isError}
  <pre>💥 {$listQuery.error.message}</pre>
{:else if $listQuery.isSuccess}
  <label>
    Filter key:
    <input type="search" bind:value={filter} />
  </label>
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
              <td>{key.name}</td>
              <td><KvValue {KV} {bindingName} {key} /></td>
              <td><DeleteKey {KV} {bindingName} {key} /></td>
            </tr>
          {/if}
        {/each}
      {/each}
    </tbody>
  </table>
  {#if $listQuery.hasNextPage}
    <button disabled={$listQuery.isFetchingNextPage} on:click={() => $listQuery.fetchNextPage()}>
      Load more
    </button>
  {/if}
{/if}
