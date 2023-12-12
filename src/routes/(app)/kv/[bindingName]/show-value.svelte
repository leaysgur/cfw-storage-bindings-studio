<script>
  import { createQuery } from "@tanstack/svelte-query";
  import { decodeText } from "$lib/utils.js";

  /** @type {import("@cloudflare/workers-types/experimental").KVNamespace} */
  export let KV;
  /** @type {string} */
  export let bindingName;
  /** @type {import("@cloudflare/workers-types/experimental").KVNamespaceListKey<unknown>} */
  export let key;

  const VIEW_TYPES = /** @type {const} */ (["json"]);

  /** @type {VIEW_TYPES[number] | null} */
  let viewAs = null;
  /** @type {HTMLDialogElement} */
  let dialogRef;
  $: viewAs !== null ? dialogRef?.showModal() : dialogRef?.close();

  const getQuery = createQuery({
    queryKey: ["kv", bindingName, key.name],
    queryFn: () => KV.get(key.name, "arrayBuffer"),
  });

  /** @param {any} data */
  const prettifyJSON = (data) => {
    try {
      return JSON.stringify(JSON.parse(decodeText(data)), null, 2);
    } catch {
      return "🤯 Not valid JSON!";
    }
  };
</script>

{#if $getQuery.isLoading}
  🌀 Loading value...
{:else if $getQuery.isError}
  <pre>💥 {$getQuery.error.message}</pre>
{:else if $getQuery.isSuccess}
  {#if $getQuery.data === null}
    <pre>🙈 Value was `null`...</pre>
  {:else}
    <textarea readonly disabled>{decodeText($getQuery.data)}</textarea>
    <div class="view-as">
      View as:
      {#each VIEW_TYPES as viewType}
        <button on:click={() => (viewAs = viewType)}>{viewType}</button>
      {/each}
    </div>

    <dialog bind:this={dialogRef} on:close={() => (viewAs = null)}>
      {#if viewAs === "json"}
        <pre>{prettifyJSON($getQuery.data)}</pre>
      {/if}
    </dialog>
  {/if}
{/if}

<style>
  textarea {
    resize: both;
  }
  .view-as {
    font-size: var(--font-size-0);
  }
</style>
