<template>
    <tete/>
  <div class="discover-page" data-path="/financer-projets">
    <section class="filters white">
    <div class="background-full-color flex-container text-center">
        <div class="background-title flex-item">
            <h2>Avez-vous un projet innovant à fort impact social ?</h2>
        </div>
    </div>
    </section>
  </div>
  <div>
    
    <p class="mt-5 text-center fs-4"> Félicitations pour votre projet ! Pour que vous puissiez présenter votre projet à un analyste d'affaires, vous devez fournir les informations suivantes 👇:  </p>

    <p class = "ms-4 text-center fs-4"> Veillez bien vouloir télécharger  ce document ,le lire pour bien cerner les concepts   afin de mieux renseigné les champs ci-dessous. </p> 
        <p class = " text-center fs-4">Cliquez ici pour télécharger 👉 :  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class=""><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>  </p>
  </div>
  <projectform/>

</template>

<script setup lang="ts">

import projectform from "../components/projectform.vue"; 

import tete from "../components/tete.vue"; 
</script>

<style>
.background-full-color {
background-color: #aebac171;
    width: 100%;
    min-height: 10.625em;
    padding: 3.75em 0;
}
.flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
svg{
    width:50px ;
height: 30px ;
}
</style>