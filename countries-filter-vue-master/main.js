// Suerte :)
Vue.createApp({
        
    data(){
        return{
            countries: [],
            nameCountryFilter: "",
            regionCountryFilter: "",
        }
    },
    created(){
        this.fetchData();
    },
    computed: {
        
    },
    methods:{
        async fetchData(){
            const response = await fetch('https://restcountries.com/v3.1/all');
            this.countries = await response.json();
        },
        regionFilter(){
            
            if(this.regionCountryFilter  != ''){
                return this.countriesFiltered = this.countries.filter((x)=>{
                    return x.region == this.regionCountryFilter;
                })
            }
            return this.countries;
        }
     }
     
}).mount('#app');