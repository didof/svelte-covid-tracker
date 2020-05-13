<script>
  import { onMount, afterUpdate } from "svelte";

  import { Hero, Chart, Cockpit, Modal, FromNewSet, List } from "../components";

  import { getData } from "../data/requests";
  import { forChart, selectLast } from "../data/parsers";

  import { days } from "../store/days";
  import { sets } from "../store/sets";

  let howManyDays;
  let whichSet;
  let description = "Rapporto tra i tamponi effettuati e i casi testati";
  let parsed;

  const manageData = async () => {
    //TODO: will be able to pass 'historic' and 'italy' as arguments
    const raw = await getData("historic", "italy");
    const decreased = await selectLast(howManyDays, raw);
    parsed = forChart(decreased, whichSet);

    return parsed;
  };

  sets.subscribe(value => {
    whichSet = value.selected;

    description = value.description;

    parsed = manageData();
    return parsed;
  });

  days.subscribe(value => {
    howManyDays = value;

    parsed = manageData();
  });

  const config = {
    title: "Create Custom Set",
    deleteBtn: true
  };
</script>

<!-- <Hero title="Covid-19 Traker" subtitle={description} /> -->
<Modal {...config}>
  <FromNewSet />
</Modal>
<div class="container">
  <div class="columns">
    <div class="column">
      <List />
    </div>
    <div class="column is-three-fifths">
      <div class="card">
        <div class="card-header">
          <p class="card-header-title has-text-dark is-size-4">{whichSet}</p>
        </div>
        <div class="card-image">
          <Chart {parsed} />
        </div>
        <div class="card-content">
          <p class="has-text-dark is-size-4">{description}</p>
        </div>
      </div>

    </div>
    <div class="column">
      <Cockpit />
    </div>
  </div>
</div>
