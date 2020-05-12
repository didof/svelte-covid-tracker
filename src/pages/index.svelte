<script>
  import Hero from "../components/hero.svelte";
  // import RegionsList from "../components/regionsList.svelte";
  import Chart from "../components/chart.svelte";

  import { onMount } from "svelte";
  import { getData } from "../data/requests";
  import parsers from '../data/parsers'

  let regions;

  let parsed
  onMount(async () => {
    const raw = await getData('historic', 'italy')
    console.log(raw)
    parsed = parsers.forChart(raw)
    // console.log(parsed)
  });
</script>

<div class="container">
  <div class="columns is-5">
    <div class="column is-one-third">
      <Chart type="pie" />
    </div>
    <div class="column">
      <Chart {parsed} />
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
