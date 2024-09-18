<template>
    <div>
 
      <button class="btn btn-primary" @click="incrementar">Incrementar</button>
      <button class="btn btn-primary" @click="decrementar">Decrementar</button>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  export default{
    methods: {
    ...mapActions(['incrementar', 'decrementar'])  // Usa las acciones
  }

  }
  


  </script>
  