<template>
  <header>
   <!-- Navbar -->
   <MDBNavbar expand="lg" light bg="white" container classe="fixed-top">
     <MDBNavbarToggler target="#navbarExample01"></MDBNavbarToggler>
     <MDBNavbarNav collapse="navbarExample01" class="mb-3  mb-lg-0">
       
       <MDBNavbarItem to="#" active>
         
       </MDBNavbarItem>
       <MDBNavbarItem  class="fs-3" to="/">
           KOUÈ-MÌTÒN
       </MDBNavbarItem>
       <MDBNavbarItem class="fs-5 mt-2" to="/theproject">
         Projet à financer 
       </MDBNavbarItem>
       <MDBNavbarItem class="fs-5 mt-2" to="#">
         Comment ça marche ?
       </MDBNavbarItem>
     
     </MDBNavbarNav>
     <div class="justify-content-rigth">
       <router-link to="/login">

       <MDBBtn outline="black" class="btn-lg" v-if="!isAuthenticated">Se connecter</MDBBtn>
       </router-link>
       <router-link to="/signup">

 <MDBBtn color="black" class="btn-lg" v-if="!isAuthenticated">S'inscrire</MDBBtn>
       </router-link>
              <button type="button" class="btn btn-light btn-lg btn-shadow-lg " v-if="isAuthenticated" @click="deconnect">Déconnexion</button>
  
   
       </div>
   </MDBNavbar>
  </header>
 </template>
 <script>
 import {
   MDBNavbar,
   MDBNavbarToggler,
   MDBNavbarNav,
   MDBNavbarItem,
   MDBBtn
 } from 'mdb-vue-ui-kit';

export default{
 props: {
   isAuthenticated: {
     type: Boolean,
     required: true
   }
   },
 components :{
   MDBNavbar,
   MDBNavbarToggler,
   MDBNavbarNav,
   MDBNavbarItem,
   MDBBtn
 },
 data(){
  
 },
 methods:{
deconnect(){

 this.$emit('deconnect');

}
 }

 }

</script>

<style>

</style>