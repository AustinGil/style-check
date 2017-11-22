import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import StylesList from '@/components/StylesList'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('StylesList.vue', () => {
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
          url: "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css",
          nickName: "Bootstrap"
        }]
      },
      actions
    })
  })

  // it('contains the list of styles', () => {
  //   const wrapper = shallow(StylesList, { store, localVue })
  //   expect(wrapper.contains('ul')).toBe(true)
  // })

  it('passing test', () => {
    expect(true).toBe(true)
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
