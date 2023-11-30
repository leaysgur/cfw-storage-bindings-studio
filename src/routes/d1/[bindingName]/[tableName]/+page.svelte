<script>
  import { getContext } from "svelte";
  import { createQuery, useQueryClient } from "@tanstack/svelte-query";
  import { page } from "$app/stores";

  const { bindings } = getContext("appContext");
  const queryClient = useQueryClient();

  $: bindingName = $page.params.bindingName;
  $: tableName = $page.params.tableName;
  /** @type {import("@cloudflare/workers-types/experimental").D1Database} */
  $: D1 = bindings[bindingName];

  $: queryKey = ["d1", bindingName, "tables", tableName];
  $: rowsQuery = createQuery({
    queryKey,
    queryFn: () => D1.prepare(`SELECT * FROM ${tableName}`).all(),
    select: (data) => data.results,
  });
</script>

d1/{bindingName}/{tableName}

<button
  disabled={$rowsQuery.isFetching}
  on:click={() => queryClient.invalidateQueries({ queryKey })}>Refresh</button
>

{#if $rowsQuery.isLoading}
  🌀 Loading rows...
{:else if $rowsQuery.isError}
  <pre>💥 {$rowsQuery.error.message}</pre>
{:else if $rowsQuery.isSuccess}
  <table style="white-space: nowrap;" border={1}>
    <thead>
      <tr>
        {#each Object.keys($rowsQuery.data[0]) as column}
          <th>{column}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each $rowsQuery.data as row}
        <tr>
          {#each Object.values(row) as value}
            <td>{value}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
{/if}
