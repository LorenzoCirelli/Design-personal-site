<template>
        <div class="d-flex flex-column w-100 text-white font-f p-5 align-items-center justify-content-center p-5">
            <h1 class="anima">Scopri di più</h1>
            <br>
            <br>
            <a href="#/scopri"><button type="button" class="btn btn-primary btn-lg">Scopri ora</button></a>
            <div class="linea"></div>
        </div>
</template>
<script>
export default{}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
.font_f{
        font-family: 'Montserrat', sans-serif;
}
.font-f>h1{
        font-size: 500%;
        font-weight: bolder;
}
.anima{
  overflow: hidden; 
  border-right: .15em solid orange; 
  white-space: nowrap; 
  margin: 0 auto;
  letter-spacing: 2px; 
  animation: 
    scrivo 1.5s steps(40, end),
    lineao .70s step-end infinite;
}

@keyframes scrivo {
  from { width: 0 }
  to { width: 84% }
}


@keyframes lineao {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}
.linea{
  background-color: aliceblue;
  position: absolute;
  width:20px;
  height:0px;
  animation: 1.5s lineare;
  top:63.5%;
  opacity: 0.5;
}
@keyframes lineare {
  from{
    height:500px;
    top:75%
  }
  to{
    height:0px;
  }
}
</style>