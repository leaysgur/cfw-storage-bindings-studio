<script>
  import { createQuery } from "@tanstack/svelte-query";

  /**
   * @type {{
   *   D1: import("@cloudflare/workers-types/experimental").D1Database;
   *   bindingName: string;
   *   sqlToRun: string;
   * }}
   */
  let { D1, bindingName, sqlToRun } = $props();

  let sqlResultsQuery = $derived(
    createQuery({
      queryKey: ["d1", bindingName, "sqlResults", sqlToRun],
      queryFn: () => D1.prepare(sqlToRun).all(),
      enabled: sqlToRun !== "",
    }),
  );
</script>

{#if $sqlResultsQuery.isLoading}
  🌀 Loading results...
{:else if $sqlResultsQuery.isError}
  <pre>💥 {$sqlResultsQuery.error.message}</pre>
{:else if $sqlResultsQuery.isSuccess}
  {@const { meta, results } = $sqlResultsQuery.data}

  {#if meta.changed_db}
    {meta.changes} rows are changed.
  {:else if results.length !== 0}
    <div class="scroller">
      <table>
        <thead>
          <tr>
            {#each Object.keys(results[0]) as column}
              <th align="left">{column}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each results as row}
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

<style>
  .scroller {
    overflow: auto;

    table {
      width: max-content;
      font-family: var(--font-mono);

      td {
        max-inline-size: unset;
      }
    }
  }
</style>
