Vue.createApp({
    data(){
        return{
            algo:'asdfg'
        }
    },methods:{
        cambiar(){
                this.algo = 'prueba';
        }
    }
}).mount('#app')


