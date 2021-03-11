module.exports = {
	target: 'static',
	runtimeCompiler: true,
	components: true,
	mode: 'universal',
	generate: {
		dir : '.dist',
		fallback: 'index.html'
	},
	router: {
		base: '/ettexopt/'
	},
	build: {
		publicPath: '/ettexopt'
	},
	modules: [
		'@nuxtjs/axios'
	],
	server: {
		port: 8000,
		host: '0.0.0.0'
	},
	axios: {
		https: true
	},
	css: [
		'@/styles/main.scss'
	],
	head: {
		title: 'ETTEXOPT - официальный дистрибьютор',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
		],
		link: [
			{ rel: 'icon', type: 'image/png', href: '/icon/favicon.png' }
		],
	},
	plugins: [

	]
};
