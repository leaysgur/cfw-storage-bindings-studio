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
    queryFn: () => D1.prepare(`SELECT ROWID, * FROM ${tableName}`).all(),
    select: (data) => data.results,
  });
</script>

<section>
  <h3>
    {tableName}
  </h3>

  {#if $rowsQuery.isLoading}
    🌀 Loading rows...
  {:else if $rowsQuery.isError}
    <pre>💥 {$rowsQuery.error.message}</pre>
  {:else if $rowsQuery.isSuccess}
    {@const rows = $rowsQuery.data}

    <div class="action">
      <button
        disabled={$rowsQuery.isFetching}
        on:click={() => queryClient.invalidateQueries({ queryKey })}>Refresh</button
      >
    </div>

    {#if rows.length !== 0}
      <div class="scroller">
        <table>
          <thead>
            <tr>
              {#each Object.keys(rows[0]) as column}
                <th align="left">{column}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each rows as row (row.rowid)}
              <tr>
                {#each Object.values(row) as value}
                  <td align="left">{value}</td>
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {:else}
      <p>No records...</p>
    {/if}
  {/if}
</section>

<style>
  section {
    display: grid;
    gap: var(--size-3);
  }

  .action {
    display: flex;
    justify-content: flex-end;
  }

  .scroller {
    overflow: auto;

    & > table {
      width: max-content;
      font-family: var(--font-mono);
    }

    & > table td {
      max-inline-size: unset;
    }
  }
</style>
