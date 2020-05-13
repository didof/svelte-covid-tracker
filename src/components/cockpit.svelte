<script>
  import Slide from "./slide.svelte";
  import Select from "./select.svelte";
  import ChartType from "./chartType.svelte";
</script>

<style>
  :global(.withDivider) {
    margin-bottom: 10px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>

<div class="card">
  <header class="card-header">
    <p class="card-header-title is-size-3 has-text-dark">Cockpit</p>
    <span class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true" />
      </span>
    </span>
  </header>
  <div class="card-content">
    <div class="content">
      <!-- <ChartType /> -->
      <Slide />
      <Select />
    </div>
  </div>
  <!-- <footer class="card-footer">
    <span class="card-footer-item">Save</span>
    <span class="card-footer-item">Edit</span>
    <span class="card-footer-item">Delete</span>
  </footer> -->
</div>
