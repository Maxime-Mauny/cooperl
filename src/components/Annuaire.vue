<template>
    <div class="app">
        <p class="header">Je suis sur la page {{index}}</p>
        <table>
            <tr>
                <td class="title"><p><i class="fas fa-address-book"></i>contacts </p>
                </td>             
            </tr>
        <!--    <tr>
                <td>{{firstname}} {{lastname}}</td>
            </tr> -->
            <tr>
                <td>
                    <button class="annuaire" @click="open"> <p><i class="fas fa-address-card"></i>Maxime Mauny</p></button>
                </td>           
            </tr>
            <tr>
                <td>
                    <button class="annuaire" @click="open"> <p><i class="fas fa-address-card"></i>Matthieu Bureau</p></button>
                </td>           
            </tr>
            <tr>
                <td>
                    <button class="annuaire" @click="open"> <p><i class="fas fa-address-card"></i>Julien Tonnelier</p></button>
                </td>           
            </tr>
            <tr>
                <td>
                    <button class="annuaire" @click="open"> <p><i class="fas fa-address-card"></i>Jean-Baptiste Martin</p></button>
                </td>           
            </tr>  
        </table>
        <section class="ui success message" v-show="demandInfos" onClick="window.location.reload();">
                <i class="close icon" @click="close"></i>
                <img src="https://source.unsplash.com/120x100/?portrait" alt="" class="article__img">
                <p>{{infos}}</p>
        </section>
        <button class="add"><a v-bind:href="link1">Ajouter</a></button><br> <!--<router-link to="/adduser" class="nav-link">Ajouter</router-link> -->
        <button class="extract"><a v-bind:href="link3">Extraire</a></button>
        <footer class="count">
            <label>{{counter}} entrée(s)</label>
        </footer>
    </div>
</template>

<script>
export default {
    
    /* Effectif sur l'ID "app" */
        el: '#app',
    
        data () {
            return {
                index: 'ANNUAIRE COOPERL',
                link1: 'http://localhost:8080/adduser',
                link3: 'https://www.google.com/',
                firstname: '',
                lastname: '',
                phoneNumber: '',
                infos: 'Maxime Mauny, maxime.mauny@cooperl.fr, 0672310070',
                demandInfos: '',
            }    
        },
    
    /* Ces 2 fonctions permettent d'ouvrir et fermer la bulle d'infos */
        methods: {  
            close: function() {
                this.demandInfos = false
            },  
            open: function() {
                this.demandInfos = true
            },                 
        },

    /* Fonction simulant un appel ajax pour le "button" extract */
    
               
}
</script>
