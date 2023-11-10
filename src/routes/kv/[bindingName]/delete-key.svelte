<script>
  import { createMutation, useQueryClient } from "@tanstack/svelte-query";

  /** @type {import("@cloudflare/workers-types/experimental").KVNamespace} */
  export let KV;
  /** @type {string} */
  export let bindingName;
  /** @type {import("@cloudflare/workers-types/experimental").KVNamespaceListKey<unknown>} */
  export let key;

  const queryClient = useQueryClient();
  const deleteMutation = createMutation({
    mutationFn: () => KV.delete(key.name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["kv", bindingName] });
    },
  });
</script>

<button
  disabled={$deleteMutation.isPending}
  on:click={() => confirm("Are you sure?") && $deleteMutation.mutate()}
>
  Delete
</button>
