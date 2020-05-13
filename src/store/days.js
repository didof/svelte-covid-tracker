import { writable } from 'svelte/store'

export const days = writable(30)

days.subscribe(value => {
   // console.log(value, 'days')
})