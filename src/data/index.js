const urls = require('./urls')

const forwardToProxy = async (url) => {
   console.log('[getRegionList]', url)
   const response = await fetch(urls.proxy + url)
   const data = await response.json()
   return data
}

const getRegionsList = async () => {
   console.log('[getRegionList]')
   const response = await forwardToProxy(urls.italy.list)
   return response
}

module.exports = {
   getRegionsList
}