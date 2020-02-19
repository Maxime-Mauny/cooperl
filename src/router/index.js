import Vue from 'vue'
import VueRouter from 'vue-router'
import Annuaire from '@/components/Annuaire'
import Form from '@/components/Form'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Annuaire,
    }, {
      path: '/Form',
      component: Form,
    }
  ]
})
