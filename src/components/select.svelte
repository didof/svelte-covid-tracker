<script>
  import { onMount } from "svelte";
  import { sets } from "../store/sets";
  import { ui } from "../store/ui";

  import { formatToArray } from "../data/parsers";

  let fetched;
  let selected;

  onMount(() => {
    sets.subscribe(value => {
      console.log(fetched)
      fetched = value.options;
      console.log(fetched)
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

  const handle_modal = () => {
    ui.update(value => ({
      ...value,
      modal: !value.modal
    }));
  };
</script>

{#if fetched}
  <div class="columns is-gapless">
    <div class="column">
      <select value={selected} on:change={handle_change}>
        {#each fetched as { label, description, datasets }, index (index)}
          <option value={datasets}>{label}</option>
        {/each}
      </select>
    </div>
    <div class="column is-one-fitfh">
      <button on:click={handle_modal}>+</button>
    </div>
  </div>
{:else}
  <div>Loading sets...</div>
{/if}
