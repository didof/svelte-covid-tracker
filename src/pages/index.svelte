<script>
  import { onMount, afterUpdate } from "svelte";

  import { Hero, Chart, Cockpit, Modal, FromNewSet, List } from "../components";

  import { getData } from "../data/requests";
  import { forChart, selectLast } from "../data/parsers";

  import { days } from "../store/days";
  import { sets } from "../store/sets";
  import { region } from "../store/region";

  let howManyDays;
  let whichSet;
  let description = "Rapporto tra i tamponi effettuati e i casi testati";
  let parsed;

  let loc = "italy";
  let reg = undefined;

  const manageData = async (type, location, region = undefined) => {
    //TODO: will be able to pass 'historic' and 'italy' as arguments
    const raw = await getData(type, location, region);
    const decreased = await selectLast(howManyDays, raw);
    parsed = forChart(decreased, whichSet);

    return parsed;
  };

  sets.subscribe(value => {
    whichSet = value.selected;
    description = value.description;

    parsed = manageData("historic", loc, reg);
  });

  days.subscribe(value => {
    howManyDays = value;

    parsed = manageData("historic", loc, reg);
  });

  region.subscribe(value => {
    if (value === "Italia") loc = "italy";
    else {
      loc = "region";
      reg = value;
    }

    parsed = manageData("historic", loc, reg);
  });

  const config = {
    title: "Create Custom Set",
    deleteBtn: true
  };
</script>

<Hero title="Covid-19 Traker" />
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
          <p class="card-header-title has-text-dark is-size-4">
            {#if reg}{reg}{:else}{loc}{/if}
            - {whichSet}
          </p>
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
