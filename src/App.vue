<script>
import { 
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
  } from "firebase/auth";

export default {
  name: 'Navbar',
   data() {
        return {
            email: '',
            password: '',
            repassword: '',
            errorMessage: ''
        };
    },
   methods: {
     register(email, password) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('¡Registrado!');
        })
        .catch((error) => {
            const errorCode = error.code;
            this.errorMessage = error.message;
            alert(this.errorMessage);
            // ..
        });
      },        
     login( email, password ) {
       const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('¡Sesión iniciada!');
            // Signed in
            const user = userCredential.user;
            // ...
            })
        .catch((error) => {
        const errorCode = error.code;
        this.errorMessage = error.message;
        alert(this.errorMessage);
        });
        },
     signout () {
       const auth = getAuth();
      signOut(auth).then(() => {
        alert('¡Sesión cerrada! Inicia sesión.');
      }).catch((error) => {
      });
     }
   }
}
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
    <!-- Después de la etiqueta </form> --> 
 <!-- Iniciar sesión --> 
<button type="button" class="btn btn-outline-primary mx-2" 
  data-bs-toggle="modal" 
  data-bs-target="#login">
  Log in
</button> 
 <!-- Cerrar sesión -->   
<button class="btn btn-outline-danger me-2"
  data-bs-toggle="modal" 
  data-bs-target="#login"
  @click="signout">
  Log out
</button>
 <!-- Regístrate --> 
<button type="button" 
  class="btn btn-outline-light" 
  data-bs-toggle="modal" 
  data-bs-target="#registro"><!-- inicia modal con id="registro" --> 
  Regístrate
</button>
  </div>
</nav>
<!-- //// Modal - Registrarse //// -->
<div class="modal fade" id="registro">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Regístrate</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="register( this.email, this.password )">  
           <!-- CORREO -->
          <div class="input-group mb-3">
          <span class="input-group-text">Correo</span>
          <input v-model="email" 
                  type="email"
                  required="true"
                  class="form-control">
          </div>
          <!-- PASSWORD -->
          <div class="input-group mb-3">
          <span class="input-group-text">Password</span>
          <input v-model="password" 
                  type="password"
                  required="true" 
                  class="form-control">
          </div>
          <!-- REPASSWORD -->
          <div class="input-group mb-3">
          <span class="input-group-text">Repite Password</span>
          <input v-model="repassword" 
                  type="password"
                  required="true" 
                  class="form-control">
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- //// Modal - Iniciar sesión //// -->
<div class="modal fade" id="login">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Inicia de sesión</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="login( this.email, this.password )">
          <!-- CORREO --> 
          <div class="input-group mb-3">
          <span class="input-group-text">Correo</span>
          <input v-model="email" 
                  type="email"
                  required="true"
                  class="form-control">
          </div>
          <!-- PASSWORD --> 
          <div class="input-group mb-3">
          <span class="input-group-text">Password</span>
          <input v-model="password" 
                  type="password"
                  required="true" 
                  class="form-control">
          </div>
          <div class="d-grid gap-2">
            <button type="submit" 
              class="btn btn-primary" 
              data-bs-dismiss="modal"><!-- Cierra el modal --> 
              Iniciar sesión
            </button>
          </div>
          </form>
      </div>
    </div>
  </div>
</div>
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
