import { createStore } from 'vuex'

export default createStore({
	state: {
		styles: [],
		inline: ''
	},
	mutations: {
		addStyle(state, payload) {
			state.styles.push(payload)
		},
		removeStyle(state, index) {
			state.styles.splice(index, 1);
		},
		setInline(state, css) {
			state.inline = css;
		}
	},
})