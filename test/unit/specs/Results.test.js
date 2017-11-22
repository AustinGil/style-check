import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import Results from '@/components/Results'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Results.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn()
    }
    store = new Vuex.Store({
      state: {
        styles: [{
          url: "https://example.com",
          nickName: "Nickname"
        }]
      },
      actions
    })
  })

  it('contains an iframe', () => {
    const wrapper = shallow(Results, { store, localVue })
    expect(wrapper.contains('iframe')).toBe(true)
  })

  // it('does not call store action actionInput when input value is not input and an input event is fired', () => {
  // 	const wrapper = shallow(Actions, { store, localVue })
  // 	const input = wrapper.find('input')
  // 	input.element.value = 'not input'
  // 	input.trigger('input')
  // 	expect(actions.actionInput).not.toHaveBeenCalled()
  // })

  // it('calls store action actionClick when button is clicked', () => {
  // 	const wrapper = shallow(Actions, { store, localVue })
  // 	wrapper.find('button').trigger('click')
  // 	expect(actions.actionClick).toHaveBeenCalled()
  // })
})






// import Vue from 'vue'
// import HelloWorld from '@/components/HelloWorld'

// describe('HelloWorld.vue', () => {
//   it('should render correct contents', () => {
//     const Constructor = Vue.extend(HelloWorld)
//     const vm = new Constructor().$mount()
//     expect(vm.$el.querySelector('.hello h1').textContent)
//     .toEqual('Welcome to Your Vue.js App')
//   })
// })
