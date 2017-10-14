import Vue from 'vue'
import Router from 'vue-router'
import HtmlElements from '@/components/HtmlElements'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HtmlElements
    }
  ]
})
