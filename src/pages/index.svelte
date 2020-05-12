<script>
  import { onMount, afterUpdate } from "svelte";

  import { Hero, Chart, Cockpit } from "../components";

  import { getData } from "../data/requests";
  import { forChart, selectLast, selectSet } from "../data/parsers";

  import { days } from "../store/days";
  import { sets } from "../store/sets";

  let howManyDays;
  let whichSet;
  let description;
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
    return parsed
  });

  days.subscribe(value => {
    howManyDays = value;

    parsed = manageData();
  });
</script>

<Hero title="Covid-19 Traker" subtitle={description} />
<div class="container">
  <div class="columns">
    <div class="column">
      <ul>
        <li>Fai un modal per la creazione di un nuovo set, vedi su quel svelte shopping cart come farlo figo</li>
        <li>i sets devono essere salvati in localStorage</li>
        <li>bottone per hard fetch dei dati</li>
      </ul>
    
    </div>
    <div class="column is-three-fifths">
      <Chart {parsed} />
    </div>
    <div class="column">
      <Cockpit />
    </div>
  </div>
</div>
