<script setup>

// Importamos el JSON. Vue ya lo convierte en un array de objetos y lo poe en la variable pokedex 
import pokedex from './assets/pokedex.json';
import Card from './components/Card.vue';
import RadialProgress from "vue3-radial-progress";


import BackCard from './assets/back-card.png';
import ChessBoard from './components/ChessBoard.vue';
import { reactive } from '@vue/reactivity';
let arrayPokedex = pokedex.slice(0,10);

arrayPokedex = arrayPokedex.map((x) => {
  
  return {id: x.id,
   name: x.name.english,
   ruta: '/pokemons/' + x.id.toString().padStart(3,"0") + ".png"}

})

function checkedCards(isMatch){
  if (isMatch) {
    state.score++;
  }
}

const state = reactive({
  score: 0,
  totalMatches: 10
})
</script>

<template>
  <header>
    <h1>¡PokeMemory</h1>
  </header>

    <RadialProgress 
   :diameter="100"
   :completed-steps="state.score"
   :total-steps="state.totalMatches">
    <p>{{state.score + "/" + state.totalMatches}}</p>
  </RadialProgress>

  <main>
    <ChessBoard @match="checkedCards" :cards="arrayPokedex" :backCardImg="BackCard"></ChessBoard>
  </main>
</template>

<style>
@import "./assets/base.css";

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    justify-content: center;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
