<template>
 <button type="button" class="btn btn-info btn-lg"  @click="changer">Découvrir d'autres projets </button> 
  </template>
  <script >
  export default{
    methods :{
    changer(){
      this.$router.push('/theproject')
    },
  }
  }


</script>