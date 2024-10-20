<script>
  import { getContext } from "svelte";
  import { createQuery, useQueryClient } from "@tanstack/svelte-query";
  import { page } from "$app/stores";
  import { excludePrivateTableList } from "$lib/d1";

  const { bindings } = getContext("appContext");
  const queryClient = useQueryClient();

  /** @type {{ children: import("svelte").Snippet }} */
  let { children } = $props();

  let bindingName = $derived($page.params.bindingName);
  /** @type {import("@cloudflare/workers-types/experimental").D1Database} */
  let D1 = $derived(bindings[bindingName]);

  let queryKey = $derived(["d1", bindingName, "tables"]);
  let tablesQuery = $derived(
    createQuery({
      queryKey,
      queryFn: () =>
        D1.prepare("PRAGMA table_list")
          .raw()
          .then((rows) => /** @type {string[][]} */ (rows)),
      select: (data) => excludePrivateTableList(data).map(([, name, , ncol]) => ({ name, ncol })),
    }),
  );
</script>

<section>
  <h2>
    [D1] {$page.params.bindingName}
  </h2>

  {#if $tablesQuery.isLoading}
    🌀 Loading tables...
  {:else if $tablesQuery.isError}
    <pre>💥 {$tablesQuery.error.message}</pre>
  {:else if $tablesQuery.isSuccess}
    <div class="action">
      <button
        disabled={$tablesQuery.isFetching}
        onclick={() => queryClient.invalidateQueries({ queryKey })}>Refresh tables list</button
      >
    </div>

    <div class="selector">
      <ul>
        {#each $tablesQuery.data as { name, ncol }}
          <li><a href={`/d1/${bindingName}/${name}`}>{name} ({ncol} cols)</a></li>
        {:else}
          <li>No tables...</li>
        {/each}
      </ul>
      <ul>
        <li>
          <a href={`/d1/${bindingName}/repl`}>REPL</a>
        </li>
      </ul>
    </div>
  {/if}
  <div class="main">{@render children()}</div>
</section>

<style>
  section {
    display: grid;
    grid-template:
      "header header" max-content
      "action action" max-content
      "selector main" minmax(0, 1fr)
      / max-content minmax(0, 1fr);
  }

  h2 {
    grid-area: header;
    padding-block-start: var(--size-2);
    padding-inline: var(--size-3);
  }

  .action {
    grid-area: action;
    display: flex;
    justify-content: end;
    border-bottom: var(--border-size-1) solid var(--indigo-2);
    padding-inline: var(--size-3);
    padding-block: var(--size-4);
  }

  .selector {
    grid-area: selector;
    display: flex;
    flex-direction: column;
    gap: var(--size-3);
    padding-block: var(--size-3);
    padding-inline-end: var(--size-3);
    border-right: var(--border-size-1) solid var(--indigo-2);
  }

  .main {
    grid-area: main;
    overflow: hidden;
    padding: var(--size-3);
  }
</style>
