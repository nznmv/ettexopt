module.exports = {
	target: 'static',
	ssr: false,
	runtimeCompiler: true,
	components: true,
	mode: 'universal',
	generate: {
		dir : 'dist',
		fallback: 'index.html'
	},
	modules: [
		'@nuxtjs/axios'
	],
	axios: {
		https: true
	},
	css: [
		'@/styles/main.scss'
	],
	head: {
		title: 'ETTEX - офіційний дистриб\'ютор дрібної побутової техніки та посуду',
		htmlAttrs: {
			lang: 'ru'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'Cache-Control', content: 'max-age=31536000' },
			{ name:  'theme-color' },
			{
				hid: 'description',
				name: 'description',
				content: 'magio ' +
					'satori ' +
					'conbrio ' +
					'Поставщик посуды ' +
					'Посуда от производителя ' +
					'Мажио ' +
					'Маджио ' +
					'Сатори ' +
					'Конбрио ' +
					'Бытовая техника оптом ' +
					'Мелкая бытовая техника оптом ' +
					'Посуда оптом ' +
					'Поставщик бытовой техники ' +
					'Бытовая техника от производителя ' +
					'Купить бытовую технику оптом ' +
					'Купить посуду оптом '
			}

		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
		],
	},
	plugins: [
	],
};
