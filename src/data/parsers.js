const setLabels = (raw, label) => {
	return raw.map((el) => el[label])
}

const buildDataset = (raw, set) => {
	return {
		label: set.label.replace('_', ' '),
		data: raw.map((el) => el[set.label]),
		backgroundColor: set.backgroundColor,
		borderColor: set.borderColor,
	}
}

const setDataset = (raw, sets) => {
	return sets.map((set) => buildDataset(raw, set))
}

const forChart = (raw, sets) => {
	const pickedSets = sets.map((set) => ({
		label: set,
		backgroundColor: 'rgb(63, 127, 191, 0.1)',
		borderColor: 'rgb(5, 183, 183)',
		borderWidth: 1,
	}))

	return {
		labels: setLabels(raw, 'data'),
		datasets: setDataset(raw, pickedSets)
		// datasets: setDataset(raw, [
		// 	{
		// 		label: 'totale_casi',
		// 		backgroundColor: 'rgb(63, 127, 191, 0.1)',
		// 		borderColor: 'rgb(5, 183, 183)',
		// 		borderWidth: 1,
		// 	},
		// 	{
		// 		label: 'totale_positivi',
		// 		backgroundColor: 'rgb(247, 247, 27, 0.1)',
		// 		borderColor: 'rgba(204, 204, 20)',
		// 		borderWidth: 1,
		// 	},
		// 	{
		// 		label: 'variazione_totale_positivi',
		// 		backgroundColor: 'rgb(247, 247, 27, 0.1)',
		// 		borderColor: 'rgba(204, 204, 20)',
		// 		borderWidth: 1,
		// 	},
		// 	{
		// 		label: 'tamponi',
		// 		backgroundColor: 'rgba(5, 183, 183, 0.2)',
		// 		borderColor: 'rgb(14, 179, 179)',
		// 		borderWidth: 2,
		// 	},
		// 	{
		// 		label: 'casi_testati',
		// 		backgroundColor: 'rgba(5, 183, 183, 0.2)',
		// 		borderColor: 'rgb(14, 179, 179)',
		// 		borderWidth: 1,
		// 	},
		// 	{
		// 		label: 'totale_ospedalizzati',
		// 		backgroundColor: 'rgba(5, 183, 183, 0.2)',
		// 		borderColor: 'rgb(14, 179, 179)',
		// 		borderWidth: 1,
		// 	},
		// 	{
		// 		label: 'terapia_intensiva',
		// 		backgroundColor: 'rgba(5, 183, 183, 0.2)',
		// 		borderColor: 'rgb(14, 179, 179)',
		// 		borderWidth: 1,
		// 	},
		// 	{
		// 		label: 'ricoverati_con_sintomi',
		// 		backgroundColor: 'rgba(5, 183, 183, 0.2)',
		// 		borderColor: 'rgb(14, 179, 179)',
		// 		borderWidth: 1,
		// 	},
		// 	{
		// 		label: 'isolamento_domiciliare',
		// 		backgroundColor: 'rgba(5, 183, 183, 0.2)',
		// 		borderColor: 'rgb(14, 179, 179)',
		// 		borderWidth: 1,
		// 	},
		// 	{
		// 		label: 'nuovi_positivi',
		// 		backgroundColor: 'rgba(5, 183, 183, 0.2)',
		// 		borderColor: 'rgb(14, 179, 179)',
		// 		borderWidth: 1,
		// 	},
		// 	{
		// 		label: 'dimessi_guariti',
		// 		backgroundColor: 'rgba(5, 183, 183, 0.2)',
		// 		borderColor: 'rgb(14, 179, 179)',
		// 		borderWidth: 1,
		// 	},
		// 	{
		// 		label: 'deceduti',
		// 		backgroundColor: 'rgba(5, 183, 183, 0.2)',
		// 		borderColor: 'rgb(14, 179, 179)',
		// 		borderWidth: 1,
		// 	},
		// ]),
	}
}

const selectLast = async (howMany, raw) => {
	return raw.splice(raw.length - howMany, howMany)
}

const selectSet = async (set, raw) => {
	console.log(raw)
	return `I will select ${set} in raw`
}

const formatToArray = (string) => {
	const splitted = string.split(',')
	return splitted
}

module.exports = {
	forChart,
	selectLast,
	selectSet,
	formatToArray
}

// casi_testati: 0
// data: "2020-02-24"
// deceduti: 7
// dimessi_guariti: 1
// id: 1
// isolamento_domiciliare: 94
// nuovi_positivi: 221
// ricoverati_con_sintomi: 101
// tamponi: 4324
// terapia_intensiva: 26
// totale_casi: 229
// totale_ospedalizzati: 127
// totale_positivi: 221
// variazione_totale_positivi: 0
