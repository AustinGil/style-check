import { createStore } from 'vuex'

export default createStore({
	state: {
		styles: [],
	},
	mutations: {
		addStyle(state, payload) {
			// console.log('Adding style', payload)
			state.styles.push(payload)
		},
		removeStyle(state, index) {
			state.styles.splice(index, 1);
		}
	},
	actions: {
		addStyle({ commit }, styleObject) {
			commit('addStyle', styleObject)
		},
		removeStyle({ commit }, styleIndex) {
			commit('removeStyle', styleIndex)
		}
	}
})