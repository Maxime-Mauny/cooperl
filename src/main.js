// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
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
})




/*Vue.config.productionTip = false*/

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  render: h => h(require('./App.vue'))
})*/
