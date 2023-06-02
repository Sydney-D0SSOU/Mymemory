<template>
  <tete :isAuthenticated="isAuthenticated"  @deconnect="handleLogout"/>

      <div v-if="post">
        
    <header class="bg-gray-200 text-white text-center  py-3">
      <img :src="post.files" alt="Image du projet" id="x" class="">
    </header>
    <main class="container mt-5">
      <div class="row ">
        <div class="col-md-8 ">
          <h2 class="text-primary">Description du projet</h2>
      Nom :     <p class="lead">{{ post.descriptionb }}</p>
      <strong>Les partenaires : </strong> {{ post.partenaire }}

        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-6">
          <button class="btn btn-warning btn-lg btn-block">Investir</button>
        </div>
        <div class="col-md-6">
          <button class="btn btn-success btn-lg btn-block">Faire un don</button>
        </div>
      </div>
    </main>
  
      </div>
      <div v-else>
        <p>Chargement en cours...</p>
      </div>
      
  </template>
  
  <script>
  import tete from '../../components/tete.vue';
  export default {
    components :{
      tete
    },
    data() {
      return {
        post: null,
      };
    },
    mounted() {
      this.fetchUser();
      const token = localStorage.getItem("Montoken")

  if (token) {
    this.isAuthenticated = true;
    }
  },
    methods: {
      async fetchUser() {
        try {
          const token = localStorage.getItem("Mon token") ;
          const postId = this.$route.params.id;
          const response = await fetch(`http://localhost:3004/pro/one/${postId}`,
          
          {
     headers: {
       Authorization: `Bearer ${token}`,
     },
    });
          const data = await response.json();
          this.post = data;
        } catch (error) {
          console.error(error);
        }
      },
      handleLogout(){
        // Logique de déconnexion
      // Mettez à jour isAuthenticated à false et effectuez d'autres tâches nécessaires (par exemple, supprimez le token, redirigez l'utilisateur, etc.)
      this.isAuthenticated = false;
      localStorage.removeItem('Montoken');
      location.reload() // Supprimez le token du localStorage ou du cookie sécurisé

},
    },
  };
  </script>
  
  <style>
/* Styles spécifiques au composant */
header {
  padding: ;
}

.img-fluid {
  max-width: 100%;
  height: 50%;
}
#x{
  height: 500px;
width: 70%;
box-shadow: 10;
}
</style>

  