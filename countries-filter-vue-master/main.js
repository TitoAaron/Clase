Vue.createApp({
    data() {
        return {
            isDarkTheme: true,
            countries: [],
            selectFilter: "",
            inputFilter: "",
            modalCountry: "",
            ordenarPor:"",
            lowPopulation:true
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            this.countries = await fetch("https://restcountries.com/v2/all")
                .then(response => response.json());
        },
        setModalCountry(code) {
            this.modalCountry = this.countries.find(c => c.alpha3Code == code);  
        },
        hideCountryModal() {
            this.modalCountry = "";
        }
    },
    computed: {
        filteredCountries() {
            const inputRegex = new RegExp(this.inputFilter, 'i');
            const selectRegex = new RegExp(this.selectFilter, 'i');
            let FilteredCountries;
            
            FilteredCountries = this.countries.filter(country => {
                if (country.name.match(inputRegex) && country.region.match(selectRegex)) {
                    return true;
                }
                return false;
            });   

            if(this.ordenarPor == 'ascendente'){
                    console.log(FilteredCountries);
                    FilteredCountries = FilteredCountries.sort((a, b) =>{
                        if (a.population > b.population) {
                            return -1;
                        }
                        if (a.population < b.population) {
                            return 1;
                        }
                        return 0;
                    } )
            }else if(this.ordenarPor == 'descendente'){
                console.log(FilteredCountries);
                    FilteredCountries = FilteredCountries.sort((a,b)=>{
                        return a.population - b.population;
                    });
            }

            this.lowPopulation = FilteredCountries.every((x) =>{
                return x.population < 10000000;
            })
            return FilteredCountries;
        },
    },
}).mount("#app");