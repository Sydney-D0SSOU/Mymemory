<template>

  <navbar/>
  <div class="discover-page" data-path="/financer-projets">
    <section class="filters white">
    <div class="background-full-color flex-container text-center">
        <div class="background-title flex-item">
            <h2>Business Analyst </h2>
        </div>
    </div>
    </section>
    </div>
  
  <div class="container">
    
    <cardpro/> 

   </div> 
</template>

<script>
import navbar from '../../components/navbar.vue';
import cardpro from "../../components/cardpro.vue";
export default {
  components:{
    cardpro,
    navbar
  }
}
  

</script>

<style>
.r {
    background-color: rgb(194, 204, 204);
    border:5px solid rgb(214, 182, 182);
    height: 500px;
    width:1500px ;
    margin-top:90px ;
    margin-bottom:10px ;
    margin-left:30px ;
    padding:15px ;
    overflow: auto;
    border-radius: 10px;

}
.Z{
  margin-top:3900px ;

}
#h{
  width: 1400px;
  height: 500px;
  margin-bottom:30px ;

}
.background-full-color {
background-color: #7fc0d6f0;
    width: 100%;
    height:200px ;
    min-height: 10.625em;
    padding: 3.75em 0;
}
</style>