<template>
  <header>
    <!-- Navbar -->
    <MDBNavbar expand="lg" light bg="white" container classe="fixed-top">
      <MDBNavbarToggler target="#navbarExample01"></MDBNavbarToggler>
      <MDBNavbarNav collapse="navbarExample01" class="mb-3 mt-2 mb-lg-0">
        
       
        <router-link to="/">
        <MDBNavbarItem  class="fs-3" to="/">
            KOUÈ-MÌTÒN
        </MDBNavbarItem>
        </router-link>
        <MDBNavbarItem class="fs-5 mt-2" to="/theproject">
          Projet à financer 
        </MDBNavbarItem>
        <MDBNavbarItem class="fs-5 mt-2" to="#">
          Comment ça marche ?
        </MDBNavbarItem>
      
      </MDBNavbarNav>
      <div class="justify-content-rigth">
        <router-link to="/login">

        <MDBBtn outline="black" class="btn-lg">Se connecter</MDBBtn>
        </router-link>
        <router-link to="/signup">

  <MDBBtn color="black" class="btn-lg">S'inscrire</MDBBtn>
        </router-link>
        </div>
    </MDBNavbar>
  
    <!-- Navbar -->
    <!-- Background image -->
    <div
      class="p-5 text-center bg-image"
      style="
        background-image: url('../../public/jarre.png');
        height: 600px;
        margin-top: px;
      ">
      <div class="mask" style="background-color: rgba(85, 82, 82, 0.5);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3">Faisons vivre les projets créatifs.</h1>
            <router-link to="/myproject">
            <MDBBtn  tag="a" size="lg" lg outline="light" href="#!" role="button" bg="green"
              >Proposer un projet</MDBBtn>
            </router-link>
            <router-link to="/theproject">
            <MDBBtn class=" ml-10" tag="a" size="lg" lg outline="light" href="#!" color="secondary" role="button"  
              >Découvrir les projets </MDBBtn>
              </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Background image -->
  </header>
  <main>
    <h2 class = " text-center mt-10 text-#424242 mb-5 mt-5">
     <span> DÉCOUVREZ DES PROJETS INNOVANTS AMBITIEUX ET SOLIDES </span>

    </h2>
   
  <MDBContainer>
    <MDBRow>
    <MDBCol>   <card/>  </MDBCol>
  <MDBCol> <card /> </MDBCol>
  <MDBCol> <card1/> </MDBCol>
  <MDBCol> <card1/> </MDBCol>
     
 </MDBRow>
 <center>
    <btn class=" mb-5 mt-5"/>
 </center>
  </MDBContainer>
  <div class="cta-project flex-container text-center">
	<div class="flex-item">
		<div class="cta-text">
                      Vous êtes porteur de projet? Lancez-vous !
		</div>
		<div class="cta-btn">
      <router-link to="/myproject">
      <MDBBtn color="secondary" class="btn-lg">   Proposez un projet    </MDBBtn>
      </router-link>
		</div>

	</div>
</div>
<div>
  <center>
    <h2 class="mt-5 mb-6 " > Pourquoi choisir KOUÈ-MÌTÒN
    </h2>
  </center>
</div>
<div class="container">
		<div class="row">
			<div class="col-sm-6 col-lg-3">
				<div class="why-icon ">
					<img src="https://www.fiatope.com/assets/securite-b04fc7b5762d50b96661ff2c239451ab25e560b6ddd5ef97baa6378d8a72cc58.svg" />
				</div>
				<div class="why-title-item">
				        Sécurité	
				</div>
				<div class="why-description">
                                       Chez KOUÈ-MÌTÒN , nous respectons nos engagements de confidentialité. Vos informations de paiement et vos contributions sont sécurisées. 
				</div>
			</div>
			<div class="col-sm-6 col-lg-3">
				<div class="why-icon">
					<img src="https://www.fiatope.com/assets/fiabilite-a8424ca5df4ffd54da9ac4f2481bf224de6bd568088021fc8f2bc15f68602c93.svg" />
				</div>
				<div class="why-title-item">
				        Fiabilité
                                </div>
      				<div class="why-description">
                                       Vous avez l&#39;assurance que vos dons seront reçus par le porteur de projet bénéficiare. 
				</div>
			</div>
			<div class="col-sm-6 col-lg-3">
				<div class="why-icon">
					<img src="https://www.fiatope.com/assets/professionnalisme-f6c200055e9505c6a60115f3c6e518a9f624adfb357a601f508f4c71af964cbe.svg" />
				</div>
				<div class="why-title-item">
				        Professionalisme
				</div>
				<div class="why-description">
                                       Notre aptitude à sélectionner pour vous des projets ambitieux, originaux et innovants dans des domaines tels que l&#39;enseignement supérieur, la santé, les technologies, l&#39;environnement, l&#39;agriculture, la culture. Nous travaillons pour cela avec de nombreux Business Analyst qui etudie la viabilité et la faisabilité des projets qui sont soumis .
				</div>
			</div>
			<div class="col-sm-6 col-lg-3">
				<div class="why-icon">
					<img src="https://www.fiatope.com/assets/transparence-c6da034b7b61fb75ede86e40279a9a1bdf7f043a51dfec436325005707f00455.svg" />
				</div>
				<div class="why-title-item">
					Transparence
				</div>
				<div class="why-description">
                                        Notre détermination à faire du Bénin une destination de choix pour les investisseurs est une motivation suffisante pour vous prouvez toutes notre franchises . Nous travaillons avec des partenaires agréés par les autorités administratives et financières françaises et internationales. 
				</div>
				</div>
    </div>
</div>

  </main>
  <pied/>
</template>
<script setup lang="ts">
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBBtn,
    MDBCol, 
    MDBRow,
MDBContainer
  } from 'mdb-vue-ui-kit';
 
  import card from "../components/card.vue";
  import card1 from "../components/card1.vue";
  import btn from "../components/btn.vue";
  import pied from "../components/pied.vue";
  import login from "../views/auth/login.vue" ;
</script>
<style scoped>
.cta-project {
    background-color: #6a848d;
    height: 300px;
    width: 100%;
    background-image: url('../../public/2.png');
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
.why-description {
    margin-bottom: 30px;
    color: #3D321C;
    text-align: justify;
}
.why-icon img {
    height: 50px;
}
</style>