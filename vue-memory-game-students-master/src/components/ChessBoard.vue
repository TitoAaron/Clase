<!-- ChessBoard Component -->
<script setup>
import { ref, reactive } from 'vue';
import Card from './Card.vue'


    const props = defineProps({
        cards: Array,
        backCardImg: String,

    })

    const emit = defineEmits(['match'])

    let selectedCards = []

    const cardsDoubled = props.cards.concat(props.cards);

    shuffleArray(cardsDoubled);

    const cardsChessBoard = reactive(cardsDoubled.map((x) => {
        return {
            ...x, reveal: false
        }
    }));

    function shuffleArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
    }

    function cambiar(card){
        if(card.reveal || selectedCards.length == 2){
            return
        }
        card.reveal = true;
        selectedCards.push(card);
        if(selectedCards.length == 2){
            const isMatch = selectedCards[0].id == selectedCards[1].id;
            emit('match', isMatch);
            if(selectedCards[0].id != selectedCards[1].id){
            setTimeout(() => {
                selectedCards[0].reveal = false;
                selectedCards[1].reveal = false;
                selectedCards.pop();
                selectedCards.pop();
            }, 1000)
            }else{  
            selectedCards.pop();
            selectedCards.pop();
 
            }
        }

    }

</script>

<template>
<div class="grid-container">
    <Card @click="cambiar(card)" class="grid-item" :alt="card.name" v-for="card in cardsChessBoard" :key="card.id" :back="backCardImg" :front="card.ruta" :reveal="card.reveal">
    </Card>
</div>
  

</template>

<style >
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto ;
  padding: 5px;
  
}

.grid-item {
    width: 200px;
    height: 200px;
    padding: 10px;
    text-align: center;
    cursor: pointer;
}
</style>