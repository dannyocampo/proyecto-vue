<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Hello World</h1>
  <p>{{ contador }}</p>
  <button @click="incrementar">Incrementar</button>
  <button @click="decrementar">Incrementar</button>
</template>

<script setup>
  import { ref } from 'vue';
  const contador = ref(0);
  const incrementar = () => {
    contador.value++;
  }
  const decrementar = () =>{
    contador.value--;
  }
</script>

<style scoped>
  button{
    margin: 10px 15px;
  }
</style>
