import { writable } from 'svelte/store'

export const region = writable('Italia')

region.subscribe(value => {
   console.log(value)
})