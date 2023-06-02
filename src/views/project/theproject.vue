<template>

  <tete :isAuthenticated="isAuthenticated"  @deconnect="handleLogout"/>
  <div class="discover-page" data-path="/financer-projets">
    <section class="filters white">
    <div class="background-full-color flex-container text-center">
        <div class="background-title flex-item">
            <h2 class="text-light"><p>DÉCOUVREZ DES PROJETS INNOVANTS ET </p>
              À FORT IMPACT SOCIAL </h2>
        </div>
    </div>
    </section>
    </div>
  
  <div class="container" id="g1">
    
    <cardpro/> 

   </div>
   <pied class="mt-5"/> 
</template>

<script>
import navbar from '../../components/navbar.vue';
import cardpro from "../../components/cardpro.vue";
import tete from "../../components/tete.vue";
import pied from "../../components/pied.vue";
export default {
  components:{
    cardpro,
    navbar,
    tete,
    pied
  },
  data(){
return{
  isAuthenticated : false
}
  },
  mounted() {
        const token = localStorage.getItem("Montoken")

  if (token) {
    this.isAuthenticated = true;
  }
}, 
 methods:{
  handleLogout(){
        // Logique de déconnexion
      // Mettez à jour isAuthenticated à false et effectuez d'autres tâches nécessaires (par exemple, supprimez le token, redirigez l'utilisateur, etc.)
      this.isAuthenticated = false;
      localStorage.removeItem('Montoken');
      location.reload() // Supprimez le token du localStorage ou du cookie sécurisé

}
 }
}
  

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
background-color:  #d3d7d8f0;
}
#t{
    background-color: #b6d0dbf0;
}
</style>