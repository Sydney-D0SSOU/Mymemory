<template>
<tete   @deconnect="handleLogout" :isAuthenticated="isAuthenticated"/>    
  <div class="discover-page" data-path="/financer-projets">
    
    <section class="filters white">
    <div class="background-full-color flex-container text-center">
        <div class="background-title flex-item">
            <h2 class="text-light">Avez-vous un projet innovant à fort impact social ?</h2>
        </div>
    </div>
    </section>
  </div>
  <div id="">
      <p class="mt-2 text-center fs-3" > Félicitations pour votre projet !!! </p>
       <p class="mt-3 text-center  fs-4" > Pour que vous puissiez présenter votre projet à un analyste d'affaires, vous devez fournir les informations suivantes 👇:  </p>
  
       <div id="">
    


  
       
  <projectform/>
</div>
</div>
</template>

<script >

import projectform from "../../components/projectform.vue"; 

import tete from "../../components/tete.vue"; 
export default{
    components:{
        projectform,
        tete
    },
    data(){
        return{
            isAuthenticated: false
            
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
      localStorage.removeItem("Montoken"); // Supprimez le token du localStorage ou du cookie sécurisé

},
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