<template>
  <div v-if="post">
    <header class="bg-dark text-white text-center py-5">
      <img :src="post.files" alt="Image du projet" class="img-fluid">
    </header>
    <main class="container mt-5">
      <div class="row">
        <div class="col-md-8">
          <h2 class="text-primary">Description du projet</h2>
          <p class="lead">Texte décrivant votre projet en détail...</p>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-6">
          <button class="btn btn-success btn-lg btn-block">Investir</button>
        </div>
        <div class="col-md-6">
          <button class="btn btn-info btn-lg btn-block">Faire un don</button>
        </div>
      </div>
    </main>
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
        post: [],
      };
    },
    mounted() {
      this.fetchUser();
    },
    methods: {
      async fetchUser() {
        try {
          const postId = this.$route.params.id;
          const response = await fetch(`http://localhost:3004/pro/one/${postId}`);
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
</style>


<style scoped>
/* Styles spécifiques au composant */
header {
  padding: 20px;
}

.img-fluid {
  max-width: 50%;
  height: auto;
}
</style>
