<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="./icons/hogar.png" alt="" width="30" height="24">
    </a>
    <a class="navbar-brand" href="#">SAQQ</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#inicio">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#sobrevue">Sobre Vue</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#contacto">Contactame</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<section class="banner" id="inicio">
    <div class="banner-main">
        <div class="container">
            <div class="text-bg relative">
                <h1 class="text-light">
                  VUE
                  <br>
                  <span class="perfect">Programacion para internet</span>
                  <br>
                  Bienvenidos
                </h1>
            </div>
        </div>
    </div>
</section>
<div class="container-fluid" id="sobrevue">
  <div>
    <div class="text-box">
      <div class="box">
        <i>
            <img src="./icons/vueicon.png">
        </i>
        <h3>Conoce VUE</h3><br>
        <p>Vue (pronunciado /vjuː/, como view) es un framework progresivo
          para construir interfaces de usuario. A diferencia de otros frameworks monolíticos, 
          Vue está diseñado desde cero para ser utilizado incrementalmente. La librería central 
          está enfocada solo en la capa de visualización, y es fácil de utilizar e integrar con otras 
          librerías o proyectos existentes. Por otro lado, Vue también es perfectamente capaz de impulsar 
          sofisticadas Single-Page Applications cuando se utiliza en combinación con herramientas modernas 
          y librerías de apoyo.
        </p><br>
        <a href="https://es.vuejs.org/v2/guide/">Conoce MAS</a>
      </div>
    </div>
  </div>
</div>
<div class="footer" id="contacto">
  <div class="container">
    <div class="row">
      <div class="address">
        <h3 class="text-light">Contactame</h3>
        <ul>
          <li>
            <img src="./icons/1.png" alt="icon">
            <label for="" class="text-light">Jalisco, Mexico</label>
          </li>
          <li>
            <img src="./icons/2.png" alt="icon">
            <label for="" class="text-light">(+52) 3313048101</label>
          </li>
          <li>
            <img src="./icons/3.png" alt="">
            <label for="" class="text-light">Sergio.skate89@gmail.com</label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
