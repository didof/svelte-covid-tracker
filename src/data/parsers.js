const colors = require('./colors')

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
	const pickedSets = sets.map((set) => {
		return {
			label: set,
			backgroundColor: colors[set].backgroundColor,
			borderColor: colors[set].borderColor,
			borderWidth: 1,
		}
	})

	return {
		labels: setLabels(raw, 'data'),
		datasets: setDataset(raw, pickedSets)
	}
}

const selectLast = async (howMany, raw) => {
	return raw.splice(raw.length - howMany, howMany)
}

const formatToArray = (string) => {
	const splitted = string.split(',')
	return splitted
}

module.exports = {
	forChart,
	selectLast,
	formatToArray,
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
