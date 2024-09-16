<template>
  <div id="app">
    <NavigateComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import NavigateComponent from './components/NavigateComponent.vue';

export default {
  name: 'App',
  components: {
    NavigateComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
