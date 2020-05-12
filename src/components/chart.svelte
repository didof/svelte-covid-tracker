<script>
  import { afterUpdate } from "svelte";
  import Chart from "chart.js";

  export let type = "line";
  let data = {
    labels: ["primo", "secondo", "terzo"]
  };

  export let parsed;

  let element;
  let chart;

  function createChart() {
    let ctx = element.getContext("2d");
    chart = new Chart(ctx, {
      type,
      data: parsed
    });
  }

  afterUpdate(() => {
    if(chart) chart.destroy()
    createChart();
  });
</script>

<canvas width="2" height="1" bind:this={element} />
