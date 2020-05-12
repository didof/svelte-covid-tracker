const urls = require('./urls')
const parsers = require('./parsers')

const getData = async (type, location, region = undefined) => {
	let url = urls[location][type]
	if (region) {
		url = url.replace('%REGION%', region)
	}
	const response = await fetch(urls.proxy + url)
	return await response.json()
}

module.exports = {
	getData
}
