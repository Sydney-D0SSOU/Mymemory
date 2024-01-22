<template>
  <header class="position-relative">
    <tete @deconnect="handleLogout" :isAuthenticated="isAuthenticated" />

    <!-- Navbar -->
    <!-- Background image -->
   
    <div class="d-flex justify-content-center align-items-center position-absolute btn-container">
          <div class="text-white">
            <h1 class="mb-3">Faisons vivre les projets créatifs</h1>
            <button
              type="button"
              class="btn btn-light btn-lg custom-btn-orange btn-shadow-lg"
              @click="changer"
            >
              Proposer un projet
            </button>

            <button
              type="button"
              class="btn custom-btn-blue btn-lg ms-2 btn-shadow-lg btn-black"
              @click="a"
            >
              Découvrir les projets
            </button>
          </div>
        </div>
    <carousel  :transition="500"  :autoplay="3000"  :wrap-around="true">
      <Slide v-for="slide in carrouselList" :key="slide">
      <div class="carousel__item"><img :src="slide"></div>
    </Slide>
    
      <template #addons>
   
      </template>
    </carousel>
  </header>
  <main>
    <h2 class="text-center mt-10 text-#424242 mb-5 mt-5">
      <span> DÉCOUVREZ DES PROJETS INNOVANTS AMBITIEUX ET SOLIDES </span>
    </h2>

    <MDBContainer>
      <MDBRow>
        <MDBCol> <card /> </MDBCol>
        <MDBCol> <card1 /> </MDBCol>
        <MDBCol> <card2 /> </MDBCol>
        <MDBCol> <card3 /> </MDBCol>
      </MDBRow>
      <center>
        <btn class="mb-5 mt-5" />
      </center>
    </MDBContainer>
    <div class="cta-project flex-container text-center">
      <div class="flex-item">
        <div class="cta-text">Vous êtes porteur de projet? Lancez-vous !</div>
        <div class="">
          <button type="button" class="btn btn-light btn-lg" @click="changer">
            Proposer un projet
          </button>
        </div>
      </div>
    </div>
    <div>
      <center>
        <h2 class="mt-5 mb-6">Pourquoi choisir KOUÈ-MÌTÒN</h2>
      </center>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-lg-3">
          <div class="why-icon">
            <img
              src="https://www.fiatope.com/assets/securite-b04fc7b5762d50b96661ff2c239451ab25e560b6ddd5ef97baa6378d8a72cc58.svg"
            />
          </div>
          <div class="why-title-item">Sécurité</div>
          <div class="why-description">
            Chez KOUÈ-MÌTÒN , nous respectons nos engagements de
            confidentialité. Vos informations de paiement et vos contributions
            sont sécurisées.
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="why-icon">
            <img
              src="https://www.fiatope.com/assets/fiabilite-a8424ca5df4ffd54da9ac4f2481bf224de6bd568088021fc8f2bc15f68602c93.svg"
            />
          </div>
          <div class="why-title-item">Fiabilité</div>
          <div class="why-description">
            Vous avez l&#39;assurance que vos dons seront reçus par le porteur
            de projet bénéficiare.
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="why-icon">
            <img
              src="https://www.fiatope.com/assets/professionnalisme-f6c200055e9505c6a60115f3c6e518a9f624adfb357a601f508f4c71af964cbe.svg"
            />
          </div>
          <div class="why-title-item">Professionalisme</div>
          <div class="why-description">
            Notre aptitude à sélectionner pour vous des projets ambitieux,
            originaux et innovants dans des domaines tels que l&#39;enseignement
            supérieur, la santé, les technologies, l&#39;environnement,
            l&#39;agriculture, la culture. Nous travaillons pour cela avec de
            nombreux Business Analyst qui etudie la viabilité et la faisabilité
            des projets qui sont soumis .
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="why-icon">
            <img
              src="https://www.fiatope.com/assets/transparence-c6da034b7b61fb75ede86e40279a9a1bdf7f043a51dfec436325005707f00455.svg"
            />
          </div>
          <div class="why-title-item">Transparence</div>
          <div class="why-description">
            Notre détermination à faire du Bénin une destination de choix pour
            les investisseurs est une motivation suffisante pour vous prouvez
            toutes notre franchises . Nous travaillons avec des partenaires
            agréés par les autorités administratives et financières françaises
            et internationales.
          </div>
        </div>
      </div>
    </div>
  </main>
  <pied />
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer,
} from "mdb-vue-ui-kit";
import card2 from "../components/card2.vue";
import card3 from "./card3.vue";
import card from "../components/card.vue";
import card1 from "../components/card1.vue";
import btn from "../components/btn.vue";
import pied from "../components/pied.vue";
import login from "../views/auth/login.vue";
import tete from "./tete.vue";
export default {
  components: {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBBtn,
    MDBCol,
    MDBRow,
    MDBContainer,
    card,
    card1,
    card2,
    card3,
    btn,
    pied,
    login,
    tete,
    Carousel,
    Slide,
    Pagination,

  },
  data() {
    return {
      isAuthenticated: false,
      carrouselList:[
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2FFongbeWorld%2Fstatus%2F1049585917537726465&psig=AOvVaw0H_cJPAsZD9xuRZKuQM3PM&ust=1706016724625000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDZhfyN8YMDFQAAAAAdAAAAABAD',
        '/public/jarre.png',
        '/public/stade.jpg',

      ]
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
    changer() {
      this.$router.push("/myproject");
    },
    a() {
      this.$router.push("/theproject");
    },
  },
};
</script>
<style scoped>


:root {
    --vc-clr-primary: #000;
    --vc-clr-secondary: #090f207f;
    --vc-clr-white: #ffffff;
    --vc-icn-width: 1.2em;
    --vc-nav-width: 30px;
    --vc-nav-height: 30px;
    --vc-nav-border-radius: 0;
    --vc-nav-color: var(--vc-clr-primary);
    --vc-nav-color-hover: var(--vc-clr-secondary);
    --vc-nav-background: transparent;
    --vc-pgn-width: 12px;
    --vc-pgn-height: 12px;
    --vc-pgn-margin: 4px;
    --vc-pgn-border-radius: 50%;}
.cta-project {
  background-color: #6a848d;
  height: 300px;
  width: 100%;
  background-image: url("../../public/2.png");
  background-repeat: repeat;
  background-size: 50px;
  background-repeat: space;
}
.cta-text {
  color: hsl(180, 33%, 97%);
  font-size: 40px;
  margin-bottom: 30px;
  margin-top: 10px;
  padding: 10px;
}
.flex-item {
  flex: 0 1 auto;
}
.btn-medium-white-border {
  color: rgb(19, 18, 18);
  border: 3px solid rgb(16, 15, 15);
  padding: 12px 20px;
  /* border-radius: 3px;*/
  text-transform: none;
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-center {
  text-align: center !important;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}


.carousel__pagination-button::after {
  width: 15px;
  height: 15px;
  border-radius: 50%!important;
}

.carousel__pagination-item .carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
    background-color: var(--vc-pgn-active-color);
    width: 15px;
  height: 15px;
  border-radius: 50%!important;
}

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

:root {
  --vc-pgn-width: 12px;
  --vc-pgn-height: 12px;
  --vc-pgn-border-radius: 6px;
}


.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

.carousel__item {
  height: 600px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__item  img{
  height: 100%;
  width: 100%;
}





.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  display: none;
  border: 5px solid white;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
.why-title-item {
  padding: 30px 0px;
  color: #2a2408;
  font-size: 25px;
}

.btn-container{
  z-index: 200;
    width: 100%;
    height: 89%;
    text-align: center;
    background-color: rgba(113, 106, 106, 0.37)
}
.carousel__icon{
  display: none;
}
.why-description {
  margin-bottom: 30px;
  color: #3d321c;
  text-align: justify;
}
.why-icon img {
  height: 50px;
}
</style>
