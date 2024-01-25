<template>
    <!-- Footer -->
    <MDBFooter class=".bg-dark.bg-gradient" bg="black" :text="['center', 'white']">
      <!-- Grid container -->
      <MDBContainer class="p-4">
        <!-- Section: Social media -->
        <section class="mb-4">
          <!-- Facebook -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><MDBIcon iconStyle="fab" icon="facebook-f"
          /></a>
          <!-- Twitter -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><MDBIcon iconStyle="fab" icon="twitter"
          /></a>
          <!-- Google -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><MDBIcon iconStyle="fab" icon="google"
          /></a>
          <!-- Instagram -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><MDBIcon iconStyle="fab" icon="instagram"
          /></a>
          <!-- Linkedin -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><MDBIcon iconStyle="fab" icon="linkedin-in"
          /></a>
          <!-- Github -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><MDBIcon iconStyle="fab" icon="github"></MDBIcon
          ></a>
        </section>
        <!-- Section: Social media -->
        <!-- Section: Form -->
        <strong>Rejoindre notre newsletter</strong>
        <!-- Section: Links -->
      </MDBContainer>
      <!-- Grid container -->
      <!-- Copyright -->
      <div
        class="text-center p-3"
        style="background-color: rgba(164, 169, 174, 0.2)"
      >
        © 2023 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/"
          >KOUÈ-MÌTÒN.com</a
        >
      </div>
      <!-- Copyright -->
    </MDBFooter>
    <!-- Footer -->
  </template>
  <script>
  import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn
  } from 'mdb-vue-ui-kit';
  export default{
   
    components:{
      MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn
    }}
    
</script>