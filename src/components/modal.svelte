<script>
  export let title = "default";
  export let deleteBtn = false;
  export let content = "default";

  import { ui } from "../store/ui";

  let isOpen;
  ui.subscribe(value => {
    isOpen = value.modal;
  });

  const toggle = () => {
    ui.update(value => ({
      ...value,
      modal: !value.modal
    }));
  };
</script>

<div class="modal" class:is-active={isOpen}>
  <div class="modal-background" on:click={toggle} />
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{title}</p>
      {#if deleteBtn}
        <button class="delete" aria-label="close" on:click={toggle} />
      {/if}
    </header>
    <section class="modal-card-body">{content}</section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
