<script>
  import { createMutation, useQueryClient } from "@tanstack/svelte-query";

  /** @type {import("@cloudflare/workers-types/experimental").KVNamespace} */
  export let KV;
  /** @type {string} */
  export let bindingName;

  const draft = { key: "", value: "" };

  const queryClient = useQueryClient();
  $: putMutation = createMutation({
    mutationFn: () => KV.put(draft.key, draft.value),
    onSuccess: () => {
      draft.key = "";
      draft.value = "";
      queryClient.invalidateQueries({ queryKey: ["kv", bindingName, "list"] });
    },
  });
</script>

<form on:submit|preventDefault={() => $putMutation.mutate()}>
  <label
    >Key:
    <input type="text" bind:value={draft.key} required />
  </label>
  <label
    >Value:
    <textarea bind:value={draft.value} />
    OR
    TODO: <input type="file" />
  </label>
  <button type="submit" disabled={$putMutation.isPending}>Put</button>
</form>
