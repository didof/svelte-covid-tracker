import { writable } from 'svelte/store'

export const type = writable('line')

type.subscribe(value => {
   console.log(value, 'type')
})