import { writable } from 'svelte/store'

export const set = writable(mySets)

set.subscribe((value) => {
	console.log(value, 'set')
})