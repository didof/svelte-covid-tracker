<script>
  import { onMount } from "svelte";
  import { sets } from "../store/sets";
  import { ui } from "../store/ui";

  import { formatToArray } from "../data/parsers";

  let fetched;
  let selected;
  let isSetCustom = false

  const fetchSets = () => {
    sets.subscribe(value => {
      fetched = value.options;
      selected = value.selected;
    });
  };

  onMount(() => {
    fetchSets();
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

    // check if selected custom set, if so, di-disable to remove button
    isSetCustom = isCustom()
  };

  const handle_modal = () => {
    ui.update(value => ({
      ...value,
      modal: !value.modal
    }));
  };

  const isCustom = () => {
    let itIs = false
    const selectedString = selected.join("-");
    fetched.forEach(el => {
      let dataset = el.datasets.join("-");
      if (dataset === selectedString && el.id !== false) {
        // element found and id is not false, so it's a custom one
        itIs = true;
      }
    });

    return itIs
  };


  const handle_remove = () => {
    const selectedString = selected.join("-");
    fetched.forEach(el => {
      let dataset = el.datasets.join("-");
      if (dataset === selectedString && el.id !== false) {
        // element found and id is not false, so it's a custom one
        // get custom-sets from local storage
        let customSets = JSON.parse(localStorage.getItem("custom-sets"));
        // filter out the removed one
        let updatedSets = customSets.filter(set => set.id !== el.id);
        // put in place the updated custom sets
        localStorage.setItem("custom-sets", JSON.stringify(updatedSets));
        // refresh page (will look for better solution here)
        window.location.reload(false);
      }
    });
  };
</script>

<style>
  .buttons {
    margin-top: 5px;
  }
  select {
    width: 100%;
    border: none;
    outline: none;
    padding-bottom: 5px;
  }
  .is-custom {
    font-style: italic
  }
</style>

<div class="container withDivider">
  {#if fetched}
    <select value={selected} on:change={handle_change}>
      {#each fetched as { label, description, datasets, id }, index (index)}
        <option value={datasets} class:is-custom={id}>{label}</option>
      {/each}
    </select>
    <div class="buttons has-addons is-centered">
      <button
        class="button is-primary is-rounded is-small"
        on:click={handle_modal}>
        Add
      </button>
      <button
        class="button is-danger is-outlined is-rounded is-small"
        disabled={!isSetCustom}
        on:click={handle_remove}>
        Remove
      </button>
    </div>
  {:else}
    <div>Loading sets...</div>
  {/if}
</div>
