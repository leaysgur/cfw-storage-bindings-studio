<script>
  import { createQuery } from "@tanstack/svelte-query";

  /** @type {import("@cloudflare/workers-types/experimental").D1Database} */
  export let D1;
  /** @type {string} */
  export let bindingName;

  /** @type {string} */
  export let sqlToRun;

  $: sqlResultsQuery = createQuery({
    queryKey: ["d1", bindingName, "sqlResults", sqlToRun],
    queryFn: () => D1.prepare(sqlToRun).all(),
  });
</script>

{#if $sqlResultsQuery.isLoading}
  🌀 Loading results...
{:else if $sqlResultsQuery.isError}
  <pre>💥 {$sqlResultsQuery.error.message}</pre>
{:else if $sqlResultsQuery.isSuccess}
  {@const { meta, results } = $sqlResultsQuery.data}

  {#if meta.changed_db}
    {meta.changes} rows are changed.
  {:else}
    <table style="white-space: nowrap;" border={1}>
      <thead>
        <tr>
          {#each Object.keys(results[0]) as column}
            <th>{column}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each results as row}
          <tr>
            {#each Object.values(row) as value}
              <td>{value}</td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
{/if}
