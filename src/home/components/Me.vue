<template>
        <div class="d-flex flex-column w-100 text-white font-f p-5 align-items-center justify-content-center p-5">
            <h1 class="anima">Scopri di più</h1>
            <br>
            <br>
            <a href="#/scopri"><button type="button" class="btn btn-primary btn-lg">Scopri ora</button></a>
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
    typing 1.5s steps(40, end),
    blink-caret .60s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 84% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}
</style>