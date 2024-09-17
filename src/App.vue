<template>
  <div id="app">
    <NavigateComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import NavigateComponent from './components/NavigateComponent.vue';

export default {

  components: {
    NavigateComponent,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;

}
</style>
