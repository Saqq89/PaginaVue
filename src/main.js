import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUZhXoKyqzA7OMWGIKkx6IKy_2Cp0WpSg",
  authDomain: "paginasaqq.firebaseapp.com",
  projectId: "paginasaqq",
  storageBucket: "paginasaqq.appspot.com",
  messagingSenderId: "518387442861",
  appId: "1:518387442861:web:3525bde2d386fc94519224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);