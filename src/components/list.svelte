<script>
  import { onMount } from "svelte";
  import { getData } from "../data/requests";

  let regions;
  onMount(async () => {
    regions = await getData("list", "italy");
  });
</script>

<div class="list is-hoverable">
  <span class="list-item">Italia</span>
  {#if regions}
    {#each regions as {denominazione_regione}, index (index)}
    <span class="list-item">{denominazione_regione}</span>
    {/each}
  {/if}
</div>
