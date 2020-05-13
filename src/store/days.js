import { writable } from 'svelte/store'

export const days = writable(7)

days.subscribe(value => {
   // console.log(value, 'days')
})