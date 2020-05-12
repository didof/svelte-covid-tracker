<script>
   import { onMount } from 'svelte'
  import { days } from "../store/days";

   let howManyDays
   onMount(() => {
      days.subscribe(value => {
         howManyDays = value
      })
   })

  const handle_changeDays = (e) => {
     const { value } = e.target
     days.update(item => value)
  }

  let dayss = 7;
</script>

<div class="box">
  <p>{howManyDays} days</p>
  <input
    type="range"
    min="7"
    max="30"
    step="1"
    value={howManyDays}
    on:change={handle_changeDays} />
</div>
