import { writable } from 'svelte/store'

const initial = {
   modal: false
}

export const ui = writable(initial)

ui.subscribe(value => {
   console.log(value, 'ui')
})