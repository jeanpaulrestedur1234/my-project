<template>
  <div id="app">
    <NavigateComponent />

    <div class="container">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <router-view></router-view>
        </div>
    </div>
    
  </div>
</template>

<script>
import NavigateComponent from './components/pages/NavigateComponent.vue';

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
