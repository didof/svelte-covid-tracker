<script>
  import { onMount } from "svelte";

  import { region } from "../store/region";

  import { getData } from "../data/requests";

  let regions;
  onMount(async () => {
    regions = await getData("list", "italy");
  });

  const handle_click = e => {
    const newRegion = e.target.innerHTML;
    region.update(value => newRegion);
  };
</script>

<style>
  span:hover {
    background: rgba(36, 125, 233, 0.5);
    color: white;
    cursor: pointer;
  }
</style>

<div class="list is-hoverable">
  <span
    class="list-item has-text-centered"
    class:is-active={$region === 'Italia'}
    on:click={handle_click}>
    Italia
  </span>
  {#if regions}
    {#each regions as { denominazione_regione }, index (index)}
      <span
        class="list-item has-text-centered"
        on:click={handle_click}
        class:is-active={$region === 'Piemonte'}>
        {denominazione_regione}
      </span>
    {/each}
  {/if}
</div>
