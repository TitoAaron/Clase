
<script>
export default {
    props:["contador"],
    data(){
        return{
            cargas : this.contador,
            isOn: false
        }
    },methods: {
        aumentarContador(){
            if(this.cargas != 0){
               this.cargas--;
            }
            else 
                this.isOn = true;
        }
    }
}
</script>

<template>
    <div @click="aumentarContador" class="bulb" :class="[isOn ? 'bulb-on' : 'bulb-off']">
       {{cargas}}
    </div>
</template>

<style>
.bulb-off {
    width: 265px;
    height: 400px;
    background: url('lightoff.png') no-repeat;
    margin: auto;
}

.bulb-on {
    width: 265px;
    height: 400px;
    background: url('lighton.png') no-repeat;
    ;
    margin: auto;
}
</style>