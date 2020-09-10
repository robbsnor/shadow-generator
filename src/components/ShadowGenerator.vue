<template>
  <div>
    {{ generateShadow }}
    <div class="box" v-bind:style="{ 'box-shadow': generateShadow }"></div>

    <label>horizontalLength</label>
    <b-form-input v-model="horizontalLength" type="range" min="-200" max="200"></b-form-input>

    <label>verticalLength</label>
    <b-form-input v-model="verticalLength" type="range" min="-200" max="200"></b-form-input>

    <label>blurRadius</label>
    <b-form-input v-model="blurRadius" type="range" min="0" max="200"></b-form-input>

    <label>spreadRadius</label>
    <b-form-input v-model="spreadRadius" type="range" min="0" max="200"></b-form-input>

    <color-picker v-model="color" />
  </div>
</template>

<script>
import { Chrome } from "vue-color";

export default {
  name: "ShadowGenerator",
  data() {
    return {
      horizontalLength: 0,
      verticalLength: 0,
      blurRadius: 20,
      spreadRadius: 0,
      color: {
        rgba: { r: 25, g: 77, b: 51, a: 1 },
      },
    };
  },
  computed: {
    generateShadow() {
      return `
      ${this.horizontalLength}px 
      ${this.verticalLength}px 
      ${this.blurRadius}px ${this.spreadRadius}px 
      rgba(${this.color.rgba.r}, ${this.color.rgba.g}, ${this.color.rgba.b}, ${this.color.rgba.a})`;
    },
  },
  components: {
    "color-picker": Chrome,
  },
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: orangered;
}
</style>
