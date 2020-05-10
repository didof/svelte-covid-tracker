module.exports = {
	proxy: 'http://localhost:8080/',
	italy: {
		historic: 'http://utilitylab.cloud/api/italia-storico',
		summary: 'http://utilitylab.cloud/api/italia',
		list: 'http://utilitylab.cloud/api/lista-regioni',
	},
	region: {
		historic: 'http://utilitylab.cloud/api/regione-storico/%REGION%',
		summary: 'http://utilitylab.cloud/api/regione/%REGION%',
		list: 'http://utilitylab.cloud/api/lista-provincie/%REGION%',
	},
	province: {
		summary: `http://utilitylab.cloud/api/provincia/%PROVINCE%`,
	},
}
