<script>
  import { createQuery } from "@tanstack/svelte-query";
  // @ts-ignore: Cannot find type declarations...why??
  import CodeMirror from "svelte-codemirror-editor";
  import { sql, SQLite } from "@codemirror/lang-sql";
  import { excludePrivateTableList } from "$lib/d1";
  import SqlResults from "./sql-results.svelte";

  /** @param {import("@cloudflare/workers-types/experimental").D1Database} D1 */
  const queryTableSchema = async (D1) => {
    /** @type {string[][]} */
    const allTables = await D1.prepare("PRAGMA table_list").raw();

    /** @type {Record<string, string[]>} */
    const schema = {};
    await Promise.all(
      excludePrivateTableList(allTables).map((table) =>
        D1.prepare(`PRAGMA table_info(${table[1]})`)
          .raw()
          .then((rows) => /** @type {string[][]} */ (rows))
          .then((rows) => {
            schema[table[1]] = rows.map((r) => r[1]);
          }),
      ),
    );

    return schema;
  };

  /** @type {import("@cloudflare/workers-types/experimental").D1Database} */
  export let D1;
  /** @type {string} */
  export let bindingName;

  let replOpen = false;
  /** @type {HTMLDialogElement} */
  let dialogRef;
  $: replOpen ? dialogRef?.showModal() : dialogRef?.close();

  $: tableSchemaQuery = createQuery({
    queryKey: ["d1", bindingName, "tableSchema"],
    queryFn: () => queryTableSchema(D1),
    enabled: replOpen,
  });

  let draftValue = "\n\n";
  let sqlToRun = "";
</script>

<button on:click={() => (replOpen = true)}>REPL</button>
<dialog
  bind:this={dialogRef}
  on:close={() => (replOpen = false)}
  style="overflow: auto; block-size: 80dvh; inline-size: 80dvw;"
>
  {#if $tableSchemaQuery.isLoading}
    🌀 Loading table schema...
  {:else if $tableSchemaQuery.isError}
    <pre>💥 {$tableSchemaQuery.error.message}</pre>
  {:else if $tableSchemaQuery.isSuccess}
    <CodeMirror
      bind:value={draftValue}
      lang={sql({ dialect: SQLite, schema: $tableSchemaQuery.data })}
    />
    <hr />
    <button on:click={() => (draftValue = sqlToRun = "")}>Clear</button>
    <button on:click={() => (sqlToRun = draftValue)} disabled={draftValue.trim() === ""}>Run</button>
    <hr />
    {#if sqlToRun !== ""}
      <SqlResults {D1} {bindingName} {sqlToRun} />
    {/if}
  {/if}
</dialog>
