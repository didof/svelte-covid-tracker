<script>
   export let title = 'default title'
   export let subtitle = 'default subtitle'
   export let color = 'primary'
</script>

<section class="hero is-{color} is-bold is-small">
  <div class="hero-body has-text-centered">
    <div class="container">
      <h1 class="is-size-1">{title}</h1>
      <p class="title is-size-2">{subtitle}</p>
    </div>
  </div>
</section>