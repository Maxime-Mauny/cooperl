/*
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: require('index.html'),
    }]
})
*/
/*
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
*/




new Vue({
    /* Effectif sur l'ID "header" */
        el: '#header',
    
        data: {
    
            index: 'ANNUAIRE COOPERL',
            newUser: 'NOUVEL UTILISATEUR'
        }
    })
    
    new Vue({
    /* Effectif sur l'ID "app" */
        el: '#app',
    
        /*router,*/
    
        data: {
            link1: 'http://localhost/vue-js/new-user.html',
            link2: 'http://localhost/vue-js/index.html',
            link3: 'https://www.google.com/',
            firstname: '',
            lastname: '',
            phoneNumber: '',
            infos: 'Maxime Mauny, maxime.mauny@cooperl.fr, 0672310070',
            demandInfos: '',
        },
    /* Fonction qui permet de récupérer le Prénom et le Nom des input, pour créer l'adresse mail */
        computed: {
            mail: function () {
                return this.firstname + '.' + this.lastname + '@cooperl.fr'
            },  
    /*    firstname: {
            get () {
              return this.$store.stateobj.firstname
            },
            set (value) {
              this.$store.commi('updateFirstname', value)
            }
          }, */             
        },
        
        methods: {  
            close: function () {
                this.demandInfos = false
            },  
            open: function () {
                this.demandInfos = true
            },   
              
        }
        
    })
    
    
    
    
    /* Ce qu'il me reste à faire !!! */
    
    /* A la validation du formulaire, le nouvel utilisateur doit arriver dans l'annuaire et incrémenter de 1 le count du footer
    https://blog.ippon.fr/2017/05/02/vue-js-2-0-petit-tutoriel-volume-2/ */
    
    
    
    /* lien dynamique vers les autres pages avec "vue Router" */
    
    /* Simuler un appel ajax avec le button "extract" (UTILISER AXIOS) */

