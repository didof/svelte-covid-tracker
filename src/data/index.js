const urls = require('./urls')
const parsers = require('./parsers')

const forwardToProxy = async (url) => {
	console.log('[forwardToProxy]', url)
	const response = await fetch(urls.proxy + url)
	const data = await response.json()
	return data
}

const getRegionsList = async () => {
	console.log('[getRegionList]')
	const response = await forwardToProxy(urls.italy.list)
	const formatted = response.map((el, index) => ({
		id: index,
		name: el.denominazione_regione,
	}))
	return formatted
}

const getItalySummary = async () => {
   console.log('[getItalySummary]')
   const response = await forwardToProxy(urls.italy.summary)

   return response
}

module.exports = {
	getRegionsList,
   getItalySummary
}
