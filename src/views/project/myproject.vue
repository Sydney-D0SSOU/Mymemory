<template>
  <tete @deconnect="handleLogout" :isAuthenticated="isAuthenticated" />
  <div class="discover-page" data-path="/financer-projets">
    <section class="filters white">
      <div class="background-full-color flex-container text-center">
        <div class="background-title flex-item">
          <h2 class="text-light waviy">
            <span style="--i: 1">Avez</span>
            <span class="space" style="--i: 2">-</span>
            <span style="--i: 3">vous</span>
            <span style="--i: 4">un</span>
            <span style="--i: 5">projet</span>
            <span style="--i: 6">innovant</span>
            <span style="--i: 7">à</span>
            <span style="--i: 8"> fort </span>
            <span style="--i: 9">impact</span>
            <span style="--i: 10">social ?</span> 
            <br />
            <span style="--i: 11"> Faites</span>
            <span style="--i: 12"> le</span>
            <span style="--i: 13"> nous</span>
            <span style="--i: 14"> découvrir </span>
          </h2>
        </div>
      </div>
    </section>
  </div>
  <div id="">
    <p class="mt-2 text-center fs-3">Félicitations pour votre projet !!!</p>
    <p class="mt-3 text-center fs-4">
      Pour que vous puissiez présenter votre projet à un analyste d'affaires,
      vous devez fournir les informations suivantes 👇:
    </p>

    <div id="">
      <projectform />
    </div>
  </div>
</template>

<script>
import projectform from "../../components/projectform.vue";

import tete from "../../components/tete.vue";
export default {
  components: {
    projectform,
    tete,
  },
  data() {
    return {
      isAuthenticated: false,
    };
  },
  mounted() {
    const token = localStorage.getItem("Montoken");

    if (token) {
      this.isAuthenticated = true;
    }
  },
  methods: {
    handleLogout() {
      // Logique de déconnexion
      // Mettez à jour isAuthenticated à false et effectuez d'autres tâches nécessaires (par exemple, supprimez le token, redirigez l'utilisateur, etc.)
      this.isAuthenticated = false;
      localStorage.removeItem("Montoken"); // Supprimez le token du localStorage ou du cookie sécurisé
    },
  },
};
</script>

<style>
.background-full-color {
  background-color: #2f4954f0;
  width: 100%;
  height: 300px;
  min-height: 10.625em;
  padding: 3.75em 0;
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
svg {
  width: 50px;
  height: 30px;
}
#r {
  background-image: url("");
  height: auto;
  background-color: #d3d7d8f0;
}
#t {
  background-color: #b6d0dbf0;
}

h1 {
  font-family: "Montserrat Medium";
  max-width: 40ch;
  text-align: center;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
}
@keyframes scale {
  100% {
    transform: scale(1);
  }
}

span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
}

span:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
  animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(4) {
  animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(5) {
  animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(6) {
  animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(7) {
  animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(8) {
  animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(9) {
  animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(10) {
  animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(11) {
  animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(12) {
  animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(13) {
  animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(14) {
  animation: fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(15) {
  animation: fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(16) {
  animation: fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

.waviy span:not(.space){
margin-right: 10px;
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}

</style>
