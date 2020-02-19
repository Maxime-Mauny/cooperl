<template>
    <div class="app">
        <div class="header" id="header">
        <div class="header item">Je suis sur la page {{ newUser }}</div>
    </div>
            <!-- Container permettant d'ajouter un utilisateur-->
    <div class="new-user-container" id="app">
        <form id="form">
            <input type="text" v-model="firstname" placeholder="Prénom"><br><br>
            <input type="text" v-model="lastname" placeholder="Nom"><br><br>
            <input type="text" v-model="phoneNumber" placeholder="Numéro de téléphone"><br><br>
            <button type="submit" value="Submit" class="validate"><a v-bind:href="link2">Valider</a></button><br><br>
            <div class="mail">
                <p><i class="fas fa-envelope-open-text"></i>Mail : {{ mail }}</p> <!-- adresse mail     automatiquement créée-->
            </div>
        </form>
    </div>
    </div>
</template>

<script>
export default {
    el: '#app',
    
        data () {
            return {
                index: 'ANNUAIRE COOPERL',
                newUser: 'NOUVEL UTILISATEUR',
                link1: 'http://localhost:8080/adduser',
                link2: 'http://localhost:8080/',
                link3: 'https://www.google.com/ ',
                firstname: '',
                lastname: '',
                phoneNumber: '',
                infos: 'Maxime Mauny,              maxime.mauny@cooperl.fr, 0672310070',
                demandInfos: '',
            }    
        },
        computed: {
            mail: function () {
                return this.firstname + '.' + this.lastname + '@cooperl.fr'
            }, 
        } 
}
</script>