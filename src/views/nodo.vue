<template>
    <navbar/>
    <center>
  <div v-if="post && posts.length">
   <div class ="r ">
    
  {{ posts.titre}}
  
   <hr>
   <check/>
   <btnsup1 class="mt-5"/> 
   
   </div>
   </div>
  </center>
  </template>
  
  <script>
  import check from '../components/ckeck.vue';
  import navbar from '../components/navbar.vue';
  import btnsup1 from '../components/btnsup1.vue';
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
    axios.get(`http://localhost:3004/pro/all`)
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
      margin-left:30px ;
      padding:15px ;
      overflow: auto;
      border-radius: 10px;
  }
  </style>