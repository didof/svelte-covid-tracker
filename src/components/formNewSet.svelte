<script>
  import { onMount, afterUpdate } from "svelte";

  import { checkPrevData } from "../data/requests";

  import { sets } from "../store/sets";
  import { ui } from "../store/ui";

  let options = null
  onMount(() => {
    // the issue is that when this component mounts, the options are not ye saved in the sessionStorage, so options var will be null, therefore the modal is partially incomplete. To solve this issue I force it to call again if the first time was not successufll
    options = checkPrevData("options") ? checkPrevData("options") : null;
  })

  let label = "";
  let description = "";
  let datasets = [];

  let saveInLocalStorage = false;
  const key = "custom-sets";
  

  const handle_create = () => {
    // create newSet object
    let isValid = validation();
    if (!isValid) return;

    const newSet = { label, description, datasets };

    // updated sets
    sets.update(value => ({
      ...value,
      selected: datasets,
      description,
      options: [...value.options, newSet]
    }));

    // check if must save in localStorage
    if (saveInLocalStorage) {
      let customSets;
      // retrieve previous custom sets (if any)
      const prev = JSON.parse(localStorage.getItem(key));
      if (prev) {
        customSets = [...prev, newSet];
      } else {
        customSets = [newSet];
      }
      localStorage.setItem(key, JSON.stringify(customSets));
    }

    // close the modal
    ui.update(value => ({
      ...value,
      modal: !value.modal
    }));

    // empty the form
    handle_cancel();
  };

  const handle_cancel = () => {
    label = "";
    description = "";
    datasets = "";
  };

  const handle_switch = e => {
    saveInLocalStorage = !saveInLocalStorage;
  };

  const validation = () => {
    if (!label || !description || datasets.length < 1) return false;
    return true;
  };
</script>

<div class="container">

  <div class="field">
    <label class="label">Set Name</label>
    <div class="control">
      <input
        class="input"
        type="text"
        placeholder="foo/bar/baz"
        bind:value={label} />
    </div>
  </div>

  <div class="field">
    <label class="label">Description</label>
    <div class="control">
      <input
        class="input"
        type="text"
        placeholder="This will emphasise the relationship between..."
        bind:value={description} />
    </div>
  </div>

</div>

{#if options}
  {#each options as option, index (index)}
    <label>
      <input type="checkbox" bind:group={datasets} value={option} />
      {option.split('_').join(' ')}
    </label>
  {/each}
{/if}

<div class="buttons has-addons">
  <button class="button is-success" on:click={handle_create}>Save</button>
  <button
    class="button is-light"
    on:click={handle_switch}
    class:is-info={!saveInLocalStorage}
    class:is-success={saveInLocalStorage}>
    {#if saveInLocalStorage}in localStorage{:else}temporarily{/if}
  </button>
</div>
<button class="button is-success is-light" on:click={handle_cancel}>
  Cancel
</button>
