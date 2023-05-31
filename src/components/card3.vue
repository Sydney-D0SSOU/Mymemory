<template>
    <div class="row">
  
  <div v-if="post">
      <div class="card shadow-lg" style="width: 18rem; margin-top:px ;">
    <img  :src= "post.files" id="p1" class="object-fit-cover border rounded"   alt=""/>
    <div class="card-body">
      <h5 class="card-title">{{ post.titre }}</h5>
      <p class="card-text">Nous offrons un: {{ post.business }}</p>
    </div>
    <ul class="list-group list-group-light list-group-small">
      <li class="list-group-item px-4">{{ post.modeleco }}</li>
      <li class="list-group-item px-4">{{  }}</li>
      <li class="list-group-item px-4"> Coût de lancement : {{ post.cout }} 
      </li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link"></a>
      
      <button type="button" @click="showDetails(post._id)" class="btn btn-outline-success"> voir plus </button>
      
    </div>
  </div>
  
  </div> 
    </div>
   
    
    </template> 
    <script>
    import { MDBCard,
       MDBCardBody, 
       MDBCardTitle,
        MDBCardText, 
        MDBCardLink,
         MDBCardImg, 
         MDBCardGroup,  }
     from "mdb-vue-ui-kit";
     import { ref } from 'vue';
     import axios from 'axios';
  
     export default {
      components:{
          MDBCardBody, 
       MDBCardTitle,
        MDBCardText, 
        MDBCardLink,
         MDBCardImg, 
         MDBCardGroup,
  
      },
      data() {
    return {
      post: [],
      validPost :[]
    }
  },
  mounted() {
        this.fetchUser();
      },
      methods: {
        async fetchUser() {
          try {
            const postId = this.$route.params.id;
            const response = await fetch(`http://localhost:3004/pro/oneuser/${'646b7a2993e5b394eca6215d'}` );
            const data = await response.json();
            this.post = data;
          } catch (error) {
            console.error(error);
          }
        },
        showDetails(postId) {
        this.$router.push(`/detailspro/${postId}`);
      },
      },
     }
  </script>
  <style>
  #p1{
      width: 288px;
      height: 200px;
  };
  
  </style>