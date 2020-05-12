<script>
  import { onMount, afterUpdate } from "svelte";

  import { Hero, Chart, Cockpit } from "../components";

  import { getData } from "../data/requests";
  import { forChart, selectLast, selectSet } from "../data/parsers";

  import { days } from "../store/days";
  import { sets } from "../store/sets";

  let howManyDays;
  let whichSet;
  let description

  sets.subscribe(async value => {
    whichSet = value.selected;
    description = value.description

    const raw = await getData("historic", "italy");
    const decreased = await selectLast(howManyDays, raw);

    parsed = forChart(decreased, whichSet);
  });

  days.subscribe(async value => {
    howManyDays = value;
    const raw = await getData("historic", "italy");
    const decreased = await selectLast(howManyDays, raw);

    parsed = forChart(decreased, whichSet);
  });

  let parsed;
</script>

<Hero title="Covid-19 Traker" subtitle={description}/>
<div class="container">
  <div class="columns">
    <div class="column">other</div>
    <div class="column is-three-fifths">
      <Chart {parsed} />
    </div>
    <div class="column">
      <Cockpit />
    </div>
  </div>

  <!-- <div class="columns is-5">
    <div class="column">
      <Chart type="pie" />
    </div>
    <div class="column is-two-thirds">
      <div class="columns">
        <div class="column">
          <Chart {parsed} />
        </div>
        <div class="column is-one-quarted">
          <Cockpit />
        </div>
      </div>

    </div>
  </div> -->
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
