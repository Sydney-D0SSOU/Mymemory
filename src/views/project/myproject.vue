<template>
    <tete/>
    
  <div class="discover-page" data-path="/financer-projets">
    
    <section class="filters white">
    <div class="background-full-color flex-container text-center">
        <div class="background-title flex-item">
            <h2 class="text-light">Avez-vous un projet innovant à fort impact social ?</h2>
        </div>
    </div>
    </section>
  </div>
  <div id="r">
    
    <p class="mt-5 text-center fs-3" > Félicitations pour votre projet !!! </p>
       <p class="mt-3 text-center  fs-4" > Pour que vous puissiez présenter votre projet à un analyste d'affaires, vous devez fournir les informations suivantes 👇:  </p>

  
       
  <projectform/>
</div>

</template>

<script setup lang="ts">

import projectform from "../../components/projectform.vue"; 

import tete from "../../components/tete.vue"; 
import carousel from "../../components/carousel.vue"
</script>

<style>
.background-full-color {
background-color: #2f4954f0;
    width: 100%;
    height:300px ;
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
#r{
    background-image:url('') ;
height:auto ;
background-color: rgb();
}
</style>