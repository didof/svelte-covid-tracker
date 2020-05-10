const axios = require('axios')

const getItaly = async () => {
	console.log('[fetch] getItaly...')

	const proxy = 'http://127.0.0.1:8080/'

	const url = 'http://utilitylab.cloud/api/italia'

	const response = await axios.get(proxy + url)

	return response
}

module.exports = {
	getItaly,
}
