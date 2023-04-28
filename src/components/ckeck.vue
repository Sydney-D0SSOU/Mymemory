<template>
    <MDBSwitch
      label="VALIDER"
      v-model="switch1"
    />
    <MDBSwitch
      label="REFUSER"
      v-model="switch2"
    />
   
  </template>
  <script setup lang="ts">
  import { MDBSwitch } from "mdb-vue-ui-kit";
  import { ref } from "vue";

  const switch1 = ref(false);
  const switch2 = ref(false);
  
</script>