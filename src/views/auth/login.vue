<template>
 
    <tete  @deconnect="handleLogout" :isAuthenticated="isAuthenticated"/>
 
  <section class="vh-100" style="background-color:rgb(186, 183, 183) ;">
  <div class="container py-5  h-200">
    <div class="row d-flex justify-content-center align-items-center h-400">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-9-strong" style=" ">
          <div class="card-body p-5 ">
            <form @submit.prevent="submitForm">
            <h3 class="mb-5" >Se connecter</h3>

            <div class=" mb-4">
              <label class="form-label" >Email</label>
              <input type="email" id="typeEmailX-2"   v-model="email" class="form-control form-control-lg" />
            </div>

            <div class=" mb-4">
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

           

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios';
import tete from "../../components/tete.vue";
export default{
  components:{
    tete

  },
  data () {
    return{
email:'',
password:'',
isAuthenticated : false
    }
  },
  methods:{

    submitForm(){

      axios.post('https://memomry-back-serv.onrender.com/auth/login',{
       
        email :this.email,
        password:this.password,
      })
      .then(response => {
        // Après une authentification réussie
        localStorage.setItem('isAuthenticated', true);

        alert(response.data.message);
        console.log(response.data);
     localStorage.setItem("Montoken",response.data.token)
this.$router.push('/myproject')
      })
      .catch(error => {
        alert('identifiants incorrect');
        console.log(error);
      });
      
  
    },
    created() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    this.isAuthenticated = isAuthenticated === 'true'; // Convertir en booléen
  },
 beforeMount() {
  const token = localStorage.getItem('token');
  if (token) {
    this.isAuthenticated = true;
  }
},
handleLogout(){
        // Logique de déconnexion
      // Mettez à jour isAuthenticated à false et effectuez d'autres tâches nécessaires (par exemple, supprimez le token, redirigez l'utilisateur, etc.)
      this.isAuthenticated = false;
      localStorage.removeItem('Montoken'); // Supprimez le token du localStorage ou du cookie sécurisé

}
  }
}
</script>

<style>

</style>