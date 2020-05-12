<script>
  import { onMount } from "svelte";
  import { sets } from "../store/sets";

  import { formatToArray } from "../data/parsers";

  let fetched;
  let selected;

  onMount(() => {
    sets.subscribe(value => {
      fetched = value.options;
      selected = value.selected;
    });
  });

  const handle_change = e => {
    const { value } = e.target;
    const splitted = formatToArray(value);
    sets.update(value => {
      const selectedOption = value.options.find(set => {
        return set.datasets.toString() == splitted.toString();
      });

      return {
        ...value,
        selected: splitted,
        description: selectedOption.description
      };
    });
  };
</script>

{#if fetched}
  <select value={selected} on:change={handle_change}>
    {#each fetched as { label, description, datasets }, index (index)}
      <option value={datasets}>{label}</option>
    {/each}
  </select>
{:else}
  <div>Loading sets...</div>
{/if}
