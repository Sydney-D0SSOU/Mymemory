<template>
    <div class="row">
      
  <div class="  ">
      <h1>Détails sur le le Business Plan </h1>
      <div v-if="post">
        <div class="container">
      <div class="row">
        <div class="col" id="r">
          <img :src="post.files" alt="Image de la page" id="p1" class="img-fluid">
        </div>
        <div class="col-md-6">
          <h1>{{ post.titre }}</h1>
          <p class="lead">{{ post.business }}</p>
          <hr>
          <div class="mb-3">
            <strong>Objectifs:</strong> <span>{{ post.objectifs }}</span>
          </div>
          <div class="mb-3">
            <strong>Description : </strong> {{ post.descriptionb }}
          </div>
          <div class="mb-3">
  <strong>La  cible : </strong> {{ post.cible }}
          </div>
     <div class="mb-3">
            <strong>Les partenaires : </strong> {{ post.partenaires }}
          </div>
          <div class="mb-3">
            <strong>Concurrents immédiats  : </strong> {{ post.concurrents }}
          </div>
          <div class="mb-3">
            <strong> Concurrents(stratégie et part du marché)   : </strong> {{ post.strategiec }}
          </div>
          <div class="mb-3">
            <strong> Stratégie personelle   : </strong> {{ post.strategiep }}
          </div>
          <div class="mb-3">
            <strong>Modèle économique   : </strong> {{ post.modeleco }}
          </div>
          <div class="mb-3">
            <strong> Coût de lancement  : </strong> {{ post.cout }}
          </div>
          <div class="mb-3">
            <strong> Chiffre d´affaire (1 ans+)   : </strong> {{ post.cout }}
          </div>
          <div class="mb-3">
            <strong> Risques et solutions   : </strong> {{ post.risque }}
          </div>
          <div class="mb-3">
            <strong> Risques et solutions   : </strong> {{ post.createdAt }}
          </div>
          <!-- Ajoutez ici d'autres informations sur la page -->
        </div>
      </div>
    </div>
        <!-- Affichez ici les autres informations de l'utilisateur -->
      </div>
      <div v-else>
        <p>Chargement en cours...</p>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  import sidebar from '../../components/sidebar.vue';
  export default {
    components :{
      sidebar
    },
    data() {
      return {
        post: null,
      };
    },
    mounted() {
      this.fetchUser();
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
    },
  };
  </script>
  
  <style>
  .container {
    margin-top: 50px;
  }
  #p1{
    height:100% ;
  }
  #r{
    height:90vh ;
  }
  </style>
  