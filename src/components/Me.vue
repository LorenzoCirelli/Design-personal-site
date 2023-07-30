<template >
        <div class="d-flex align-items-center flex-column h-100 w-100" id="gg">
            
        <img src="../assets/io.png" class="w-50 rounded-circle iobg">
        <br>

        <button type="button" class=" mb-auto p-2 btn btn-warning d-flex flex-row" :style="pos1()">
                <h3> Scopri <br>
                        <span class="material-symbols-outlined">
                        arrow_forward
                        </span>
                </h3>
        </button>
        <p id="mouse-pos">Mouse position: ({{ mousePos.x }}, {{ mousePos.y }})</p>

        </div>
</template>
<script>
export default{
        data(){
                return{
                        mousePos: { x: undefined, y: undefined },
                }
        },
        mounted() {
    gg.addEventListener('mousemove', this.updateMousePosition);
  },
  beforeUnmount() {
    gg.removeEventListener('mousemove', this.updateMousePosition);
  },
  methods: {
    updateMousePosition(event) {
      this.mousePos = { x: event.clientX, y: event.clientY };
    },
    pos1(){
        return{'position':'absolute', 'top':this.mousePos.y+"px", 'left':(this.mousePos.x/6)+"px"} 

    },
  },

}
</script>
<style>

</style>