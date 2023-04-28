<template>
    <MDBCard style="width: 18rem">
      <MDBCardImg top src="https://th.bing.com/th/id/R.7301041d39977129a73b0a8c1c595c34?rik=fpJPhpuYLKW9Og&pid=ImgRaw&r=0" alt="..."/>
      <MDBCardBody>
        <MDBCardTitle>AGRO'FRIENDS</MDBCardTitle>
        <MDBCardText>
          Un projet des frère agronome de calavi pour remedier à la chereté des des 
          pommes de terres 
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Calavi</MDBListGroupItem>
        <MDBListGroupItem>Ouidah</MDBListGroupItem>
        <MDBListGroupItem>Zogbo</MDBListGroupItem>
      </MDBListGroup>
      <MDBCardBody>
        <MDBCardLink href="#">En savoir plus ...</MDBCardLink>
      
      </MDBCardBody>
    </MDBCard>
  </template>
  <script setup lang="ts">
  import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBCardImg, MDBCardGroup,  } from "mdb-vue-ui-kit";
</script>