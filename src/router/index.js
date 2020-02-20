import Vue from 'vue'
import Router from 'vue-router'
import Annuaire from '@/components/Annuaire'
import Adduser from '@/components/Adduser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Annuaire',
      component: Annuaire,
    }, {
      path: '/Adduser',
      component: Adduser,
    }, {
      path: '*',
      redirect: '/Annuaire',
    }
  ]
})

      /* TEST 1 VueRouter */
/*import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Annuaire from './components/Annuaire.vue';
import Form from './components/Form.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Annuaire },
    { path: '/form', component: Form },
  ]
});*/



      /* TEST 2 VueRouter */
/* import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: require('./components/Annuaire.vue'),
    }, 
    {
      path: '/Form',
      component: require('./components/Form.vue'),
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
}) */