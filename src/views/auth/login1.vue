<template>
  <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form @submit.prevent="submitForm">
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb- me-  ">
              BIENVENUE L´ADMINISTRATION DE KOUÈ-MÍTON </p>

          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Authentification</p>
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" v-model="email" />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" v-model="password" />
            <label class="form-label" for="form3Example4">Mot de passe</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <!-- Checkbox -->
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Se souvenir de moi
              </label>
            </div>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="submit" class="btn btn-success btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Connexion</button>
            <p class="small fw-bold mt-2 pt-1 mb-0"> Vous n´avez pas de compte ? <a href="#!"
                class="link-danger"> Veillez-vous rapprochez du Responsable </a></p>
          </div>

        </form>
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
  
   axios.post('http://localhost:3004/auth1/login',{
    
     email :this.email,
     password:this.password
   })
   .then(response => {
    alert('Authentification avec succès !');
     console.log(response.data.token);
     localStorage.setItem("admintoken",response.data.token)
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
.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}
.h-custom {
height: calc(100% - 73px);
}
@media (max-width: 450px) {
.h-custom {
height: 100%;
}
}
</style>