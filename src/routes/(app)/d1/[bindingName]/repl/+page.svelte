<script>
  import { getContext } from "svelte";
  import { createQuery } from "@tanstack/svelte-query";
  // @ts-ignore: Cannot find type declarations...why?
  import CodeMirror from "svelte-codemirror-editor";
  // XXX: `basic-setup` is not working...why??
  import { autocompletion } from "@codemirror/autocomplete";
  import { lineNumbers, highlightActiveLine, highlightActiveLineGutter } from "@codemirror/view";
  import { defaultHighlightStyle, syntaxHighlighting } from "@codemirror/language";
  import { sql, SQLite } from "@codemirror/lang-sql";
  import { page } from "$app/stores";
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

  const { bindings } = getContext("appContext");

  let bindingName = $derived($page.params.bindingName);
  /** @type {import("@cloudflare/workers-types/experimental").D1Database} */
  let D1 = $derived(bindings[bindingName]);

  let tableSchemaQuery = $derived(
    createQuery({
      queryKey: ["d1", bindingName, "tableSchema"],
      queryFn: () => queryTableSchema(D1),
    }),
  );

  let draftValue = $state("SELECT * FROM \n\n");
  let sqlToRun = $state("");
</script>

<section>
  {#if $tableSchemaQuery.isLoading}
    🌀 Loading table schema...
  {:else if $tableSchemaQuery.isError}
    <pre>💥 {$tableSchemaQuery.error.message}</pre>
  {:else if $tableSchemaQuery.isSuccess}
    <div class="editor">
      <CodeMirror
        bind:value={draftValue}
        lang={sql({ dialect: SQLite, schema: $tableSchemaQuery.data })}
        useTab={false}
        basic={false}
        extensions={[
          lineNumbers(),
          highlightActiveLine(),
          highlightActiveLineGutter(),
          syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
          autocompletion(),
        ]}
        styles={{ "&": { backgroundColor: "var(--gray-1)", color: "var(--gray-9)" } }}
      />
      <div class="action">
        <button on:click={() => (sqlToRun = draftValue)} disabled={draftValue.trim() === ""}
          >Run</button
        >
        <button on:click={() => (draftValue = sqlToRun = "")}>Clear</button>
      </div>
    </div>
  {/if}

  <SqlResults {D1} {bindingName} {sqlToRun} />
</section>

<style>
  section {
    display: grid;
    gap: var(--size-4);
  }

  .editor {
    display: grid;
    gap: var(--size-2);
  }

  .action {
    display: flex;
    justify-content: flex-end;
    gap: var(--size-2);
  }
</style>
