import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		stylesheets: []
	},
	mutations: {
		addStylesheet(state, payload) {
			// console.log('Adding stylesheet', payload)
			state.stylesheets.push(payload)
		}
	},
	actions: {
		addStylesheet({ commit }, stylesheetObject) {
			commit('addStylesheet', stylesheetObject)
		}
	}
});