<script>
  import { url } from "@sveltech/routify";

  import Hero from "../../components/hero.svelte";
  

  const posts = [
    { id: 1, label: "first_post", path: "./first-post" },
    { id: 2, label: "second_post", path: "./second-post" },
    { id: 3, label: "third_post", path: "./third-post" }
  ];

  
</script>

<Hero title="My blog" subtitle="Welcome" />
<div class="columns is-5">
  <div class="column is-one-fifth">other</div>
  <div class="column">
    <ul>
      {#each posts as { id, label, path } (id)}
        <li>
          <a href={$url(`blog/${path}`)}>{label}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>
