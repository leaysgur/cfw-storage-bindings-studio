<script>
  import { onMount, setContext } from "svelte";
  import { getBindings } from "cfw-bindings-wrangler-bridge";
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";

  /** @type {Record<string, string>} */
  const CTOR_TO_TYPE = {
    D1Database$: "d1",
    KVNamespace$: "kv",
    R2Bucket$: "r2",
  };

  /**
   * @type {{
   *   bindings: Record<string, Function>;
   * }}
   */
  const appContext = {
    bindings: {},
  };
  setContext("appContext", appContext);

  let bindingsPromise = new Promise(() => {});
  onMount(() => {
    bindingsPromise = fetch("/settings.json")
      .then((r) => r.json())
      .then((j) => j.bridgeOrigin)
      .then((bridgeWorkerOrigin) => getBindings({ bridgeWorkerOrigin }))
      .then((bindings) => {
        appContext.bindings = bindings;
        return bindings;
      });
  });
</script>

{#await bindingsPromise}
  🌀 Loading bindings...
{:then}
  <ul>
    {#each Object.entries(appContext.bindings).sort( ([a], [b]) => a.localeCompare(b), ) as [name, binding]}
      {@const type = CTOR_TO_TYPE[binding.constructor.name] ?? "-"}
      <li>
        <a href={`/${type}/${name}`}>
          [{type}] {name}
        </a>
      </li>
    {/each}
  </ul>
  <hr />
  <QueryClientProvider client={new QueryClient()}>
    <slot />
  </QueryClientProvider>
{:catch err}
  <pre>💥 {err.message}</pre>
{/await}

<style>
  :global(body) {
    font-family: ui-monospace, monospace;
    font-size: 0.875rem;
  }
</style>
