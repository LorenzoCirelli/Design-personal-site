<template>
<div class=" w-100 h-100 position-absolute d-flex flex-column w-100 text-white font-f p-5 align-items-center justify-content-center p-5 sfondo_schede">
    <div class="w-50 h-75  d-flex flex-column text-white font- justify-content-top bg-light rounded ombre">
            <div @click="apri(lista.url)" v-if="anima" class="w-100 h-90 rounded ombre d-flex flex-column text-white font-f p-5 align-items-start justify-content-end sfondo_arancio" data-aos="fade-down">
            <h1>{{ lista.nome }}</h1>
            </div>
    </div>
    <button class="btn_1 rounded-circle btn p-2 text-light" @click.prevent="avanti('a')" v-if="avanti_i">
        <span class="material-symbols-outlined">
    arrow_forward_ios
    </span>
    </button>
    <button class="btn_2 rounded-circle btn p-2 text-light" @click.prevent="avanti('i')" v-if="indietro_i">
        <span class="material-symbols-outlined">
    arrow_back_ios
    </span>
    </button>
    <span class="material-symbols-outlined planed">
    flight
    </span>

</div>

</template>
<script>

export default{
    created(){
        this.avanti("a");
    },
    data(){
        return{
            anima:true,
            click:-1,
            lista:[],
            lista_row:[
                {
                    nome:"Progetti",
                    url:"#/progetti"
                },
                {
                    nome:"Esperienza",
                    url:"#/esperienza"
                },
                {
                    nome:"Formazione",
                    url:"#/scuola"
                },
                {
                    nome:"Social",
                    url:"#/social"
                },
                {
                    nome:"Hobby",
                    url:"#/hobby"
                },
                {
                    nome:"Mezzi",
                    url:"#/mezzi"
                },
        ],
        avanti_i:true,
        indietro_i:false,
        }

    },
    methods:{
        avanti(i){
            
            if(i=="a"){
                
                this.click++;
                this.lista=this.lista_row[this.click];
            }else{

                this.click--;
                this.lista=this.lista_row[this.click];
                
            }

            
           if(this.click+1 >= this.lista_row.length){
            this.avanti_i = false;
           }else{
            this.avanti_i = true;
           }

            if(this.click >0){
            this.indietro_i = true;  
           }else{
            this.indietro_i = false; 
           }
        },
        apri(url){
            open(url);
        },
    }
}
</script>
<style>
.sfondo_schede{
    background-color: #023047;
}
.sfondo_arancio{
    background: #C04848;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #480048, #C04848);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #480048, #C04848); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.btn_1{
    position: fixed;
    right:10px;
}
.btn_2{
    position: fixed;
    left:10px;
}
.h-90{
    height: 95%;
}

.planed{
    transform: rotate(40deg);
    position: absolute;
    scale: 2;
    top:-10%;
    left:20%;
    animation: muovi 4s;
}
@keyframes muovi {
    from{ top:90%; left:-10%;};
    to{ top:10%; left:50%;};
}
</style>