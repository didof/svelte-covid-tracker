<script>
  import Chart from "chart.js";

  import { afterUpdate } from "svelte";

  import { type } from "../store/type";

  export let parsed;

  let element;
  let chart;

  function createChart() {
    let ctx = element.getContext("2d");
    chart = new Chart(ctx, {
      type: chartType,
      data: parsed
    });
  }

  let chartType;
  afterUpdate(() => {
    type.subscribe(value => {
      chartType = value;
      if (chart) chart.destroy();
      createChart();
    });
  });
</script>

<div class="container">
  <canvas width="5" height="3" bind:this={element} />
</div>
