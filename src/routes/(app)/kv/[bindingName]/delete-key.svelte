<script>
  import { createMutation, useQueryClient } from "@tanstack/svelte-query";

  /** 
   * @type {{
   *   KV: import("@cloudflare/workers-types/experimental").KVNamespace;
   *   bindingName: string;
   *   key: import("@cloudflare/workers-types/experimental").KVNamespaceListKey<unknown>;
   * }} 
   */
  let { KV, bindingName, key } = $props();

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
  onclick={() => confirm("Are you sure?") && $deleteMutation.mutate()}
>
  Delete
</button>
