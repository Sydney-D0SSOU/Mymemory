<template>
    <div class="sidebar">
      <ul class="sidebar-menu">
        <li class="sidebar-header">KOUÈ-MÌTÓN</li>
        <li><a href="#/login1" to="/login"><i class="fas fa-users"></i> S´authentifier</a></li>
        <li class="sidebar-header">Projets</li>
        <li><a href="#/admin"><i class="fas fa-list"></i> Liste des projets</a></li>
        <li><a href="#"><i class="fas fa-plus"></i> Ajouter un projet</a></li>
        <li class="sidebar-header">Statistiques</li>
        <li><a href="#"><i class="fas fa-chart-bar"></i> Ventes</a></li>
        <li><a href="#"><i class="fas fa-chart-line"></i> Trafic</a></li>
      </ul>
    </div>
  </template>
  
  <style>
  .sidebar {
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #7a7979;
    color: #fff;
  }
  
  .sidebar-menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .sidebar-header {
    background-color: rgb(179, 177, 176);
    padding: 10px;
    font-weight: bold;
  }
  
  .sidebar-menu li {
    padding: 8px 15px;
  }
  
  .sidebar-menu li a {
    text-decoration: none;
    color: #fcf9f9;
    display: flex;
    align-items: center;
  }
  
  .sidebar-menu li i {
    margin-right: 10px;
  }
  
  .sidebar-menu li:hover {
    background-color:rgb(225, 229, 233);
  }
  
  .sidebar-menu li:hover a {
    color: #b6acac;
  }
  </style>
  