import { main } from '@/config/ruText';

export const state = () => ({
	selected_text_config: main,
	modal_show: false,
	videoId: '',
});

export const getters = {
	getHeaderText(state) {
		return state.selected_text_config.head;
	},
	getAdsText(state) {
		return state.selected_text_config.ads;
	},
	getButtonText(state) {
		return state.selected_text_config.buttons;
	},
	getBrandsText(state) {
		return state.selected_text_config.brands;
	},
	getAdvantagesText(state) {
		return state.selected_text_config.advantages;
	},
	getCoopText(state) {
		return state.selected_text_config.coop;
	},
	getFooterText(state) {
		return state.selected_text_config.footer;
	},
};
export const mutations = {
	SET_CONFIG(state, value) {
		state.selected_text_config = value;
	},
	SET_MODAL_SHOW(state, value) {
		state.modal_show = value;
	},
	SET_VIDEO_ID(state, value) {
		state.videoId = value;
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
	},

	setModalShow({state,commit}, payload) {
		commit('SET_MODAL_SHOW', payload.modal);
		commit('SET_VIDEO_ID', payload.id);
	}
};
