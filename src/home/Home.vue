<template>
  <div>
    <div v-if="true" class="w-100 position-absolute h-100 d-flex bg1">
    <div class="d-flex flex-row w-100">
      <div class="col-md-6 d-flex align-items-center justify-content-center p-5 blu1">
         <Terminale :dati="anagrafica"></Terminale>
      </div>
      <div class="col-md-6 d-flex align-items-center justify-content-center p-2 blu1">
        <Me></Me>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Terminale from './components/Terminale.vue';
import Me from './components/Me.vue';


export default {
  name: 'App',
  components: {
    Terminale,
    Me
  },
  created() { // Definisci created come una funzione
    this.Info();
  },
  data(){
    return{
      anagrafica:{},
      caricati:false,
    }
  },
  methods:{
    async Info() {
        let res = await fetch('https://api.github.com/users/LorenzoCirelli');
        let data = await res.json();
        this.anagrafica = {"lavoro":data.company, "id":data.name};
        this.caricati = true;
      }
  }
}

</script>
<style>
.ombre{
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.spazi{
  padding:3px;
  margin: 3px;
  cursor: pointer;
}
.arancio>p{
  color:rgb(255, 255, 255);
}
.arancio{
  background-color: #1f1f1fca;
}
.blu1{
  background-color: #023047;
} 
</style>
