<template>
  <div>
    <form @submit.prevent="submitForm">
    <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " >Donnez un titre à votre projet </label> 

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <MDBInput class="form-control" id="form11Name2" v-model="titre"/>

    
    </MDBCol>
</center>
<MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-4 text-center " > Quels sont les objectifs de  votre projet ? (Soyez précis et conçis) </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <MDBTextarea
        type="textarea"
        label=""
        id="form11Name2"
        v-model="objectifs"
      />
    
    </MDBCol>
</center>
  </MDBRow>
  </MDBRow>
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " > 
   <p> Que proposez-vous  ? </p>
   
  </label>

 <MDBRow class="ms-5 ">
     
     
  <MDBCol  class="fs-5  ">
        <MDBRadio
        
      label="Produit"
      name="Produit"
      v-model="business"
      value="Produit"
      
    />
      </MDBCol>
      <MDBCol sm="" class=" fs-5">
    <MDBRadio
      label="Service"
      name="Service"
      v-model="business"
      value="Service"
      
      invalidFeedback="More example invalid feedback text"
      wrapperClass="mb-3"
    />
      </MDBCol>
 </MDBRow>
  </center> 


  </MDBRow>
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " >Décrivez votre produit ou service  </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <textarea type="text"  v-model="descriptionb" class="form-control" ></textarea>
    
    </MDBCol>
</center>
  </MDBRow>
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " for="images">Joindre une image ou affiche qui illustre au mieux votre projet   </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <MDBFile class="form-control" name="images"   ref="fileInput" @change="handleFileInputChange" />
    </MDBCol>
</center>
  </MDBRow>
 
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " > Décrivez votre marché cible  ? </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <MDBTextarea
        type="textarea"
        label=""
        id="form11Name2"
        v-model="cible"
      />
    
    </MDBCol>
</center>
  </MDBRow>
 
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " > Enummérez les partenaires  de votre projet (si vous en avez) ?  </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <MDBTextarea
        type="textarea"
        label=""
        id="form11Name2"
        v-model="partenaire"
      />
    
    </MDBCol>
</center>
  </MDBRow> 
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " > 
   <p> Quelles sont les entreprises que vous considérez directement  </p> comme étant vos concurrents immédiats ?
 
  </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <MDBTextarea
        type="textarea"
        label=""
        id="form11Name2"
        v-model="concurrents"
      />
    
    </MDBCol>
</center>
  </MDBRow>
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " > 
   <p> Estimez leur part du marché et leur stratégie pour y arriver ?   </p> 
 
  </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <MDBTextarea
        type="textarea"
        label=""
        id="form11Name2"
        v-model="strategiec"
      />
    
    </MDBCol>
</center>
  </MDBRow>
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " > 
   <p> Quelle est la stratégie que vous pensez mettre en    </p>  pour prendre une  part de ce marché ?
 
  </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <MDBTextarea
        type="textarea"
        label=""
        id="form11Name2"
        v-model="strategiep"
      />
    
    </MDBCol>
</center>
  </MDBRow>
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " > 
   <p> Quel sera votre modèle économique ? </p>
   
  </label>
 <MDBRow class="ms-5 ">
      <MDBCol  class="fs-5  ">
        <MDBRadio
        
      label="Modèle freemium "
      name="Modèle freemium"
      v-model="modeleco"
      value="Modèle freemium"
     
    />
      </MDBCol>
      <MDBCol sm="" class=" fs-5">
    <MDBRadio
      label="Modèle publicitaire"
      name="Modèle publicitaire"
      v-model="modeleco"
      value="Modèle publicitaire"
     
      invalidFeedback="More example invalid feedback text"
      wrapperClass="mb-3"
    />
      </MDBCol>
      <MDBCol sm="" class="fs-5 ">
    <MDBRadio
      label="Modèle de vente directe"
      name="Modèle de vente directe"
      v-model="modeleco"
      value="Modele de vente directe"
     
    />
      </MDBCol>
    <MDBCol sm="" class=" fs-5">
    <MDBRadio
      label=" Modèle de d´abonnement"
      name="Modele d´abonnement"
      v-model="modeleco"
      value="Modèle d´abonnement"
     
      
      wrapperClass="mb-3"
    />
    </MDBCol>
    <MDBCol sm="" class=" fs-5">
    <MDBRadio
      label="Modèle de commissionnement "
      name="Modèle de commissionnement"
      v-model="modeleco"
      value="Modèle de commissionnement3"
     
      invalidFeedback="More example invalid feedback text"
      wrapperClass="mb-3"
    />
    </MDBCol>
 </MDBRow>
</center>
  </MDBRow>
 
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " > À combien estimez-vous le côut de lancement de votre projet ? (En FCFA)   </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <input type="text" v-model="cout" class="form-control" />
    
    </MDBCol>
</center>
  </MDBRow>
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-3 text-center " > Quel chiffre d´affaire pensez-vous faire  d´ici 1an ?   </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <input type="text" v-model="chiffrea" class="form-control" />
    
    </MDBCol>
</center>
  </MDBRow>
  <MDBRow class="">
    <center>
   <label class="fs-4 mt-5 mb-2 text-center " > Quels sont les risques liés à la mise en ouevre de votre projet
    <p> et comment pensez-vous  y remédier  ? </p> </label>

      <MDBCol sm="5" class="ms-5 mt-40 ">
        <MDBTextarea
        type="textarea"
        label=""
        id="form11Name2"
        v-model="risque"
      />
    
    </MDBCol>
    <button type="submit" class="btn btn-danger mt-5">SOUMETTRE</button>
</center>
  </MDBRow> 
  
  </form>
  <pied class="mt-5"/>

  </div>
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
