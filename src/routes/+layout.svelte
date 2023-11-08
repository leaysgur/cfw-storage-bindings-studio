<script>
  import { onMount, setContext } from "svelte";
  import { createBridge } from "cfw-bindings-wrangler-bridge";
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";

  /** @param {string} ctorName */
  const ctorToType = (ctorName) =>
    ({
      D1Database$: "d1",
      KVNamespace$: "kv",
      R2Bucket$: "r2",
    })[ctorName] ?? "TODO-" + ctorName;

  const appContext = {
    bindings: {},
  };
  setContext("appContext", appContext);

  const queryClient = new QueryClient();

  let bindingsPromise = new Promise(() => {});
  onMount(() => {
    bindingsPromise = fetch("/settings.json")
      .then((r) => r.json())
      .then((j) => j.bridgeOrigin)
      .then((bridgeOrigin) => createBridge(bridgeOrigin).getBindings())
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
    {#each Object.entries(appContext.bindings) as [name, binding]}
      {@const type = ctorToType(binding.constructor.name)}
      <li>
        <a href={`/${type}/${name}`}>
          [{type}] {name}
        </a>
      </li>
    {/each}
  </ul>
  <hr />
  <QueryClientProvider client={queryClient}>
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
