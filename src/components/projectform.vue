<template>
  <form @submit.prevent="submitForm">
    <div class="container mt-5">
      <div class="shadow-lg p-4" id="custom">
        <h2 class="fs-4 mb-4">Mon business plan</h2>

        <!-- Titre du projet -->
        <div class="mb-3">
          <label class="form-label fs-5">Donnez un titre à votre projet</label>
          <input v-model="titre" type="text" class="form-control" placeholder="Intitulé du projet" />
        </div>

        <!-- Objectifs du projet -->
        <div class="mb-3">
          <label class="form-label fs-5">Quels sont les objectifs de votre projet ? (Soyez précis et concis)</label>
          <textarea v-model="objectifs" class="form-control" rows="3" placeholder="Objectifs du projet"></textarea>
        </div>

        <!-- Type de business (produit ou service) -->
        <div class="mb-3">
          <label class="form-label fs-5">Que proposez-vous ?</label>
          <div class="form-check">
            <input v-model="business" class="form-check-input" type="radio" value="Produit" id="produit" />
            <label class="form-check-label" for="produit">Un produit</label>
          </div>
          <div class="form-check">
            <input v-model="business" class="form-check-input" type="radio" value="Service" id="service" />
            <label class="form-check-label" for="service">Un service</label>
          </div>
        </div>

        <!-- Description du produit ou service -->
        <div class="mb-3">
          <label class="form-label fs-5">Décrivez votre produit ou service</label>
          <textarea v-model="descriptionb" class="form-control" rows="3" placeholder="Description"></textarea>
        </div>

        <!-- Joindre une image ou affiche -->
        <div class="mb-3">
          <label class="form-label fs-5">Joindre une image ou affiche qui illustre au mieux votre projet</label>
          <input type="file" ref="fileInput" @change="handleFileInputChange" class="form-control" />
        </div>

        <!-- Décrivez votre marché cible -->
        <div class="mb-3">
          <label class="form-label fs-5">Décrivez votre marché cible</label>
          <textarea v-model="cible" class="form-control" rows="3" placeholder="Cible visée"></textarea>
        </div>

        <!-- Enumérez les partenaires -->
        <div class="mb-3">
          <label class="form-label fs-5">Enumérez les partenaires de votre projet (si vous en avez)</label>
          <textarea v-model="partenaire" class="form-control" rows="3" placeholder="Partenaires"></textarea>
        </div>

        <!-- Concurrents -->
        <div class="mb-3">
          <label class="form-label fs-5">Quelles sont les entreprises que vous considérez comme étant vos concurrents immédiats ?</label>
          <textarea v-model="concurrents" class="form-control" rows="3" placeholder="Analyse de la concurrence"></textarea>
        </div>

        <!-- Dominance de la concurrence -->
        <div class="mb-3">
          <label class="form-label fs-5">Estimez leur part du marché et leur stratégie pour y arriver ?</label>
          <textarea v-model="strategiec" class="form-control" rows="3" placeholder="Dominance de la concurrence"></textarea>
        </div>

        <!-- Stratégie pour prendre une part de ce marché -->
        <div class="mb-3">
          <label class="form-label fs-5">Quelle est la stratégie que vous pensez mettre en œuvre pour prendre une part de ce marché ?</label>
          <textarea v-model="strategiep" class="form-control" rows="3" placeholder="Ma stratégie"></textarea>
        </div>

        <!-- Modèle économique -->
        <div class="mb-3">
          <label class="form-label fs-5">Quel sera votre modèle économique ?</label>
          <div class="form-check">
            <input v-model="modeleco" class="form-check-input" type="radio" value="Freemium" id="freemium" />
            <label class="form-check-label" for="freemium">Freemium</label>
          </div>
          <div class="form-check">
            <input v-model="modeleco" class="form-check-input" type="radio" value="Modèle publicitaire" id="publicitaire" />
            <label class="form-check-label" for="publicitaire">Publicitaire</label>
          </div>
          <div class="form-check">
            <input v-model="modeleco" class="form-check-input" type="radio" value="Modèle de vente directe" id="venteDirecte" />
            <label class="form-check-label" for="venteDirecte">Vente directe</label>
          </div>
          <div class="form-check">
            <input v-model="modeleco" class="form-check-input" type="radio" value="Modèle d'Abonnement" id="abonnement" />
            <label class="form-check-label" for="abonnement">Abonnement</label>
          </div>
          <div class="form-check">
            <input v-model="modeleco" class="form-check-input" type="radio" value="Modèle de Commissionnement" id="commissionnement" />
            <label class="form-check-label" for="commissionnement">Commissionnement</label>
          </div>
        </div>

        <!-- Coût de lancement -->
        <div class="mb-3">
          <label class="form-label fs-5">À combien estimez-vous le coût de lancement de votre projet ? (En FCFA)</label>
          <input v-model="cout" type="text" class="form-control" />
        </div>

        <!-- Chiffre d'affaires prévu -->
        <div class="mb-3">
          <label class="form-label fs-5">Quel chiffre d'affaires pensez-vous faire d'ici 1 an ?</label>
          <input v-model="chiffrea" type="text" class="form-control" />
        </div>

        <!-- Risques et approches de solutions -->
        <div class="mb-3">
          <label class="form-label fs-5">Quels sont les risques liés à la mise en œuvre de votre projet et comment pensez-vous y remédier ?</label>
          <textarea v-model="risque" class="form-control" rows="3" placeholder="Risques et approches de solutions"></textarea>
        </div>

        <!-- Bouton Soumettre -->
        <button type="submit" class="btn btn-success mt-4">SOUMETTRE</button>
      </div>
    </div>
  </form>
  <pied class="mt-5" />
</template>
<script>
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextarea,
  MDBRadio,
  MDBFile,
  MDBContainer,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
import axios from "axios";
import pied from "../components/pied.vue";
import tete from "../components/tete.vue";

export default {
  components: {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBTextarea,
    MDBRadio,
    MDBFile,
    MDBContainer,
    pied,
    tete,
  },
  data() {
    return {
      titre: "",
      objectifs: "",
      business: "",
      descriptionb: "",
      images: null,
      cible: "",
      partenaire: "",
      concurrents: "",
      strategiec: "",
      strategiep: "",
      modeleco: "",
      cout: "",
      chiffrea: "",
      risque: "",
    };
  },
  methods: {
    submitForm() {
      const token = localStorage.getItem("Montoken");

      const formData = new FormData();
      formData.append("titre", this.titre);
      formData.append("objectifs", this.objectifs);
      formData.append("business", this.business);
      formData.append("descriptionb", this.descriptionb);
      formData.append("images", this.images);
      formData.append("cible", this.cible);
      formData.append("partenaire", this.partenaire);
      formData.append("concurrents", this.concurrents);
      formData.append("strategiec", this.strategiec);
      formData.append("strategiep", this.strategiep);
      formData.append("modeleco", this.modeleco);
      formData.append("cout", this.cout);
      formData.append("chiffrea", this.chiffrea);
      formData.append("risque", this.risque);

      axios.post("https://memomry-back-serv.onrender.com", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          alert("Formulaire envoyé avec succès !");
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
          alert("Erreur lors de l'envoi du formulaire");
        });
    },

    handleFileInputChange(event) {
      this.images = event.target.files[0];
    },
  },
};
</script>

<style>
#custom {
  background-color: #6d706f;
  width: 80%;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.fs-4 {
  color: #104b6b;
}

.form-check-input {
  margin-top: 5px;
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}
</style>
