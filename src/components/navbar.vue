<template>
    <MDBNavbar
    container
    expand="lg"
    bg="light"
    class="d-flex justify-content-between"
    >
   
      
      <MDBCollapse id="navbarColor01" v-model="collapse7">
        <MDBNavbarNav class="mb mb-lg-0">
            <router-link to="/">
        <MDBNavbarItem linkClass="link-secondary" class="fs-3" to="/">
            KOUÈ-MÌTÒN
        </MDBNavbarItem>
        </router-link>
        <router-link to="/admin">
          <MDBNavbarItem  class="fs-3  mt-2 ms-2" >
             Creation 
            </MDBNavbarItem>
        </router-link>
          <router-Link to="/adproject">
          <MDBNavbarItem  class="fs-3 mt-2 ms-4" >
          
            Projets
            
            </MDBNavbarItem >
        </router-Link>
        </MDBNavbarNav>
      </MDBCollapse>
  
      <MDBNavbarNav class="mb-2 mb-lg-0 d-flex flex-row">
        
        <MDBNavbarItem
          to="o"
          class="me-3 me-lg-0"
          linkClass="link-secondary"
        >
          <MDBIcon icon="bell" />
          <MDBBadge notification color="danger" pill>1</MDBBadge>
        </MDBNavbarItem>
        <router-link to="/login1" class="me-3 me-lg-0">
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
            class="rounded-circle"
            height="40"
            alt=""
            loading="lazy"
          />
        </router-link>
      </MDBNavbarNav>
    </MDBNavbar>
  </template>
  <script>
  import {
    MDBNavbar,
    MDBNavbarItem,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBBadge,
    MDBIcon
  } from 'mdb-vue-ui-kit';
  import { ref } from "vue";

  export default {
    components: {
      MDBNavbar,
      MDBNavbarItem,
      MDBNavbarBrand,
      MDBNavbarNav,
      MDBNavbarToggler,
      MDBBadge,
      MDBIcon
    },
    setup() {
      const collapse7 = ref(false);

      return {
        collapse7,
      }
    }
  };
</script>