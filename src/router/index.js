import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/pages/Page1'
import Page2 from '@/pages/Page2'
import Dashboard from '@/pages/Dashboard'
import VuetifySample from '@/pages/VuetifySample'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/page1',
      component: Page1
    },
    {
      path: '/page2',
      component: Page2
    },
    {
      path: '/vuetifysample',
      component: VuetifySample
    }
  ]
})
