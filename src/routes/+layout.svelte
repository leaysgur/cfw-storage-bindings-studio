<script>
  // Base
  import "open-props/style";
  import "open-props/normalize";

  // Theme toggler
  import "open-props/switch/dark";
  import "open-props/switch/light";

  let theme = $state("");
  $effect(() => {
    theme === ""
      ? document.documentElement.removeAttribute("data-theme")
      : document.documentElement.setAttribute("data-theme", theme);
  });
</script>

<div class="root">
  <header>
    <a href="/">/</a>

    <div class="menu">
      <label>
        <span>Theme:</span>
        <select bind:value={theme}>
          <option value="">system</option>
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>
      </label>

      <a href="https://github.com/leaysgur/cfw-storage-bindings-studio" target="_blank">GitHub</a>
    </div>
  </header>

  <main><slot /></main>
</div>

<style>
  .root {
    display: grid;
    grid-template-rows: max-content minmax(0, 1fr);
    min-block-size: 100dvh;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: var(--size-3);
    padding-block: var(--size-2);
    background-color: var(--gray-11);
  }

  .menu {
    display: flex;
    gap: var(--size-3);
    align-items: center;
    justify-content: space-between;
  }
  /* FIX: Once CSS Nesting is supported */
  .menu > label > span {
    color: var(--gray-1);
  }

  main {
    display: grid;
    grid-template-rows: max-content minmax(0, 1fr);
  }
</style>
