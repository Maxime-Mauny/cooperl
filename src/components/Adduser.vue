<template>
    <div class="app">
        <p class="header">Je suis sur la page {{newUser}}</p>
            <!-- Container permettant d'ajouter un utilisateur-->
    <div class="new-user-container" id="app">
        <label>Prénom: <input type="text" v-model="firstname"></label><br><br>
        <label>Nom: <input type="text" v-model="lastname"></label><br><br>
        <label>N° Tel: <input type="text" v-model="phoneNumber"></label><br><br>
        
        <section class="mail">
            <p><i class="fas fa-envelope-open-text"></i> :  {{firstname}}.{{lastname}}@cooperl.fr</p>
        </section>

        <button class="add" @click="addContact"><a v-bind:href="link2">Valider</a></button>


    <!--    <form id="form">
            <input type="text" v-model="firstname" placeholder="Prénom"><br><br>
            <input type="text" v-model="lastname" placeholder="Nom"><br><br>
            <input type="text" v-model="phoneNumber" placeholder="Numéro de téléphone"><br><br>
            <button type="submit" value="Submit" class="validate" @click="addContact"><a v-bind:href="link2">Valider</a></button><br><br>
            <div class="mail">
                <p><i class="fas fa-envelope-open-text"></i>Mail : {{mail}}</p> 
            </div>
        </form>  -->
    </div>
    </div>
</template>

<script>
export default {
    el: '#app',
    
        data () {
            return {
                newUser: 'NOUVEL_UTILISATEUR',
                link2: 'http://localhost:8080/annuaire',
                firstname: '',
                lastname: '',
                phoneNumber: '',
                infos: 'Maxime Mauny, maxime.mauny@cooperl.fr, 0672310070',
                demandInfos: '',
                contacts: []
            }    
        },
        computed: {
            mail: function () {
                return this.firstname + '.' + this.lastname + '@cooperl.fr'
            },  
        },

        /* Methods pour récuperer les valeurs des "input" suite au click du bouton "validate" */
        methods: {
            addContact() {
                this.contacts.push({"firstname":"this.firstname", "lastname":"this.lastname"})
            }
        },
        /* Compteur des utilisateurs dans l'annuaire */
        computed: {
            counter() {
                return this.contacts.length
            }
        },


            /* fonction pour effacer les espaces des "input" et ajouter "-" à la place ----  à ajouter dans le <button> ---> onclick="espace()" */
        /*
        methods: {
            espace(){
            var inputAdd = document.getElementById("add").value;
            var res = inputAdd.replace(" ", "-");

            document.getElementById("add").value = res;
            }
        },
        methods: {
            replace(){
                document.getElementById("add").value="-";
            }
        } */
}
</script>
