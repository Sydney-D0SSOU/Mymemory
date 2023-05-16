<template>
  <div class="row">
<div  class="  col-2">
    <sidebar id="t"/>
    
</div>
    <div class=" col-10 ">
      
      <ckeck/> 
  
     </div> 
     </div>
  </template>
  
  <script>
  import sidebar from '../../components/sidebar.vue';
  import ckeck from "../../components/ckeck.vue";
  import tete from "../../components/tete.vue"
  export default {
    components:{
      ckeck,
      sidebar,
      tete,
    }
  }
    
  
  </script>
  
  <style>
  
  #t{
    height:100% ;  }
  </style>