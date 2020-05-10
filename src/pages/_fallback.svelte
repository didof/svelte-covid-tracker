<script>
  import { route } from "@sveltech/routify";
</script>

<section class="hero is-dark is-bold is-fullheight-with-navbar">
  <div class="hero-body has-text-centered">
    <div class="container">
      <h1 class="is-size-1">404</h1>
      <p class="title is-size-2">The path <code>{$route.leftover}</code> was not found</p>
    </div>
  </div>
</section>
