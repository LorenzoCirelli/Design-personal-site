<template>
<div>
    
</div>

</template>
<script>
export default{
    created(){
        this.RetriveApi();
    },
    data(){
        return{
            progetti:[],
        }
    },
    methods:{
        async RetriveApi(){
           const repo = await fetch('https://api.github.com/users/LorenzoCirelli/repos');
            const data = await repo.json();
           data.forEach(element => {
            this.progetti.push({"nome":element.name,"linguaggio":element.language,"link":element.svn_url});
           });
           sessionStorage.setItem("repo",this.progetti);
        }
    },
}
</script>
<style>
</style>