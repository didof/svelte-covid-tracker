# Setup proxy

> [tutorial](https://www.youtube.com/watch?v=EHikjXtRp_k)

The API I selected [COVID19 API ITALIA](https://documenter.getpostman.com/view/11032996/SzfCUmMP?version=latest) is not CORS-ready: it does not expose the "Access-Control-Allow-Origin" header, so the browser is not allowed to use obtain resources. The way I tricked the problem was by running a proxy server locally that get the request. This last, is not sent directly the the URL, instead goes to the proxy. It makes the request on the browser behalf and, this is the peculiarity, it adds CORS headers.

> npm i cors-anywhere

In `rollup.config.js` add:

```js
function proxy() {
	let started = false

	return {
		"writeBundle"() {
			if (!started) {
				started = true

				// Listen on a specific host via the HOST environment variable
				var host = process.env.HOST || "localhost"
				// Listen on a specific port via the PORT environment variable
				var port = process.env.PORT || 8080

				var cors_proxy = require("cors-anywhere")
				cors_proxy
					.createServer({
						"originWhitelist": [], // Allow all origins
						"requireHeader": ["origin", "x-requested-with"],
						"removeHeaders": ["cookie", "cookie2"]
					})
					.listen(port, host, function () {
						console.log("Running CORS Anywhere on " + host + ":" + port)
					})
			}
		}
	}
}
```

And run it as a plugin like so `!production && proxy()`.

Least, when fetching data, do not target *url* alone but *proxy* + *url*

# Implement Routify

> [tutorial](https://www.youtube.com/watch?v=AGLUJlOC6f0)