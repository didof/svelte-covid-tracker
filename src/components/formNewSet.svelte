<script>
  import { onMount } from "svelte";

  import { checkPrevData } from "../data/requests";

  import { sets } from "../store/sets";
  import { ui } from "../store/ui";

  let options;

  let label = "";
  let description = "";
  let datasets = [];

  let save = false;

  onMount(() => {
    options = checkPrevData("options");
  });

  const handle_create = () => {
    // create newSet object
    const newSet = { label, description, datasets };

    // updated sets
    sets.update(value => ({
      ...value,
      selected: datasets,
      description,
      options: [...value.options, newSet]
    }));

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

  const handle_change = e => {
    const { value } = e.target;
    save = value;
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

<button class="button is-success" on:click={handle_create}>Save</button>
<select value={save} on:change={handle_change}>
  <option value={false}>temporarily</option>
  <option value="sessionStorage">in session</option>
  <option value="localStorage">in local</option>
</select>
<button class="button is-success is-light" on:click={handle_cancel}>
  Cancel
</button>
