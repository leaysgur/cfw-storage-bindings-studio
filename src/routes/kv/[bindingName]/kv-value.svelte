<script>
  import { createMutation, createQuery, useQueryClient } from "@tanstack/svelte-query";

  /** @type {import("@cloudflare/workers-types/experimental").KVNamespace} */
  export let KV;
  /** @type {string} */
  export let bindingName;
  /** @type {import("@cloudflare/workers-types/experimental").KVNamespaceListKey<unknown>} */
  export let key;

  $: getQuery = createQuery({
    queryKey: ["kv", bindingName, key.name],
    queryFn: () => KV.get(key.name, "arrayBuffer"),
  });

  /** @type {string | null} */
  let value = null;
  let fetched = false;
  $: ((query) => {
    // Not ready
    if (!query.isSuccess) return;
    // Already loaded
    if (fetched) return;

    // Value was `null`
    if (query.data === null) {
      // Unexpected, non-existent key
    } else {
      value = new TextDecoder().decode(query.data);
    }
    fetched = true;
  })($getQuery);

  const queryClient = useQueryClient();
  const putMutation = createMutation({
    mutationFn: () => KV.put(key.name, value ?? "TODO: if null"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["kv", bindingName, key.name] });
    },
  });
</script>

{#if $getQuery.isLoading}
  🌀 Loading value...
{:else if $getQuery.isError}
  <pre>💥 {$getQuery.error.message}</pre>
{:else if $getQuery.isSuccess}
  {#if value === null}
    <pre>🙈 Value was `null`</pre>
  {:else}
    <fieldset disabled={$putMutation.isPending}>
      <textarea bind:value />

      <button on:click={() => $putMutation.mutate()}>Put</button>
    </fieldset>
  {/if}
{/if}
