<script>
  import { createMutation, useQueryClient } from "@tanstack/svelte-query";
  import { encodeText } from "$lib/utils.js";

  /** @type {import("@cloudflare/workers-types/experimental").KVNamespace} */
  export let KV;
  /** @type {string} */
  export let bindingName;

  const queryClient = useQueryClient();
  $: putMutation = createMutation({
    /** @param {[key: string, value: File | string]} args */
    mutationFn: ([key, fileOrString]) =>
      Promise.resolve(
        fileOrString instanceof File ? fileOrString.arrayBuffer() : encodeText(fileOrString),
      ).then((value) => KV.put(key, value).then(() => key)),
    onSuccess: (key) => {
      queryClient.invalidateQueries({ queryKey: ["kv", bindingName, "list"] });
      queryClient.invalidateQueries({ queryKey: ["kv", bindingName, key] });
    },
  });
</script>

<form
  on:submit|preventDefault={(ev) => {
    const data = new FormData(ev.currentTarget);
    const [key, textValue, binaryValue] = [
      data.get("key"),
      data.get("text-value"),
      data.get("binary-value"),
    ];

    // If file selected, prefer to use
    if (binaryValue instanceof File && binaryValue.size !== 0)
      return $putMutation.mutate([String(key), binaryValue]);
    $putMutation.mutate([String(key), String(textValue)]);
  }}
>
  <label
    >Key:
    <input type="text" name="key" required />
  </label>
  <label
    >Value:
    <div>
      <textarea name="text-value" />
      <span>OR</span>
      <input type="file" name="binary-value" />
    </div>
  </label>
  <button type="submit" disabled={$putMutation.isPending}>Put</button>
</form>

<style>
  form {
    display: grid;
    gap: var(--size-3);
  }

  label {
    display: grid;
    grid-template-columns: var(--size-8) minmax(0, 1fr);
    gap: var(--size-2);

    & > div {
      display: grid;
      gap: var(--size-2);
    }
  }
</style>
