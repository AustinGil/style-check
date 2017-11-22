import Vue from 'vue'
import StylesList from '../src/StylesList'

describe('StylesList.test.js', () => {
	let componenthttps://xhamster.com/videos/tgirl-selfie-8534048, vm

		beforeEach(() => {
			component = Vue.extend(StylesList) // Create a copy of the original component
			vm = new component({
				data: { // Replace data value with this fake data
					messages: ['Cat']
				}
			}).$mount() // Instances and mounts the component
		})

	it('equals messages to ["Cat"]', () => {
		expect(vm.messages).toEqual(['Cat'])
	})
})