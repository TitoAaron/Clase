<!-- Card Component -->
<script setup>


const props = defineProps({
    back: String,
    front: String,
    reveal: Boolean,
})


function cambiar(){
    reveal = !reveal;
}

</script>



<template>
    <img  v-if="!reveal" :src="front" alt="">  

    <img  v-else :src="back" alt="">
</template>