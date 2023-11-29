<script>
  import { getContext } from "svelte";
  import { createQuery, useQueryClient } from "@tanstack/svelte-query";
  import { page } from "$app/stores";
  import { filterPrivateTableList } from "$lib/d1";
  import SQLRepl from "./sql-repl.svelte";

  const { bindings } = getContext("appContext");
  const queryClient = useQueryClient();

  $: bindingName = $page.params.bindingName;
  /** @type {import("@cloudflare/workers-types/experimental").D1Database} */
  $: D1 = bindings[bindingName];

  $: queryKey = ["d1", bindingName, "tables"];
  $: tablesQuery = createQuery({
    queryKey,
    queryFn: () =>
      D1.prepare("PRAGMA table_list")
        .raw()
        .then((rows) => /** @type {string[][]} */ (rows)),
    select: (data) => filterPrivateTableList(data).map(([, name, , ncol]) => ({ name, ncol })),
  });
</script>

d1/{$page.params.bindingName}

<button
  disabled={$tablesQuery.isFetching}
  on:click={() => queryClient.invalidateQueries({ queryKey })}>Refresh</button
>
<SQLRepl {D1} {bindingName} />

{#if $tablesQuery.isLoading}
  🌀 Loading tables...
{:else if $tablesQuery.isError}
  <pre>💥 {$tablesQuery.error.message}</pre>
{:else if $tablesQuery.isSuccess}
  <ul>
    {#each $tablesQuery.data as { name, ncol }}
      <li><a href={`/d1/${bindingName}/${name}`}>{name} ({ncol} cols)</a></li>
    {/each}
  </ul>
{/if}

<hr />

<slot />
