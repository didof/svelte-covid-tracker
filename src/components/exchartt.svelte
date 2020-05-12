<script>
  import { onMount, onDestroy } from "svelte";
  import Chart from "chart.js";

  // import { getItalySummary } from "../data/requests";
  // import { forItalyChart } from "../data/parsers";
  let chartType = "bar";

  let chartElement;
  let chart;

  let summary, parsed;

  function createChart() {
    chart = new Chart(chartElement.getContext("2d"), {
      type: chartType,
      data: parsed
    });
  }

  onMount(async () => {
    // summary = await getItalySummary();
    // parsed = await forItalyChart(summary);
    // createChart();
  });

  onDestroy(() => {
    if (chart) {
      chart.destroy();
    }
  });
</script>

<select bind:value={chartType}>
  <option value="line">Line</option>
  <option value="bar">Bar</option>
</select>
<div class="container">
  <canvas bind:this={chartElement} />
</div>

<style>
.container {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
