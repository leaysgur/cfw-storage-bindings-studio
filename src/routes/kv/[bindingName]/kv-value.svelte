<script>
  import { createMutation, createQuery, useQueryClient } from "@tanstack/svelte-query";

  /** @type {import("@cloudflare/workers-types/experimental").KVNamespace} */
  export let KV;
  /** @type {string} */
  export let bindingName;
  /** @type {import("@cloudflare/workers-types/experimental").KVNamespaceListKey<unknown>} */
  export let key;

  const getQuery = createQuery({
    queryKey: ["kv", bindingName, key.name],
    queryFn: () => KV.get(key.name),
  });

  const queryClient = useQueryClient();
  const deleteMutation = createMutation({
    mutationFn: () => KV.delete(key.name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["kv", bindingName] });
    },
  });

  /** @type {string | null} */
  let draftValue = null;
  $: {
    if (draftValue === null && $getQuery.data) draftValue = $getQuery.data;
  }

  const putMutation = createMutation({
    mutationFn: () => KV.put(key.name, String(draftValue)),
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
  <textarea bind:value={draftValue} />
  <button disabled={$putMutation.isPending} on:click={() => $putMutation.mutate()}>Put</button>
  <button disabled={$deleteMutation.isPending} on:click={() => $deleteMutation.mutate()}>
    Delete
  </button>
{/if}
