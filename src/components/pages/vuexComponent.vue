<template>
 
        <h1>Vuex</h1><br><br>
        <app-result :counter="counter"></app-result>
        <hr>
        <app-counter @updated="counter += $event"></app-counter>

  </template>
  
  <script>
import counterComp from './vuex/counterComp.vue';
import ResultComp from './vuex/ResultComp.vue';
  
  export default {
    data() {
      return {
        counter: 0
      };
    },
    components: {
      appCounter: counterComp,
      appResult: ResultComp
    }
  };
  </script>
  