<template>
  <navbar/>
  <h2> CREATION du card  d´un projet </h2>
  
  <MDBInput label="Form controle " size="15" class="iri"  />
  <MDBInput label="Form control default" class="mt-4" />
  <MDBInput label="Form control sm" size="sm" class="mt-4" />
  <input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10" class=" ">
</template>
<script setup lang="ts">
import Navbar from '../components/navbar.vue' ;
import { MDBInput } from 'mdb-vue-ui-kit';
</script>

<style>
.iri{ 
  width:10px ;
}
</style>