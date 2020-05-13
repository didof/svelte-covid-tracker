<script>
  import { type } from "../store/type";

  let chartType;
  type.subscribe(value => {
    chartType = value;
  });

  const handle_change = () => {
    type.set(chartType);
  };
</script>

<div class="box">
  <select bind:value={chartType} on:change={handle_change}>
    <option value="line">line</option>
    <option value="bar">bar</option>
  </select>
</div>
