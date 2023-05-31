<template>
  <header>
    <nav>
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">À propos</a></li>
        <li><a href="#">Contact</a></li>
        <li v-if="!isAuthenticated"><a href="#">S'inscrire</a></li>
        <li v-if="!isAuthenticated"><a href="#">Se connecter</a></li>
        <li v-if="isAuthenticated"><a href="#">Mon compte</a></li>
        <li v-if="isAuthenticated"><a href="#">Déconnexion</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    isAuthenticated: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style>
/* Ajoutez votre style CSS personnalisé ici */
</style>
