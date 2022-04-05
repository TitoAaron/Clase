// Implementar solución aquí


Vue.createApp({
    data(){
        return{
            bgColor: '#FFFFF'
        }
    },methods:{
        cambiarColor(){
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.bgColor = '#' + randomColor;
        }
    }
}).mount('#app')