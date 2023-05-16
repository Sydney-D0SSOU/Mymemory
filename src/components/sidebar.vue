<template>
    <div class="sidebar">
      <ul class="sidebar-menu">
        <li class="sidebar-header">KOUÈ-MÌTÓN</li>
        <li><a href="#"><i class="fas fa-tachometer-alt"></i> Tableau de bord</a></li>
        <li><a href="#/login1" to="/login"><i class="fas fa-users"></i> S´authentifier</a></li>
        <li><a href="#"><i class="fas fa-cog"></i> Paramètres</a></li>
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
    background-color: #4e94d4;
    color: #fff;
  }
  
  .sidebar-menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .sidebar-header {
    background-color: #3687c8;
    padding: 10px;
    font-weight: bold;
  }
  
  .sidebar-menu li {
    padding: 8px 15px;
  }
  
  .sidebar-menu li a {
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
  }
  
  .sidebar-menu li i {
    margin-right: 10px;
  }
  
  .sidebar-menu li:hover {
    background-color: #3687c8;
  }
  
  .sidebar-menu li:hover a {
    color: #fff;
  }
  </style>
  