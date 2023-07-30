<template>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      
  <router-view></router-view>
</template>

<script>
// Importa AOS al di fuori del componente Vue
import AOS from 'aos';
import 'aos/dist/aos.css';
//importa bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default {
  name: 'Home',
  components: {

  },
  created() { // Definisci created come una funzione
    AOS.init(); // Inizializza AOS durante la creazione del componente
   
  },
  
}

</script>