<script>
  import { createQuery } from "@tanstack/svelte-query";
  import { decodeText } from "$lib/utils.js";

  /** @type {import("@cloudflare/workers-types/experimental").KVNamespace} */
  export let KV;
  /** @type {string} */
  export let bindingName;
  /** @type {import("@cloudflare/workers-types/experimental").KVNamespaceListKey<unknown>} */
  export let key;

  /** @type {string | null} */
  let viewAs = null;
  /** @type {HTMLDialogElement} */
  let dialogRef;
  $: viewAs !== null ? dialogRef?.showModal() : dialogRef?.close();

  const getQuery = createQuery({
    queryKey: ["kv", bindingName, key.name],
    queryFn: () => KV.get(key.name, "arrayBuffer"),
    select: (data) => (data === null ? null : decodeText(data)),
  });

  /** @param {any} data */
  const prettifyJSON = (data) => {
    try {
      return JSON.stringify(JSON.parse(data), null, 2);
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
    <div>
      {#each ["json"] as viewType}
        <button on:click={() => (viewAs = viewType)} style="font-size: .6rem">{viewType}</button>
      {/each}
    </div>
    <textarea readonly disabled>{$getQuery.data}</textarea>

    <dialog
      bind:this={dialogRef}
      on:close={() => (viewAs = null)}
      style="overflow: auto; max-block-size: 80dvh; max-inline-size: 80dvw;"
    >
      {#if viewAs === "json"}
        <pre>{prettifyJSON($getQuery.data)}</pre>
      {/if}
    </dialog>
  {/if}
{/if}
