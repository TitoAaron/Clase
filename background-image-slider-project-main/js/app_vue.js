const pictures =  
["contBcg-0",
"contBcg-1",
"contBcg-2",
"contBcg-3",
"contBcg-4"
];

Vue.createApp({
    data(){
        return{
            Index: 0,
            urlImage:'',
        }
    },methods: {
        getUrl(){
            return this.urlImage = 'img/' + pictures[this.Index] + '.jpeg';
        },
        nextImg(){
            if(this.Index < pictures.length - 1){
                this.Index++;
            }else{
                this.Index = 0;
            }
        },
        prevImg(){
            if(this.Index > pictures.length -1){
                this.Index--;
            }else{
                this.Index = pictures.length;
            }

        }
    }

}).mount('#app')