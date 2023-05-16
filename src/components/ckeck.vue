<template>
  <div class="" v-if="posts && posts.length">
  <div class =" ">
 <MDBTable class="align-middle mb-0 bg-white" >
   <thead class="bg-light">
     <tr>
       <th>Projet</th>
       <th>Titre</th>
       <th>Business</th>
       <th>Modèle</th>
       <th>Coût</th>
     </tr>
   </thead>
   <tbody v-for="post of posts">
     <tr>
       <td>
         <div class="d-flex align-items-center">
           <img :src= "post.files" alt="" style="width: 45px; height: 45px"
             class="rounded-circle" />
           <div class="ms-3">
             <p class="fw-bold mb-1">John Doe</p>
             <p class="text-muted mb-0">{{ post._id }}</p>
           </div>
         </div>
       </td>
       <td>
         <p class="fw-normal mb-1">{{ post.titre }} </p>
         <p class="text-muted mb-0">IT department</p>
       </td>
       <td>
         <MDBBadge badge="success" pill class="d-inline">{{ post.business }}</MDBBadge>
       </td>
       <td>{{ post.modeleco }}</td>
       <td>
         <MDBBtn color="link" size="sm" rounded>
           {{ post.cout }}
         </MDBBtn>
       </td>
     </tr>
     
   </tbody>
 </MDBTable>
 </div>
 </div>
</template>
<script>
import axios  from 'axios';
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