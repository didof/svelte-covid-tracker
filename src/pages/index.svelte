<script>
  import Hero from "../components/hero.svelte";
  import RegionsList from "../components/regionsList.svelte";
  import Chart from "../components/chart.svelte";

  import { onMount } from 'svelte'
  import { getRegionsList } from "../data";

  let regions

  onMount(async () => {
    regions = await getRegionsList()
  })
</script>

<div class="container">
  <div class="columns is-5">
    <div class="column is-one-fifth">
      <RegionsList {regions} />
    </div>
    <div class="column">
      <Chart />
    </div>
  </div>
</div>

<!-- <ul>
  <li>isolamento_domicilare</li>
  <li>ricoverati_con_sintomi</li>
  <li>totale_ospedalizzati</li>
  <li>terapia_intensiva</li>
  <li>dimessi_guariti</li>
  <li>deceduti</li>
</ul>
<ul>
  <li>totale_casi</li>
  <li>tamponi</li>
  <li>casi_testati</li>
  <li>totale_positivi</li>
  <li>nuovi_positivi</li>
  <li>variazione_totale_positivi</li>
</ul> -->
