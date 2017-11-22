import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import Results from '@/components/Results'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Results.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        styles: [{
          url: "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css",
          nickName: "Bootstrap"
        }]
      }
    })
  })

  it('contains an iframe', () => {
    const wrapper = shallow(Results, { store, localVue })
    expect(wrapper.contains('iframe')).toBe(true)
  })
})
