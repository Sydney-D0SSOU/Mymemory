<template>
    <navbar/>
    
  <div class="" v-if="posts && posts.length">
   <div class =" r" v-for="post of posts">
    <div>
     <h3>PROJET :{{ post._id }}  </h3>
     <p><span><h4>Titre </h4></span> : {{ post.titre}} </p>
     <img :src= "post.files" id="h"/>
   <p><b> Nos objectifs sont </b> : {{ post.objectifs}} </p>
   <p><b class=""> Nous proposons un  </b> : {{ post.business}} </p> 
   <p><b>Description du produit </b> : {{ post.descriptionb}} </p>
   <p><b class=""> Concernant notre cible  </b> : {{ post.business}} </p> 
   <p><b>Nos concurrents immédiats sont  </b> : {{ post.descriptionb}} </p>
   <p><b class=""> Description des stratégies  </b> : {{ post.strategiec}} </p> 
   <p><b> Notre stratégie à nous sera   </b> : {{ post.strategiep}} </p>
   <p><b class=""> Modèle économique  </b> : {{ post.modeleco}} </p> 
   <p><b> Coût  </b> : {{ post.cout}} </p>
   <p><b> Chiffre d´affaire prévu d´ici 1ans   </b> : {{ post.chiffrea }} </p>
   <p><b> Risque  </b> : {{ post.risque}} </p>
  </div>
  
   <hr>
   <check class="Z"/>
   <btnsup1 class="mt-5"/> 
   
   
   </div>
   </div>
  
  </template>
  
  <script>
  import check from '../../components/ckeck.vue';
  import navbar from '../../components/navbar.vue';
  import btnsup1 from '../../components/btnsup1.vue';
  
  import axios from 'axios';
  
  export default {
    components: {
  navbar,
  check,
      btnsup1,
      },
      data() {
    return {
      posts: [],
      errors: []
    }
  },
  
  // Fetches posts when the component is created.
  created() {
    const token = localStorage.getItem("Mon token") ;
    axios.get(`http://localhost:3004/pro/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
  
      };
    
  
  </script>
  
  <style>
  .r {
      background-color: rgb(231, 239, 239);
      border:5px solid rgb(214, 182, 182);
      height: 500px;
      width:1500px ;
      margin-top:90px ;
      margin-bottom:10px ;
      margin-left:30px ;
      padding:15px ;
      overflow: auto;
      border-radius: 10px;
  
  }
  .Z{
    margin-top:3900px ;
  
  }
  #h{
    width: 1400px;
    height: 500px;
    margin-bottom:30px ;
  }
  </style>