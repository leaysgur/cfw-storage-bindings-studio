<script>
  import { createMutation, createQuery, useQueryClient } from "@tanstack/svelte-query";
  import { decodeText, encodeText } from "$lib/utils.js";

  /** @type {import("@cloudflare/workers-types/experimental").KVNamespace} */
  export let KV;
  /** @type {string} */
  export let bindingName;
  /** @type {import("@cloudflare/workers-types/experimental").KVNamespaceListKey<unknown>} */
  export let key;

  let editing = false;

  /** @type {HTMLDialogElement} */
  let dialogRef;
  $: editing ? dialogRef?.showModal() : dialogRef?.close();

  $: getQuery = createQuery({
    queryKey: ["kv", bindingName, key.name],
    queryFn: () => KV.get(key.name, "arrayBuffer"),
    enabled: editing,
    select: (data) => (data === null ? null : decodeText(data)),
  });

  const queryClient = useQueryClient();
  const putMutation = createMutation({
    /** @param {File | string} value */
    mutationFn: (value) =>
      Promise.resolve(value instanceof File ? value.arrayBuffer() : encodeText(value)).then(
        (value) => KV.put(key.name, value),
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["kv", bindingName, key.name] });
      editing = false;
    },
  });
</script>

<dialog bind:this={dialogRef} on:close={() => (editing = false)}>
  {#if $getQuery.isLoading}
    🌀 Loading value...
  {:else if $getQuery.isError}
    <pre>💥 {$getQuery.error.message}</pre>
  {:else if $getQuery.isSuccess}
    {#if $getQuery.data === null}
      <pre>🙈 Value was `null`</pre>
      <button on:click={() => (editing = false)}>Cancel</button>
    {:else}
      <form
        on:submit|preventDefault={(ev) => {
          const data = new FormData(ev.currentTarget);
          const [textValue, binaryValue] = [data.get("text-value"), data.get("binary-value")];

          // If file selected, prefer to use
          if (binaryValue instanceof File && binaryValue.size !== 0)
            return $putMutation.mutate(binaryValue);
          $putMutation.mutate(String(textValue));
        }}
      >
        <label>
          Value:
          <div>
            <textarea name="text-value">{$getQuery.data}</textarea>
            OR <input type="file" name="binary-value" />
          </div>
        </label>
        <div>
          <button on:click={() => (editing = false)}>Cancel</button>
          <button type="submit" disabled={$putMutation.isPending}>Put</button>
        </div>
      </form>
    {/if}
  {/if}
</dialog>

<button on:click={() => (editing = true)}>Update</button>

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

  textarea {
    resize: both;
  }
</style>
