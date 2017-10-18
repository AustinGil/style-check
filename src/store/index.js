import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		styles: [],
	},
	mutations: {
		addStyle(state, payload) {
			// console.log('Adding style', payload)
			state.styles.push(payload)
		}
	},
	actions: {
		addStyle({ commit }, styleObject) {
			commit('addStyle', styleObject)
		}
	}
});