<script>
  import { getContext } from "svelte";
  import { createQuery, useQueryClient } from "@tanstack/svelte-query";
  import { page } from "$app/stores";

  /** @param {string} tableName */
  const filterPrivateTables = (tableName) =>
    !(
      tableName.startsWith("_cf") ||
      tableName.startsWith("sqlite_") ||
      tableName.startsWith("d1_")
    );

  const { bindings } = getContext("appContext");
  const queryClient = useQueryClient();

  $: bindingName = $page.params.bindingName;
  /** @type {import("@cloudflare/workers-types/experimental").D1Database} */
  $: D1 = bindings[bindingName];

  $: queryKey = ["d1", bindingName, "tables"];
  $: tablesQuery = createQuery({
    queryKey,
    queryFn: () =>
      D1.prepare("SELECT tbl_name FROM sqlite_master WHERE type == ?").bind("table").raw(),
    select: (data) =>
      /** @type {[string][]} data */ (data).filter((r) => filterPrivateTables(r[0])),
  });
</script>

d1/{$page.params.bindingName}

<button
  disabled={$tablesQuery.isFetching}
  on:click={() => queryClient.invalidateQueries({ queryKey })}>Refresh</button
>

{#if $tablesQuery.isLoading}
  🌀 Loading tables...
{:else if $tablesQuery.isError}
  <pre>💥 {$tablesQuery.error.message}</pre>
{:else if $tablesQuery.isSuccess}
  <ul>
    {#each $tablesQuery.data as [tableName]}
      <li><a href={`/d1/${bindingName}/${tableName}`}>{tableName}</a></li>
    {/each}
  </ul>
{/if}

<hr />

<slot />
