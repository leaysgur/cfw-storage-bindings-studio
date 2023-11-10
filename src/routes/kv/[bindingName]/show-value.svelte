<script>
  import { createQuery } from "@tanstack/svelte-query";
  import { decodeText } from "$lib/utils.js";

  /** @type {import("@cloudflare/workers-types/experimental").KVNamespace} */
  export let KV;
  /** @type {string} */
  export let bindingName;
  /** @type {import("@cloudflare/workers-types/experimental").KVNamespaceListKey<unknown>} */
  export let key;

  const getQuery = createQuery({
    queryKey: ["kv", bindingName, key.name],
    queryFn: () => KV.get(key.name, "arrayBuffer"),
    select: (data) => (data === null ? null : decodeText(data)),
  });
</script>

{#if $getQuery.isLoading}
  🌀 Loading value...
{:else if $getQuery.isError}
  <pre>💥 {$getQuery.error.message}</pre>
{:else if $getQuery.isSuccess}
  {#if $getQuery.data === null}
    <pre>🙈 Value was `null`...</pre>
  {:else}
    <!-- TODO: view as prettify JSON, image viewer? -->
    <textarea readonly disabled>{$getQuery.data}</textarea>
  {/if}
{/if}
