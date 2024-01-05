<script>
  import { onMount, setContext } from "svelte";
  import { getBindings } from "cfw-bindings-wrangler-bridge";
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";

  /** @type {Record<string, string>} */
  const CTOR_TO_TYPE = {
    D1Database$: "D1",
    KVNamespace$: "KV",
    R2Bucket$: "R2",
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

  let bindingsPromise = $state(new Promise(() => {}));
  onMount(() => {
    bindingsPromise = fetch("/settings.json")
      .then((r) => r.json())
      .then((j) => j.bridgeOrigin)
      .then((bridgeWorkerOrigin) => getBindings({ bridgeWorkerOrigin }))
      .then((bindings) => {
        appContext.bindings = bindings;
        // @ts-ignore: Just for debugging and demonstration purposes
        globalThis.env = bindings;
        return bindings;
      });
  });
</script>

{#await bindingsPromise}
  🌀 Loading bindings...
{:then}
  <div class="selector">
    <ul>
      {#each Object.entries(appContext.bindings).sort( ([a], [b]) => a.localeCompare(b), ) as [name, binding]}
        {@const type = CTOR_TO_TYPE[binding.constructor.name] ?? "-"}
        <li>
          <a href={`/${type.toLowerCase()}/${name}`}>
            [{type}] {name}
          </a>
        </li>
      {/each}
    </ul>
  </div>

  <QueryClientProvider client={new QueryClient()}>
    <slot />
  </QueryClientProvider>
{:catch err}
  <pre>💥 {err.message}</pre>
{/await}

<style>
  .selector {
    padding-block: var(--size-3);
    border-bottom: var(--border-size-1) solid var(--indigo-2);
    background-color: var(--gray-10);
  }
</style>
