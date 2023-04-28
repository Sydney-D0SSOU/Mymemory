<template>
    <MDBCard style="width: 18rem">
      <MDBCardImg top src="https://th.bing.com/th/id/R.877c45a72900840e0a75ef4d5cfcf0e6?rik=aqjDVL0W9Sx63A&riu=http%3a%2f%2fecoledecornillestaubin.fr%2fwp-content%2fuploads%2f2018%2f02%2fIMG_2570.jpg&ehk=skHxF8vVULppPYgo%2bwTe907JUd0GPlzFFQnAEFgKTzY%3d&risl=&pid=ImgRaw&r=0" alt="..."/>
      <MDBCardBody>
        <MDBCardTitle>Musi'kids</MDBCardTitle>
        <MDBCardText>
         Mise en place d´un centre de formation d´apprentissage du violon 
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Ganhi</MDBListGroupItem>
        <MDBListGroupItem>cotonou</MDBListGroupItem>
        <MDBListGroupItem>Missébo</MDBListGroupItem>
      </MDBListGroup>
      <MDBCardBody>
        <MDBCardLink href="#">En savoir plus </MDBCardLink>
        <MDBCardLink href="#">Another link</MDBCardLink>
      </MDBCardBody>
    </MDBCard>
  </template>
  <script setup lang="ts">
  import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBCardImg, MDBCardGroup} from "mdb-vue-ui-kit";
</script>