<script>
  import { onMount } from "svelte";
  async function fetch_data() {
    const proxy = "http://localhost:8080/";
    const url = "http://utilitylab.cloud/api/italia";
    let response = await fetch(proxy + url);
    data = await response.json();
  }

  let data = 'loading...';
  onMount(() => {
    fetch_data();
  });
</script>

<div>
  {JSON.stringify(data, null, 4)}
</div>
