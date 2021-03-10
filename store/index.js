import { main } from '@/config/ruText';

export const state = () => ({
	selected_text_config: main,
});
export const getters = {
	getHeaderText(state) {
		return state.selected_text_config.head;
	},
	getAdsText(state) {
		return state.selected_text_config.ads;
	}
};
export const mutations = {
	SET_CONFIG(state, value) {
		state.selected_text_config = value;
	},
};
export const actions = {
	async setTextConfig({state, commit}, payload = 'ру') {
		if (payload === 'ру') {
			let {main} = await import('@/config/ruText');
			commit('SET_CONFIG', main)
		} else {
			let {main} = await import('@/config/uaText');
			commit('SET_CONFIG', main)
		}
	}
};
