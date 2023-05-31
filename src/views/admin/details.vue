<template>
  <div class="row">
    <div  class="col-2">
    <sidebar id="t"/>
    
</div>
<div class=" col-10 ">
    <h1>Détails sur le le Business Plan </h1>
    <div v-if="post">
      <div class="container">
    <div class="row">
      <div class="col" id="r">
        <img :src="post.files" alt="Image de la page" id="p1" class="img-fluid"/>
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
          <strong>Les partenaires : </strong> {{ post.partenaire }}
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
          <strong> Soumis le   : </strong> {{ post.createdAt }}
        </div>
        <div class="mb-3">
          <strong> Etat   : </strong> {{ post.etat }}
        </div>
        <div class="mt-5">
          <button type="button" class="btn btn-success" @click="Updatepro">VALIDER</button>
          <button type="button" class="btn btn-danger" @click="Updatepro1">REFUSER</button>
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
import axios from 'axios' ;
export default {
  components :{
    sidebar
  },
  data() {
    return {
      post: null,
      etatpro: ""
    };
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const token = localStorage.getItem("admintoken") ;
        const postId = this.$route.params.id;
        const response = await fetch(`http://localhost:3004/pro/one1/${postId}`,
        
        {
   headers: {
     Authorization: `Bearer ${token}`,
   },
  });
        const data = await response.json();
        this.post = data;
      } catch (error) {
        console(error);
      }
    },
    async Updatepro(){
      try {
        const postId = this.$route.params.id;
        const token = localStorage.getItem("admintoken") ;

    const response = await axios.put(`http://localhost:3004/pro/modify/${postId}`,null,
    {
   headers: {
     Authorization: `Bearer ${token}`,
   },
  });
    console.log("Statut du projet mis à jour avec succès !");
    alert('projet validé')
    location.reload()
    this.$router.push(`/details/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du statut du projet :", error);
     
  }

    },
    async Updatepro1(){
      try {
        const token = localStorage.getItem("admintoken") ;

        const postId = this.$route.params.id;
    const response = await axios.put(`http://localhost:3004/pro/modify1/${postId}`,null,
    {
   headers: {
     Authorization: `Bearer ${token}`,
   },
  });
    console.log("Statut du projet mis à jour avec succès !");
    alert('Projet Refusé')
    location.reload()
    this.$router.push(`/details/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du statut du projet :", error);
     
  }

    }
   
  },
};
</script>

<style>
.container {
  margin-top: 50px;
}
#p1{
  height: 100% ;
  width: 100% ;
}
#r{
  border:0px solid 
  rgb(30, 33, 44)  ;
}
</style>
