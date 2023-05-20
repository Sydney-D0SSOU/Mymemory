<template>
 
    <sidebar/>
 
   
    
<section class="vh-100" style="background-color:rgb(212, 236, 245) ; height:100% ;" >
<div class="container py-5  h-200">
 <div class="row d-flex justify-content-center align-items-center h-400">
   <div class="col-12 col-md-8 col-lg-6 col-xl-5">
     <div class="card shadow-9-strong" style=" ">
       <div class="card-body p-5 text-center">
         <form @submit.prevent="submitForm">
         <h3 class="mb-5">Se connecter</h3>

         <div class=" mb-4">
          <label class="form-label" for="typeEmailX-2">Email</label>
          <input type="email" id="typeEmailX-2"   v-model="email" class="form-control form-control-lg" />
         </div>

         <div class="mb-4">
          <label class="form-label" for="typePasswordX-2">Mot de passe</label>
          <input type="password" id="typePasswordX-2" class="form-control form-control-lg"  v-model="password" />
         </div>

         <!-- Checkbox -->
         <div class="form-check d-flex justify-content-start mb-4">
           <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
           <label class="form-check-label" for="form1Example3"> Se souvenir de son mot de passe</label>
         </div>

         <button class="btn btn-primary btn-lg btn-block" type="submit">connexion</button>
         </form>
         <hr class="my-4">

         <button class="btn btn-lg btn-block btn-primary" style="background-color: #dd4b39;"
           type="submit"><i class="fab fa-google me-2"></i> Se connecter avec  google</button>
         <button class="btn btn-lg btn-block btn-primary mb-2" style="background-color: #3b5998;"
           type="submit"><i class="fab fa-facebook-f me-2"></i>Se connecter avec facebook </button>

       </div>
     </div>
   </div>
 </div>
</div>
</section>
</template>

<script>
import axios from 'axios';
import sidebar from "../../components/sidebar.vue";
export default{
  components:{
    sidebar
  },
data () {
 return{
email:'',
password:''

 }
},
methods:{
 submitForm(){
  
   axios.post('http://localhost:3004/auth/login',{
    
     email :this.email,
     password:this.password
   })
   .then(response => {
    alert('Authentification avec succès !');
     console.log(response.data.token);
     localStorage.setItem("Mon token",response.data.token)
     this.$router.push('/admin')
   })
   .catch(error => {
    alert('Identifiants incorrect !');
     console.log(error);
   });
 
 }

}
}
</script>

<style>

</style>