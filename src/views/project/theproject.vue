<template>

  <tete :isAuthenticated="isAuthenticated"  @deconnect="handleLogout"/>
  <div class="discover-page" data-path="/financer-projets">
    <section class="filters white">
    <div class="background-full-color flex-container text-center">
        <div class="background-title flex-item">
            <h2 class="text-light"><p>DÉCOUVREZ DES PROJETS INNOVANTS ET </p>
              À FORT IMPACT SOCIAL </h2>
        </div>
    </div>rw
    </section>
    </div>
  
  <div class="container" id="g1">
    
    <cardpro/> 

   </div>
   <pied/> 
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
background-color: #abd5d8f0;
    width: 100%;
    height:200px ;
    min-height: 10.625em;
    padding: 3.75em 0;
}
#g1{
  margin-bottom:50px ;
}
</style>