<script>
  import { onMount } from "svelte";

  import { checkPrevData } from "../data/requests";

  import { sets } from "../store/sets";
  import { ui } from "../store/ui";

  let options;

  let label = "";
  let description = "";

  let datasets = [];
  onMount(() => {
    options = checkPrevData("options");
  });

  const handle_create = () => {
    const newSet = { label, description, datasets };
    sets.update(value => ({
      ...value,
      options: [...value.options, newSet]
    }));
    ui.update(value => ({
      ...value,
      modal: !value.modal
    }));
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

<button on:click={handle_create}>Create</button>
