const SHADES = {
	light: 0,
	heavy: 0.9,
}

const colors = (shade) => {
	return {
		red: `rgba(247, 58, 58, ${SHADES[shade]})`,
		orange: `rgba(247, 178, 58, ${SHADES[shade]})`,
		bluesky: `rgba(58, 247, 238, ${SHADES[shade]})`,
		violet: `rgba(247, 58, 235, ${SHADES[shade]})`,
		purple: `rgba(238, 58, 247, ${SHADES[shade]})`,
		purpleAlt: `rgba(162, 58, 247, ${SHADES[shade]})`,

		green: `rgba(89, 247, 58, ${SHADES[shade]})`,
		yellow: `rgba(244, 247, 58, ${SHADES[shade]})`,
		blue: `rgba(58, 73, 247, ${SHADES[shade]})`,
		black: `rgba(0, 0, 0, ${SHADES[shade]})`,
		greenlight: `rgba(58, 247, 159, ${SHADES[shade]})`,
		yellow: `rgba(244, 247, 58, ${SHADES[shade]})`,
		yellow: `rgba(244, 247, 58, ${SHADES[shade]})`,
		yellow: `rgba(244, 247, 58, ${SHADES[shade]})`,
	}
}

const setColors = (color) => {
	return {
		backgroundColor: colors('light')[color],
		borderColor: colors('heavy')[color]
	}
}

module.exports = {
   totale_casi: setColors('black'),
   casi_testati: setColors('orange'),
	tamponi: setColors('bluesky'),
   totale_positivi: setColors('violet'),
   nuovi_positivi: setColors('purple'),
   variazione_totale_positivi: setColors('purpleAlt'),

   isolamento_domiciliare: setColors('green'),
   ricoverati_con_sintomi: setColors('yellow'),
   dimessi_guariti: setColors('blue'),
   totale_ospedalizzati: setColors('orange'),
   terapia_intensiva: setColors('red'),
   deceduti: setColors('black'),
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
