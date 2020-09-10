<template>
  <div id="app">
    <ShadowGenerator />
  </div>
</template>

<script>
import ShadowGenerator from "./components/ShadowGenerator.vue";

export default {
  name: "App",
  components: {
    ShadowGenerator,
  },
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
