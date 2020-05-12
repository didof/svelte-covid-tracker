import { writable } from 'svelte/store'

const mySets = [
	{
		label: 'tamponi/casi-testati',
		description: 'Rapporto tra i tamponi effettuati e i casi testati',
		datasets: ['tamponi', 'casi_testati'],
	},
	{
		label: 'isolamento/positivi',
		description:
			"Rapporto tra il crescere dei nuovi positivi in relazione all'isolamento domiciliare",
		datasets: ['isolamento_domiciliare', 'nuovi_positivi'],
	},
]

export const sets = writable(mySets)

sets.subscribe((value) => {
	console.log(value, 'sets')
})

//TODO:
/* user will be able to create it own set and it will be saved on localStorage */