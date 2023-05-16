<template>
  <div class="container" id="h">
    
    <cardpro /> 

   </div> 
 
</template>
<script >
import { MDBRow,
     MDBCol, 
     MDBContainer,
        }
   from "mdb-vue-ui-kit";
   import { ref } from 'vue';
import cardpro from "../../components/cardpro.vue";
export default {
  components:{
    cardpro,
    MDBCol,
    MDBRow,
    MDBContainer
  }
}
  
  
</script>
<style>
#h{
    margin-top:50px ;
}
</style>