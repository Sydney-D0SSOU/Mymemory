<template>
    <!-- Footer -->
    <MDBFooter class=".bg-dark.bg-gradient" bg="secondary" :text="['center', 'white']">
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
        <section class="">
          <form action="">
            <!--Grid row-->
            <MDBRow center class="d-flex">
              <!--Grid column-->
              <MDBCol auto>
                <p class="pt-2">
                  <strong>Rejoindre notre newsletter</strong>
                </p>
              </MDBCol>
              <!--Grid column-->
              <!--Grid column-->
              <MDBCol md="5" col="12">
                <!-- Email input -->
                <MDBInput
                  white
                  type="email"
                  id="form5Example2"
                  label="Email address"
                  wrapperClass="mb-4"
                />
              </MDBCol>
              <!--Grid column-->
              <!--Grid column-->
              <MDBCol auto>
                <!-- Submit button -->

              </MDBCol>
              <!--Grid column-->
            </MDBRow>
            <!--Grid row-->
          </form>
        </section>
        <!-- Section: Form -->
        <!-- Section: Text -->
        <section class="mb-4">
          <p>
           
          </p>
        </section>
        <!-- Section: Text -->
        <!-- Section: Links -->
        <section class="">
          <!--Grid row-->
          <MDBRow>
            <!--Grid column-->
            <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 4</a>
                </li>
              </ul>
            </MDBCol>
            <!--Grid column-->
            <!--Grid column-->
            <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 4</a>
                </li>
              </ul>
            </MDBCol>
            <!--Grid column-->
            <!--Grid column-->
            <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 4</a>
                </li>
              </ul>
            </MDBCol>
            <!--Grid column-->
            <!--Grid column-->
            <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">Link 1</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 2</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 3</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Link 4</a>
                </li>
              </ul>
            </MDBCol>
            <!--Grid column-->
          </MDBRow>
          <!--Grid row-->
        </section>
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