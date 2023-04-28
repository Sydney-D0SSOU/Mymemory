<template>
   <header>
    <!-- Navbar -->
    <MDBNavbar expand="lg" light bg="white" container classe="fixed-top">
      <MDBNavbarToggler target="#navbarExample01"></MDBNavbarToggler>
      <MDBNavbarNav collapse="navbarExample01" class="mb-3 mt-2 mb-lg-0">
        
        <MDBNavbarItem to="#" active>
          
        </MDBNavbarItem>
        <MDBNavbarItem  class="fs-3" to="/">
            KOUÈ-MÌTÒN
        </MDBNavbarItem>
        <MDBNavbarItem class="fs-5 mt-2" to="#">
          Projet à financer 
        </MDBNavbarItem>
        <MDBNavbarItem class="fs-5 mt-2" to="#">
          Comment ça marche ?
        </MDBNavbarItem>
      
      </MDBNavbarNav>
      <div class="justify-content-rigth">
        <router-link to="/login">

        <MDBBtn outline="black" class="btn-lg">Se connecter</MDBBtn>
        </router-link>
        <router-link to="/signup">

  <MDBBtn color="black" class="btn-lg">S'inscrire</MDBBtn>
        </router-link>
        </div>
    </MDBNavbar>
   </header>
  </template>
  <script setup lang="ts">
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBBtn
  } from 'mdb-vue-ui-kit';
</script>