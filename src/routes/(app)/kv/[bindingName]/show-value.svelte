<script>
  import { createQuery } from "@tanstack/svelte-query";
  import { decodeText } from "$lib/utils.js";

  /** @param {any} data */
  const prettifyJSON = (data) => {
    try {
      return JSON.stringify(JSON.parse(decodeText(data)), null, 2);
    } catch {
      return "🤯 Not valid JSON!";
    }
  };

  const VIEW_TYPES = /** @type {const} */ (["json"]);

  /** 
   * @type {{
   *   KV: import("@cloudflare/workers-types/experimental").KVNamespace;
   *   bindingName: string;
   *   key: import("@cloudflare/workers-types/experimental").KVNamespaceListKey<unknown>;
   * }} 
   */
  let { KV, bindingName, key } = $props();

  /** @type {VIEW_TYPES[number] | null} */
  let viewAs = $state(null);
  /** @type {HTMLDialogElement | null} */
  let dialogRef = $state(null);
  $effect(() => (viewAs !== null ? dialogRef?.showModal() : dialogRef?.close()));

  let getQuery = $derived(
    createQuery({
      queryKey: ["kv", bindingName, key.name],
      queryFn: () => KV.get(key.name, "arrayBuffer"),
    }),
  );
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
        <button onclick={() => (viewAs = viewType)}>{viewType}</button>
      {/each}
    </div>

    <dialog bind:this={dialogRef} onclose={() => (viewAs = null)}>
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
