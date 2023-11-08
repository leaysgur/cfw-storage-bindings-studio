<script>
  import { getContext } from "svelte";
  import { createInfiniteQuery, useQueryClient } from "@tanstack/svelte-query";
  import { page } from "$app/stores";
  import AddKey from "./add-key.svelte";
  import KvValue from "./kv-value.svelte";

  const { bindings } = getContext("appContext");
  const queryClient = useQueryClient();

  $: bindingName = $page.params.bindingName;
  /** @type {import("@cloudflare/workers-types/experimental").KVNamespace} */
  $: KV = bindings[bindingName];

  $: queryKey = ["kv", bindingName, "list"];
  $: listQuery = createInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => KV.list({ cursor: pageParam.cursor, limit: 10 }),
    initialPageParam:
      /** @type {import("@cloudflare/workers-types/experimental").KVNamespaceListOptions} */ ({
        cursor: null,
      }),
    getNextPageParam: (data) => (data.list_complete ? undefined : data),
  });
</script>

kv/{$page.params.bindingName}

<button
  disabled={$listQuery.isFetching}
  on:click={() => queryClient.invalidateQueries({ queryKey })}
>
  Refresh
</button>

<AddKey {KV} {bindingName} />

<hr />

{#if $listQuery.isLoading}
  🌀 Loading keys...
{:else if $listQuery.isError}
  <pre>💥 {$listQuery.error.message}</pre>
{:else if $listQuery.isSuccess}
  <table>
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      {#each $listQuery.data.pages as page}
        {#each page.keys as key (key.name)}
          <tr>
            <td>{key.name}</td>
            <td><KvValue {KV} {bindingName} {key} /></td>
          </tr>
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
