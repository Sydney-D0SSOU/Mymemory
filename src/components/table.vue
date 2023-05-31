<template>
  <div class="" v-if="posts && posts.length">
    <div>
 <MDBTable class="align-middle mb-0 bg-white" >
   <thead class="bg-light">
     <tr>
       <th>Projet</th>
       <th>Titre</th>
       <th>Business</th>
       <th>État</th>
       <th>Coût</th>
       <th>Date </th>
       <th>Action</th>
       
     </tr>
   </thead>
   <tbody v-for="post of posts" :key="post._id">
    
     <tr>
       <td>
         <div class="d-flex align-items-center">
           <img :src= "post.files" alt="" style="width: 55px; height: 55px"
             class="rounded-circle" />
           <div class="ms-3">
             <p class="fw-bold mb-1"> Auteur:{{ post.emailUtilisateur}} </p>
             <p class="text-muted mb-0">id:{{ post._id }}</p>
           </div>
         </div>
       </td>
       <td>
         <p class="fw-normal mb-1">{{ post.titre }} </p>
         
       </td>
       <td>
         <MDBBadge badge="success" pill class="d-inline">{{ post.business }}</MDBBadge>
       </td>
       <td>{{ post.etat }}</td>
       <td>
        
           {{ post.cout }}

       </td>
       <td>
         <span>
           {{ post.createdAt }}
         </span>
       </td>
       <td>
        <button @click="showDetails(post._id)" class="btn btn-warning">Voir</button>

       </td>

     </tr>
     
   </tbody>
 </MDBTable>
 </div>
  </div>

</template>

<script>
import axios from 'axios';
import {
   MDBTable,
   MDBBtn,
   MDBBadge
 } from 'mdb-vue-ui-kit';


export default {
  components: {
     MDBTable,
     MDBBtn,
     MDBBadge
   },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const token = localStorage.getItem("admintoken") ;

        const response = await axios.get('http://localhost:3004/pro/all1',
        {
   headers: {
     Authorization: `Bearer ${token}`
   },
  });
        this.posts = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    showDetails(postId) {
      this.$router.push(`/details/${postId}`);
    },
  },
};
</script>

<style>
.container {
  margin-top: 50px;
}
</style>
