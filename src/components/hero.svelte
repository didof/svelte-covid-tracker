<script>
   export let title = 'default title'
   export let color = 'primary'
   export let subtitle = "default"
</script>

<section class="hero is-{color} is-bold is-small">
  <div class="hero-body has-text-centered">
    <div class="container">
      <h1 class="title is-size-1">{title}</h1>
      {#if subtitle}
      <p class="subtitle is-size-2">{subtitle}</p>
      {/if}
    </div>
  </div>
</section>