import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		stylesheets: [
			{
				order: 1,
				name: 'Bootstrap',
				url: 'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css'
			}
		]
	},
	mutations: {
		addStylesheet(state, payload) {
			console.log('Adding stylesheet', payload)
		}
	},
	actions: {
		addStylesheet({ commit }, stylesheetObject) {
			commit('addStylesheet', stylesheetObject)
		}
	}
});