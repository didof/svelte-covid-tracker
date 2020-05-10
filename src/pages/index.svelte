<script>
  import { onMount } from "svelte";
  import { getRegionsList } from "../data";

  import Hero from "../components/hero.svelte";
  import RegionsList from "../components/regionsList.svelte";

  let regions;
  onMount(async () => {
    regions = await getRegionsList();
  });
</script>

<div class="container">
  <div class="columns is-5">
    <div class="column is-one-fifth">
      <RegionsList {regions} />
    </div>
    <div class="column">other</div>
  </div>
</div>
