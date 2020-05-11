const forItalyChart = (fetch) => {
	let fetched = fetch[0]
	console.log(fetched)

	let chartData = {
		labels: [
			'isolamento_domiciliare',
			'ricoverati_con_sintomi',
			'totale_ospedalizzati',
			'terapia_intensiva',
			'dimessi_guariti',
			'deceduti',
		],
		datasets: [
			{
				label: 'Italia',
				data: [],
				backgroundColor: ['skyblue', 'yellow', 'orange', 'red', 'blue', 'black']
			},
		],
	}

	chartData.labels.forEach((label) => {
		chartData.datasets[0].data.push(fetched[label])
	})

	console.log(chartData)

	return chartData
}

module.exports = {
	forItalyChart,
}

{
	/* <li>isolamento_domicilare</li>
  <li>ricoverati_con_sintomi</li>
  <li>totale_ospedalizzati</li>
  <li>terapia_intensiva</li>
  <li>dimessi_guariti</li>
  <li>deceduti</li> */
}
