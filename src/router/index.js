import Vue from 'vue'
import Router from 'vue-router'
import Annuaire from '@/components/Annuaire'
import Adduser from '@/components/Adduser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Annuaire,
    }, {
      path: '/Adduser',
      component: Adduser,
    }
  ]
})
