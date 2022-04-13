<!-- Card Component -->
<script setup>

const props = defineProps({
    back: String,
    front: String,
    reveal: Boolean,
})

const emits = defineEmits({

})


</script>

<template>
    <img  v-if="reveal" :src="front" >  
    <img  v-else :src="back" >
</template>