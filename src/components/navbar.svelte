<script>
  import { url, isActive } from "@sveltech/routify";

  let isOpen = false;
  const links = [
    { id: 1, label: "Home", path: "./index" },
    { id: 2, label: "About", path: "./about" },
    { id: 3, label: "Blog", path: "./blog" },
    { id: 4, label: "Tools", path: "./tools" },
    // { id: 4, label: "React Version", url: "/my-github" }
  ];
</script>

<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">

    <span
      role="button"
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded={isOpen}
      data-target="page_list"
      class:is-active={isOpen}
      on:click={() => (isOpen = !isOpen)}>
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </span>
  </div>

  <div id="page_list" class="navbar-menu" class:is-active={isOpen}>
    <div class="navbar-start">

      {#each links as { label, path, id } (id)}
        <a
          class="navbar-item"
          href={$url(path)}
          class:is-active={$isActive(path)}>
          {label}
        </a>
      {/each}
    </div>
  </div>
</nav>
