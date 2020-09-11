<template>
  <div id="app">
    <div class="hero">
      <h1>Shadow Generator</h1>
    </div>
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
@import "assets/scss/global.scss";

.hero {
  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 60px;
    padding: 100px 0;
    font-style: italic;
    letter-spacing: 0.3em;
  }
}
</style>
