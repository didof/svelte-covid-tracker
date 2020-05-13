<script>
  import { onMount } from "svelte";
  import { days } from "../store/days";

  let howManyDays;
  onMount(() => {
    days.subscribe(value => {
      howManyDays = value;
    });
  });

  const handle_changeDays = e => {
    const { value } = e.target;
    days.update(item => value);
  };
</script>

<style>
  input {
    width: 100%
  }
  
</style>

<div class="container withDivider">
  <p class="has-text-dark has-text-centred">Last {howManyDays} days</p>
  <input
    type="range"
    min="7"
    max="70"
    step="1"
    value={howManyDays}
    on:change={handle_changeDays} />
</div>
