import {header, main} from '@/config/ruText';

export const state = () => ({
	selected_language: 'ру',
	selected_text_config: {
		header: Object,
		main: Object,
	},
});
export const getters = {
};
export const mutations = {
	SET_CONFIG(state, header, main,) {
		state.selected_text_config = {
			header: header,
			main: main,
		};
	},
	SET_LANGUAGE(state, value) {
		state.selected_language = value;
	}
};
export const actions = {
	async setTextConfig({state, commit}, payload = 'ру') {
		if (payload === 'ру') {
			let {header, main} = await import('@/config/ruText');
			commit('SET_CONFIG', header, main)
		} else {
			let {header, main} = await import('@/config/uaText');
			commit('SET_CONFIG', header, main)
		}
	}
};
