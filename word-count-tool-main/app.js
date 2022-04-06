Vue.createApp({
    data(){
        return{
            texto:'',
            textLong:0
            
        }
    },methods:{
        letrasLength(){
            return this.textLong = this.texto.length;
        }
    }
}).mount('#app')