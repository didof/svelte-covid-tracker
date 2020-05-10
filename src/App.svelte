<script>
  import { onMount } from "svelte";
  import { getRegionsList } from "./data";

  //   async function fetch_data() {
  //     const proxy = "http://localhost:8080/";
  //     const url = "http://utilitylab.cloud/api/italia";
  //     let response = await fetch(proxy + url);
  //     data = await response.json();
  //   }

  let regions = "loading...";
  onMount(async () => {
    regions = await getRegionsList();
  });
</script>

<div>{JSON.stringify(regions, null, 4)}</div>
