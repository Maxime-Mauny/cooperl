<template>
  <div id="app">
    <!-- ... -->
    <router-view></router-view>
  </div>
</template>

<script>
import Annuaire from './components/Annuaire'
import Adduser from './components/Adduser'

export default {
  name: 'app',
  components: {
    Annuaire,
    Adduser,
  }
}
</script>

<style>
html {
    height:100%;
    background-color: white;
}
body {
    min-height:100%;
    position:relative;
    background-color: rgb(241, 235, 235);
    font-size: 1.2em;
    width: 700px;
    margin: auto;
    -webkit-box-shadow: 0px 0px 13px 5px rgba(61,46,61,1);
    -moz-box-shadow: 0px 0px 13px 5px rgba(61,46,61,1);
    box-shadow: 0px 0px 13px 5px rgba(61,46,61,1);
}

/* Commun aux deux pages */
/* Menu Page actuelle */
.header {
    padding: 10px 0 10px 0;
    margin: 0 0 40px 0;
    background-color: rgb(92, 88, 88);
    color: rgb(247, 247, 247);
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
} 

/* Page Index */
/* Bouton Ajouter */
.add {
    background-color: rgb(170, 223, 117);
    padding: 5px;
    border-radius: 10px;
    margin: 30px 0 0 60px;
    -webkit-box-shadow: 7px 7px 11px 0px rgb(73, 73, 73);
    -moz-box-shadow: 7px 7px 11px 0px rgb(66, 63, 66);
    box-shadow: 7px 7px 11px 0px rgb(68, 65, 68);
}
.add:hover {
    background-color: rgb(149, 202, 96);
}
a {
    text-decoration: none;
    font-size: 1.2em;
    color: black;
    font-weight: bolder;
}
/* Bouton Extraire */
.extract {
    background-color: rgb(245, 169, 125);
    padding: 5px;
    border-radius: 10px;
    margin: 30px 0 30px 60px;
    -webkit-box-shadow: 7px 7px 11px 0px rgb(73, 73, 73);
    -moz-box-shadow: 7px 7px 11px 0px rgb(66, 63, 66);
    box-shadow: 7px 7px 11px 0px rgb(68, 65, 68);
}
.extract:hover {
    background-color: rgb(231, 87, 61);
}
/* Tableau annuaire */
table{
    border-collapse: collapse;
    margin: 70px 0 0 60px;
    background-color: rgb(255, 255, 255); 
    -webkit-box-shadow: 7px 7px 11px 0px rgb(73, 73, 73);
    -moz-box-shadow: 7px 7px 11px 0px rgb(66, 63, 66);
    box-shadow: 7px 7px 11px 0px rgb(68, 65, 68);
  }
  .title {
    font-size: 1.5em;
    font-weight: bold;
    text-transform: uppercase;
    border: 2px solid black;
    padding: 15px 15px 15px 15px;
  }
  td{
    border: 2px solid black;
    padding: 15px 15px 15px 15px;
  }
  i {
      margin-right: 10px;
  }
  
/* Liste des Utilisateurs de l'annuaires */
.annuaire {
    border: none;
    background-color: rgb(255, 255, 255);
    font-size: 1.1em;
    font-weight: bold;
}
/* Count du footer */
.count {
    background-color: white;
    position:absolute;
    width:100%;
    bottom: 40px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    text-align: center;
}
label {
    text-align: center;
    padding: 4px;
    font-weight: bold;
    font-size: 1.2em;
}
/* Bulle Info Utilisateur */
.ui.success.message {
    background-color: rgb(252, 252, 252);
    border: 1px solid black;
    width: 250px;
    height: 250px;
    padding-top: 30px;
    position: absolute;
    top: 150px;
    right: 60px;
    -webkit-box-shadow: 7px 7px 11px 0px rgb(73, 73, 73);
    -moz-box-shadow: 7px 7px 11px 0px rgb(66, 63, 66);
    box-shadow: 7px 7px 11px 0px rgb(68, 65, 68);
}


/* Page New User */
/* Propriétés du container */
.new-user-container {
    background-color: rgb(185, 183, 183);
    padding: 35px;
    width: 500px;
    margin: auto;
    margin-top: 70px;
    -webkit-box-shadow: 7px 7px 11px 0px rgb(73, 73, 73);
    -moz-box-shadow: 7px 7px 11px 0px rgb(66, 63, 66);
    box-shadow: 7px 7px 11px 0px rgb(68, 65, 68);
}
/* Formulaire à remplir par l'utilisateur */
label {
    color: rgb(121, 109, 109);
}
input {
    position: absolute;
    right: 230px;
    padding: 3px;
    border: 1.5px solid rgb(90, 86, 86);    
}
/* Adresse mail */
.mail {
    font-size: 1.2em;
    font-weight: 600;
    text-transform: lowercase;
}
/* Bouton Valider */
.validate {
    background-color: rgb(170, 223, 117);
    padding: 5px;
    border-radius: 10px;
    margin: 3% 47% 0 43%;
    font-size: 1.1em;
    font-weight: bold;
    -webkit-box-shadow: 7px 7px 11px 0px rgb(73, 73, 73);
    -moz-box-shadow: 7px 7px 11px 0px rgb(66, 63, 66);
    box-shadow: 7px 7px 11px 0px rgb(68, 65, 68);
}
.validate:hover {
    background-color: rgb(149, 202, 96);
}
a {
    text-decoration: none;
    font-size: 1.2em;
    color: black;
    font-weight: bolder;
}
 
</style>