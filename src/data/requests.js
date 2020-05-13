const urls = require('./urls')
const parsers = require('./parsers')

const saveOptions = (data) => {
	let options = Object.keys(data[0])
	options.splice(0, 2)
	saveInSession('options', options)
}

const getData = async (type, location, region = undefined) => {
	const key = generateKey(type, location)
	const prevFormatted = checkPrevData(key)
	saveOptions(prevFormatted)

	if (prevFormatted) return prevFormatted

	let url = urls[location][type]
	if (region) {
		url = url.replace('%REGION%', region)
	}
	const response = await fetch(urls.proxy + url)
	const formatted = await response.json()

	saveInSession(key, formatted)

	return formatted
}

const generateKey = (a, b) => {
	return a + '-' + b
}

const checkPrevData = (key) => {
	const prevData = sessionStorage.getItem(key)
	if (prevData) {
		return JSON.parse(prevData)
	}
	return null
}

const saveInSession = (key, data) => {
	sessionStorage.setItem(key, JSON.stringify(data))
}

module.exports = {
	getData,
	checkPrevData
}
