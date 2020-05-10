import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js',
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: (css) => {
				css.write('public/build/bundle.css')
			},
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte'],
		}),
		commonjs(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		!production && proxy(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(),
	],
	watch: {
		clearScreen: false,
	},
}

function serve() {
	let started = false

	return {
		writeBundle() {
			if (!started) {
				started = true

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true,
				})
			}
		},
	}
}

function proxy() {
	let started = false

	return {
		writeBundle() {
			if (!started) {
				started = true

				// Listen on a specific host via the HOST environment variable
				var host = process.env.HOST || 'localhost'
				// Listen on a specific port via the PORT environment variable
				var port = process.env.PORT || 8080

				var cors_proxy = require('cors-anywhere')
				cors_proxy
					.createServer({
						originWhitelist: [], // Allow all origins
						requireHeader: ['origin', 'x-requested-with'],
						removeHeaders: ['cookie', 'cookie2'],
					})
					.listen(port, host, function () {
						console.log('Running CORS Anywhere on ' + host + ':' + port)
					})
			}
		},
	}
}
