import { writable } from 'svelte/store'

const key = 'custom-sets'

let defaultSets = {
	selected: ['tamponi', 'casi_testati'],
	description: 'Rapporto tra i tamponi effettuati e i casi testati',
	options: [
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
		{
			label: 'climax',
			description: 'Climax di gravità del paziente',
			datasets: [
				'isolamento_domiciliare',
				'ricoverati_con_sintomi',
				'terapia_intensiva',
				'totale_ospedalizzati',
				'deceduti',
			],
		},
	],
}

const checkIfPrevDataAndInject = (defaultData) => {
	let customSets = JSON.parse(localStorage.getItem(key))
	if (customSets) {
		return {
			...defaultData,
			options: defaultData.options.concat(customSets),
		}
	}

	return defaultData
}

export const sets = writable(checkIfPrevDataAndInject(defaultSets))

sets.subscribe((value) => {})

//TODO:
/* user will be able to create it own set and it will be saved on localStorage */
