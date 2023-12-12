<script>
  // Base
  import "open-props/style";
  import "open-props/normalize";

  // Theme toggler
  import "open-props/switch/dark";
  import "open-props/switch/light";

  let theme = "";
  $: theme === ""
    ? document.documentElement.removeAttribute("data-theme")
    : document.documentElement.setAttribute("data-theme", theme);
</script>

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

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: var(--size-3);
    padding-block: var(--size-2);
    background-color: var(--gray-10);
  }

  .menu {
    display: flex;
    gap: var(--size-3);
    align-items: center;
    justify-content: space-between;

    & > label > span {
      color: var(--gray-1);
    }
  }
</style>
