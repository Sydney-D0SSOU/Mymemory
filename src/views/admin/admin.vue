<template>
  <div class="row">
<div  class="  col-2">
    <sidebar id="t"/>
    
</div>
    <div class=" col-10 ">
      
      <adtable/> 
  
     </div> 
     </div>
  </template>
  
  <script>
  import sidebar from '../../components/sidebar.vue';
  import adtable from "../../components/table.vue";
  import tete from "../../components/tete.vue"
  export default {
    components:{
      adtable,
      sidebar,
      tete,
    }
  }
    
  
  </script>
  
  <style>
  
  #t{
    height:100% ;  }
  </style>