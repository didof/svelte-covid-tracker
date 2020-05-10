<script>
  export let regions;
</script>

{#if !regions}
  <div>loading...</div>
{:else}
  <div class="list is-hoverable">
    {#each regions as { id, name } (id)}
      <span class="list-item">{name}</span>
    {/each}

  </div>
{/if}
