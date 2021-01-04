<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-5">
          <div class="form-group">
            <div class="top">
              <label>Horizontal Offset</label>
              <b-form-input
                v-model="horizontalLength"
                type="number"
                min="-200"
                max="200"
                class="value"
              ></b-form-input>
            </div>
            <b-form-input
              v-model="horizontalLength"
              type="range"
              min="-25"
              max="25"
              class="range-center"
            ></b-form-input>
          </div>

          <div class="form-group">
            <div class="top">
              <label>Vertical Offset</label>
              <b-form-input
                v-model="verticalLength"
                type="number"
                min="-25"
                max="25"
                class="value"
              ></b-form-input>
            </div>
            <b-form-input
              v-model="verticalLength"
              type="range"
              min="-25"
              max="25"
              class="range-center"
            ></b-form-input>
          </div>

          <div class="form-group">
            <div class="top">
              <label>Blur</label>
              <b-form-input
                v-model="blurRadius"
                type="number"
                min="-25"
                max="25"
                class="value"
              ></b-form-input>
            </div>
            <b-form-input
              v-model="blurRadius"
              type="range"
              min="0"
              max="25"
            ></b-form-input>
          </div>

          <div class="form-group">
            <div class="top">
              <label>Spread</label>
              <b-form-input
                v-model="spreadRadius"
                type="number"
                min="-25"
                max="25"
                class="value"
              ></b-form-input>
            </div>
            <b-form-input
              v-model="spreadRadius"
              type="range"
              min="0"
              max="25"
            ></b-form-input>
          </div>

          <div class="form-group">
            <div class="top">
              <label>Shadow Color</label>
              <div
                class="shadow-picker"
                @click="togglehadowPicker"
                v-bind:style="{ background: shadowColor.hex }"
              ></div>
            </div>
            <ShadowPicker v-model="shadowColor" />
          </div>

          <div class="form-group">
            <div class="top">
              <label>Inset</label>
              <label class="switch">
                <input type="checkbox" @change="isInset" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="col text-center">
          <div
            class="box"
            v-bind:style="{ 'box-shadow': generateShadow }"
            v-on:click="copyThis('yobro')"
          >
            <div>
              Copy
              <br />-
              <br />
            </div>
            <div>
              <small>{{ generateShadow }}</small>
              <input
                type="text"
                v-model="generateShadow"
                id="yobro"
                class="wooosh"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
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
      shadowColor: {
        rgba: { r: 0, g: 0, b: 0, a: 0.4 },
        hex: "#000000",
      },
      inset: "",
    };
  },
  methods: {
    isInset(e) {
      if (e.target.checked === true) {
        this.inset = "inset";
      } else {
        this.inset = "";
      }
    },
    closeShadowPicker() {
      var colorPicker = document.querySelector(".vc-chrome");

      colorPicker.classList.remove("vc-chrome--show");
    },
    openShadowPicker() {
      var colorPicker = document.querySelector(".vc-chrome");
      colorPicker.classList.add("vc-chrome--show");
    },
    togglehadowPicker() {
      var colorPicker = document.querySelector(".vc-chrome");

      if (colorPicker.classList.contains("vc-chrome--show")) {
        this.closeShadowPicker();
      } else {
        this.openShadowPicker();
      }
    },
    copyThis(idSelector) {
      var copyText = document.getElementById(idSelector);
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      // alert("Copied the text: " + copyText.value);
    },
  },
  computed: {
    generateShadow() {
      return `${this.inset} ${this.horizontalLength}px ${this.verticalLength}px ${this.blurRadius}px ${this.spreadRadius}px rgba(${this.shadowColor.rgba.r}, ${this.shadowColor.rgba.g}, ${this.shadowColor.rgba.b}, ${this.shadowColor.rgba.a})`;
    },
  },
  components: {
    ShadowPicker: Chrome,
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  .top {
    display: flex;
    justify-content: space-between;
  }
  .value {
    width: auto;
    text-align: right;
  }
  margin-bottom: 2rem;
}

.range-center {
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    margin-left: -1px;
    border-left: 2px solid black;
    opacity: 0.2;
    display: block;
    height: 40px;
    margin-top: 0px;
  }
}

.box {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  height: 300px;
  margin-bottom: 50px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.shadow-picker {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  cursor: pointer;
}

.custom-range {
  position: relative;
  height: auto;

  // horizontal stroke
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 19px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: black;
    user-select: none;
  }

  &::-webkit-slider-runnable-track {
    border-radius: 0;
    background-color: transparent;
    padding: 20px 0;

    &::after {
      content: "";
      display: block;
      width: 20px;
    }
  }

  &::-webkit-slider-thumb {
    position: relative;
    margin-top: -10px;
    height: 20px;
    width: 20px;
    background-color: white;
    border: 2px solid black;
    box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 1);
    z-index: 1;

    &:active {
      background-color: black;
    }
  }
}

.wooosh {
  position: absolute;
  top: -2000px;
  left: -2000px;
  opacity: 0;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 58px;
  height: 32px;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  left: 4px;
  bottom: 4px;
  height: 20px;
  width: 20px;
  background-color: white;
  border: 2px solid black;
  box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 1);
  transition: 0.3s;
}

input:checked + .slider:before {
  background-color: black;
}

input:focus + .slider {
  /* box-shadow: 0 0 1px black; */
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
  border: 2px solid black;
}

.slider.round:before {
  border-radius: 50%;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
