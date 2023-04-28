<template>
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " >Décrivez votre projet (Soyez précis et conçis) </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <MDBTextarea
        type="textarea"
        label=""
        id="form11Name2"
        v-model="form11Name2"
      />
    
    </MDBCol>
</center>
  </MDBRow>
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " > Quels sont les objectifs de  votre projet ? (Soyez précis et conçis) </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <MDBTextarea
        type="textarea"
        label=""
        id="form11Name2"
        v-model="form11Name2"
      />
    
    </MDBCol>
</center>
  </MDBRow>
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " > Quels est votre marché cible  ? (Soyez précis et conçis) </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <MDBTextarea
        type="textarea"
        label=""
        id="form11Name2"
        v-model="form11Name2"
      />
    
    </MDBCol>
</center>
  </MDBRow>
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " > 
   <p> Quelles sont les résultats de votre analyses </p>
    concurrentielle du marché concernant votre projet ? (Soyez précis et conçis) 
  </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <MDBTextarea
        type="textarea"
        label=""
        id="form11Name2"
        v-model="form11Name2"
      />
    
    </MDBCol>
</center>
  </MDBRow>
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " > 
   <p> Quelles sera votre modèle économique ? </p>
    Justifiez votre choix  ? (Soyez précis et conçis) 
  </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <MDBTextarea
        type="textarea"
        label=""
        id="form11Name2"
        v-model="form11Name2"
      />
    
    </MDBCol>
</center>
  </MDBRow>
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " > Quels est votre marché cible  ? (Soyez précis et conçis) </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <MDBTextarea
        type="textarea"
        label=""
        id="form11Name2"
        v-model="form11Name2"
      />
    
    </MDBCol>
</center>
  </MDBRow>  
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " > Détaillez le plans de mise du projet déclarer à chaque étape
    <p> la ressources  nécessaire  ? (Soyez précis et conçis) </p>
       </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <MDBTextarea
        type="textarea"
        label=""
        id="form11Name2"
        v-model="form11Name2"
      />
    
    </MDBCol>
</center>
  </MDBRow>  
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " > Quels sont les risques liés à la mise en ouevre de votre projet
    <p> et comment pensez-vous  y remédier  ? (Soyez précis et conçis)</p> </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <MDBTextarea
        type="textarea"
        label=""
        id="form11Name2"
        v-model="form11Name2"
      />
    
    </MDBCol>
    <btnsup class="center mt-5"/>
</center>
  </MDBRow> 
  
  
  <pied class="mt-5"/>
</template>
<script setup lang="ts">
  import {
    MDBNavbar,  
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCol, 
    MDBRow,
MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBTextarea,
    MDBBtn,
  } from "mdb-vue-ui-kit";
  import { ref } from "vue";
import pied from "../components/pied.vue";
import btnsup from "../components/btnsup.vue";

  const form6FirstName = ref("");
  const form6LastName = ref("");
  const form6CompanyName = ref("");
  const form6Address = ref("");
  const form6Email = ref("");
  const form6Phone = ref("");
  const form6Info = ref("");
  const form6CreateCheckbox = ref(true);
  
</script>