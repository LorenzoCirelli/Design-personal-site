<template>
<div class=" w-100 h-100 position-absolute d-flex flex-column w-100 text-white font-f p-5 align-items-center justify-content-center p-5 sfondo_schede">
    <div class="w-50 h-75 rounded ombre d-flex flex-column text-white font-f p-5 align-items-start justify-content-end sfondo_arancio" data-aos="zoom-in-up">
       <h1>{{ lista.nome }}</h1>
    </div>
    <button class="btn_1 rounded-circle btn p-2" @click.prevent="avanti('a')" v-if="avanti">
        <span class="material-symbols-outlined">
    arrow_forward_ios
    </span>
    </button>
    <button class="btn_2 rounded-circle btn p-2" @click.prevent="avanti('i')" v-if="indietro">
        <span class="material-symbols-outlined">
    arrow_back_ios
    </span>
    </button>
</div>
</template>
<script>
export default{
    created(){
        this.avanti("a");
    },
    data(){
        return{
            btn:{
                avanti:true,
                indietro:false,
            },
            click:-1,
            lista:[],
            lista_row:[
                {
                    nome:"Progetti",
                    url:"progetti"
                },
                {
                    nome:"Esperienza",
                    url:"esperienza"
                },
                {
                    nome:"Formazione",
                    url:"scuola"
                },
        ],
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

        }
    }
}
</script>
<style>
.sfondo_schede{
    background-color: #219ebc;
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
</style>