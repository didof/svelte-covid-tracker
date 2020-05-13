<script>
  import { onMount } from "svelte";
  import { sets } from "../store/sets";
  import { ui } from "../store/ui";

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

  const handle_modal = () => {
    ui.update(value => ({
      ...value,
      modal: !value.modal
    }));
  };
</script>

<style>
  .buttons {
    margin-top: 5px;
  }
  select {
    border: none;
    outline: none;
  }
  
</style>

<div class="container withDivider">
  {#if fetched}
    <select value={selected} on:change={handle_change}>
      {#each fetched as { label, description, datasets }, index (index)}
        <option value={datasets}>{label}</option>
      {/each}
    </select>
    <div class="buttons has-addons is-centered">
      <button class="button is-primary is-rounded" on:click={handle_modal}>
        Add
      </button>
      <button
        class="button is-danger is-outlined is-rounded"
        on:click={handle_modal}>
        Remove
      </button>
    </div>
  {:else}
    <div>Loading sets...</div>
  {/if}
</div>
