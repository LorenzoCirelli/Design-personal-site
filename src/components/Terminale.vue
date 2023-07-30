<template>
<div class="terminalebg w-100 rounded ombre text-capitalize" data-aos="fade-up">
    <div class="bg-danger w-100 d-flex justify-content-end p-2 rounded">
        <span class="material-symbols-outlined bg-white rounded-circle spazi">
        remove
        </span>
        <span class="material-symbols-outlined bg-white rounded-circle spazi">
        check_box_outline_blank
        </span>
        <span class="material-symbols-outlined bg-white rounded-circle spazi">
        close
        </span>
    </div>
<div class=" p-5 text-white arancio">
    <p>Nome</p>
    <h3>{{ str_dati.nome }}</h3>
    <p>Cognome</p>
    <h3>{{ str_dati.cognome }}</h3>
    <p>Età</p>
    <h3>{{ str_dati.eta }} anni</h3>
    <p>Lavoro</p>
    <h3>{{ str_dati.lavoro }}</h3>
</div>
</div>
</template>
<script>

export default{
    props:['dati'],
    data(){
        return{
            str_dati:{},
        }
    },
    watch:{
        dati(){
            if(this.dati.lavoro==null){
                var lavoro = "inoccupato";
            }else{
                var lavoro = this.dati.lavoro;
            }

            var id = this.dati.id.split(' ');
            
            
           this.str_dati = {
            "lavoro": lavoro,
            "nome": id[0],
            "cognome": id[1],
            "eta": this.age(),
           }
        }
    },
    methods:{
        age() {
            var dob = new Date("08/03/2004");  
      
    
       
    var year = (new Date(Date.now() - dob.getTime())).getUTCFullYear();  
      
 
    var age = Math.abs(year - 1970);  
      
   return age;
    },
    }
}
</script>
<style>
.terminalebg{
  opacity: 1;
  background-color: black;
  background-image: url('../assets/terminalebg.png');
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
}
</style>