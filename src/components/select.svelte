<script>
  import { onMount } from "svelte";
  import { sets } from "../store/sets";

  let fetched;
  let selected = 1
  onMount(() => {
    sets.subscribe(value => {
      fetched = value;
    });
  });

  const handle_change = (e) => {
     const { value } = e.target
     selected = value
  }
</script>

{#if fetched}
  <select value={selected} on:change={handle_change}>
    {#each fetched as { label, description, datasets }, index (index)}
      <option value={index}>{label}</option>
    {/each}
  </select>
{:else}
  <div>Loading sets...</div>
{/if}