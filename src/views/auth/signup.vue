    <template>
      <tete/>
      <section class="" style="background-color:rgb(167, 164, 164) ;heigth:100% ">
  <div class="container py-3  h-200">
    <div class="row d-flex justify-content-center  h-400">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-9-strong" style=" ">
          <div class="card-body p-5">
<form @submit.prevent="submitForm">
            <h3 class="mb-5 text-center"> Rejoignez-nous sur KOUÈ-MÌTÒN ! </h3>

            <div class=" mb-4 a">
              <label class="form-label" for="typePasswordX-2">Nom</label>

              <input type="text" id="typePasswordX-2" v-model="nom" class="form-control form-control-lg" />
            </div>

            <div class=" mb-4">
              <label class="form-label" for="typePasswordX-2">Prénom </label>

              <input type="text" id="typePasswordX-2" v-model="prenom" class="form-control form-control-lg" />
            </div>
            <div class=" mb-4">
              <label class="form-label" for="typePasswordX-2"> Date de naissance  </label>
           <input type="date" id="typePasswordX-2" v-model="datenaiss" class="form-control form-control-lg" />
            </div>

            <div class=" mb-4">
              <label class="form-label" for="typeEmailX-2">Email</label>
              <input type="email" id="typeEmailX-2" v-model="email" class="form-control form-control-lg" />
            </div>


            <div class=" mb-4">
              <label class="form-label" for="typePasswordX-2">Mot de passe</label>
              <input type="password" id="typePasswordX-2" v-model="password" class="form-control form-control-lg" />
            </div>

            <!-- Checkbox -->
            <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Se souvenir de son mot de passe</label>
            </div>

            <button class="btn btn-primary btn-lg btn-block" type="submit">Inscription</button>
</form>
            <hr class="my-4">

           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </template>
    
    <script >
import axios from 'axios' ;
import tete from '../../components/tete.vue' ;
export default{
  components:{
tete
  },
  data () {
    return{
nom:'',
prenom:'',
datenaiss:'',
email:'',
password:''

    }
  },
  methods:{
    submitForm(){
      axios.post('https://memomry-back-serv.onrender.com/auth/signup',{
        nom:this.nom,
         prenom:this.prenom,
        datenaiss: this.datenaiss,
        email :this.email,
        password:this.password
      })
      .then(response => {
        console.log(response.data);
        alert(response.data.message);

        this.$router.push('/login')
      })
      .catch(error => {
        console.log(error);
        alert('Désolé ce mail existe/mot de passe existe déjà');
      });
    }

  }
}

    </script>
    
    <style>
    
    </style>