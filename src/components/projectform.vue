<template>
   
    <form @submit.prevent="submitForm">
     
<center>
      <div class="form-group" id="custom" >
        
        <fieldset>
          <center>
  <legend>Mon business plan </legend>
  </center>
    <MDBRow class="">
    

      <MDBCol sm="" class="ms-5 mt-40 ">
        <label class="fs-5 mt-5 mb-3  " >Donnez un titre à votre projet </label> 
        <MDBInput 
        label="Intitulé du projet"
        class="form-control" 
        id="form11Name2" 
        v-model="titre"/>

    
    </MDBCol>
<MDBRow class="">
    

      <MDBCol sm="" class="ms-5 mt-40 ">
        <label class="fs-5 mt-5 mb-4 text " > Quels sont les objectifs de  votre projet ? (Soyez précis et conçis) </label>

        <MDBTextarea
        type="textarea"
        label="Objectifs du projet"
        id="form11Name2"
        v-model="objectifs"
      />
    
    </MDBCol>

  </MDBRow>
  </MDBRow>
    

 <MDBRow class="ms-5 ">
     
     
  <MDBCol  class="fs-5  ">
    <label class="fs-5 mt-5 mb-3 text-center " > 
   <p> Que proposez-vous  ? </p>
   </label>
        <MDBRadio
        
      label="Un produit"
      name="Produit"
      v-model="business"
      value="Produit"
      
    />
    
    <MDBRadio
      label="Un service"
      name="Service"
      v-model="business"
      value="Service"
      
     
    />
      </MDBCol>
  


  </MDBRow>
  <MDBRow class="">
    

      <MDBCol  class="ms-5 mt-40 ">
        <label class="fs-5 mt-5 mb-3  " >Décrivez votre produit ou service  </label>

        <MDBTextarea 
        label="Description" 
         v-model="descriptionb" 
         class="form-control" />
    
    </MDBCol>

  </MDBRow>
  <MDBRow class="">
    

      <MDBCol  class="ms-5 mt-40 ">
        <label class="fs-5 mt-5 mb-3 text-center " for="images">Joindre une image ou affiche qui illustre au mieux votre projet   </label>

        <MDBFile class="form-control" name="images"   ref="fileInput" @change="handleFileInputChange" />
    </MDBCol>

  </MDBRow>
 
  <MDBRow class="">
    
      <MDBCol sm="" class="ms-5 mt-40 ">
        <label class="fs-5 mt-5 mb-3  " > Décrivez votre marché cible  ? </label>

        <MDBTextarea
        type="textarea"
        label="Cible visé "
        id="form11Name2"
        v-model="cible"
      />
    
    </MDBCol>

  </MDBRow>
 
  <MDBRow class="">
  
   <label class="fs-5 mt-5 mb-3 " > Enummérez les partenaires  de votre projet (si vous en avez) ?  </label>

      <MDBCol sm="" class="ms-5 mt-40 ">
        <MDBTextarea
        type="textarea"
        label="Partenaires"
        id="form11Name2"
        v-model="partenaire"
      />
    
    </MDBCol>

  </MDBRow> 
  <MDBRow class="">
    
    
      <MDBCol  class="ms-5 mt-40 ">
        <label class="fs-5 mt-5 mb-3  " > 
        <p> Quelles sont les entreprises que vous considérez directement  comme étant vos concurrents immédiats ? </p>
</label>
        <MDBTextarea
        type="textarea"
        label="Analyse de la  concurrences "
        id="form11Name2"
        v-model="concurrents"
      />
    
    </MDBCol>

  </MDBRow>
  <MDBRow class="">
    
   

      <MDBCol  class="ms-5 mt-40 ">
        <label class="fs-5 mt-5 mb-3 text-center " > 
   <p> Estimez leur part du marché et leur stratégie pour y arriver ?   </p> 
 
  </label>
        <MDBTextarea
        type="textarea"
        label="Dominance de la concurrences "
        id="form11Name2"
        v-model="strategiec"
      />
    
    </MDBCol>
  </MDBRow>
  <MDBRow class="">


      <MDBCol  class="ms-5 mt-40 ">
        <label class="fs-5 mt-5 mb-3  " > 
   <p> Quelle est la stratégie que vous pensez mettre en pour prendre une  part de ce marché ? </p>
 
  </label>
        <MDBTextarea
        type="textarea"
        label="Ma stratégie"
        id="form11Name2"
        v-model="strategiep"
      />
    
    </MDBCol>
  </MDBRow>
  <MDBRow class="">

   
 <MDBRow class="ms-4">
  <label class="fs-5 mt-5 mb-3  " > 
   <p> Quel sera votre modèle économique ? </p>
   </label>
      <MDBCol  class="fs-5  ">
        <MDBRadio
        
      label=" Freemium "
      name="Freemium"
      v-model="modeleco"
      value="Modèle Freemium"
     
    />
      </MDBCol>
      <MDBCol sm="" class=" fs-5">
    <MDBRadio
      label=" Publicitaire"
      name="Modèle publicitaire"
      v-model="modeleco"
      value="Modèle publicitaire"
     
      invalidFeedback="More example invalid feedback text"
      wrapperClass="mb-3"
    />
      </MDBCol>
      <MDBCol sm="" class="fs-5 ">
    <MDBRadio
      label=" Vente directe"
      name=" vente directe"
      v-model="modeleco"
      value="Modele de vente directe"
     
    />
      </MDBCol>
    <MDBCol sm="" class=" fs-5">
    <MDBRadio
      label="Abonnement"
      name="Abonnement"
      v-model="modeleco"
      value="Modèle d´abonnement"
     
      
      wrapperClass="mb-3"
    />
    </MDBCol>
    <MDBCol sm="" class=" fs-5">
    <MDBRadio
      label="Commissionnement "
      name=" Commissionnement"
      v-model="modeleco"
      value="Modèle de commissionnement3"
     
      invalidFeedback="More example invalid feedback text"
      wrapperClass="mb-3"
    />
    </MDBCol>
 </MDBRow>
  </MDBRow>
 
  <MDBRow class="">

      <MDBCol sm="" class="ms-5 mt-40 ">
        <label class="fs-5 mt-5 mb-3 text-center " > À combien estimez-vous le côut de lancement de votre projet ? (En FCFA)   </label>

        <input type="text" v-model="cout" class="form-control "  />
    
    </MDBCol>
  </MDBRow>
  <MDBRow class="">

      <MDBCol sm="" class=" mt-40 ">
        <label class="fs-5 mt-5 mb-3  " > Quel chiffre d´affaire pensez-vous faire  d´ici 1an ?   </label>

        <input type="text" v-model="chiffrea" class="form-control" />
    
    </MDBCol>
  </MDBRow>
  <MDBRow class="">
   
      <MDBCol sm="" class=" mt-40 ">
        <label class="fs-5 mt-5 mb-2  " > Quels sont les risques liés à la mise en ouevre de votre projet
     et comment pensez-vous  y remédier  ?  </label>

        <MDBTextarea
        type="textarea"
        label=""
        id="form11Name2"
        v-model="risque"
      />
    </MDBCol>
  </MDBRow> 
  <button type="submit" class="btn btn-success mt-5  ">SOUMETTRE</button>
</fieldset>

  </div>
</center>
  </form>

  <pied class="mt-5"/>

  
</template>
<script >

  import {
    MDBNavbar,  
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCol, 
    MDBRow,
MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBTextarea,
    MDBBtn,
    MDBRadio,
    MDBFile
  } from "mdb-vue-ui-kit";
  import { ref } from 'vue';

import axios from 'axios';
import pied from "../components/pied.vue"
import tete from "../components/tete.vue";

export default{
  components: {
    MDBNavbar,  
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCol, 
    MDBRow,
MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBTextarea,
    MDBBtn,
    MDBRadio,
    MDBFile,
    pied,
    tete,
    },
  data () {
    return{
      titre:'',
      objectifs:'',
      business:'',
      descriptionb:'',
      images: null ,
      cible:'',
      partenaire:'',
      concurrents:'',
      strategiec:'',
      strategiep:'',
      modeleco:'',
      cout:'',
      chiffrea:'',
      risque:'',
    }
  },
  methods: {
   submitForm(){
    const token = localStorage.getItem("Mon token") ;

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

   axios.post('http://localhost:3004/pro/create',formData,
   {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
   .then(response => {
          console.log(response);
          alert("Formulaire envoyé avec succès !");
          this.$router.push('/')
        })
        .catch(error => {
          console.log(error);
          alert("Erreur lors de l'envoi du formulaire");
        });
    },
   
   handleFileInputChange(event) {
      this.images = event.target.files[0];
    }
 
  
  },
};
</script>
<style>
#custom{
  background-color: #f1fefedb;
  width: 60%;
  margin-left:80px ;
  margin-top: 50px;
  
}
fieldset {
  border: 4px double #104b6b;
  padding: 10px;
  margin-bottom: 10px;
}
legend {
  font-weight: bold;
}
</style>
