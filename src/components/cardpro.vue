<template>

    <div class="row" id="j" v-if="posts && posts.length">
 <div class =" col-3 " v-for="post of posts">
  
    <div class="card shadow-lg "
     style="width: 18rem; margin-top:50px  ;">
  <img  :src= "post.files" id="p1" class="object-fit-cover border rounded"   alt=""/>
  <div class="card-body">
    <h5 class="card-title">{{ post.titre }}</h5>
    <p class="card-text">Nous offrons un: {{ post.business }}</p>
  </div>
  <ul class="list-group list-group-light list-group-small">
    <li class="list-group-item px-4">{{ post.modeleco }}</li>
    <li class="list-group-item px-4">{{ post.descriptionb }}</li>
    <li class="list-group-item px-4"> Coût de lancement : {{ post.cout }} 
    </li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link"></a>
    
    <button type="button" @click="showDetails(post._id)"  class="btn btn-success"> voir plus </button>
    
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
    posts: [],
    errors: []
  }
},

// Fetches posts when the component is created.
mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const token = localStorage.getItem("Mon token") ;

        const response = await axios.get('http://localhost:3004/pro/all',
        {
   headers: {
     Authorization: `Bearer ${token}`,
   },
  });
        this.posts = response.data;
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