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
              min="-50"
              max="50"
              class="range-center"
            ></b-form-input>
          </div>

          <div class="form-group">
            <div class="top">
              <label>Vertical Offset</label>
              <b-form-input v-model="verticalLength" type="number" min="-50" max="50" class="value"></b-form-input>
            </div>
            <b-form-input
              v-model="verticalLength"
              type="range"
              min="-50"
              max="50"
              class="range-center"
            ></b-form-input>
          </div>

          <div class="form-group">
            <div class="top">
              <label>Blur</label>
              <b-form-input v-model="blurRadius" type="number" min="-50" max="50" class="value"></b-form-input>
            </div>
            <b-form-input v-model="blurRadius" type="range" min="0" max="50"></b-form-input>
          </div>

          <div class="form-group">
            <div class="top">
              <label>Spread</label>
              <b-form-input v-model="spreadRadius" type="number" min="-50" max="50" class="value"></b-form-input>
            </div>
            <b-form-input v-model="spreadRadius" type="range" min="0" max="50"></b-form-input>
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
          <div class="box" v-bind:style="{ 'box-shadow': generateShadow}">Copy</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  },
  computed: {
    generateShadow() {
      return `${this.inset} ${this.horizontalLength}px ${this.verticalLength}px ${this.blurRadius}px ${this.spreadRadius}px rgba(${this.shadowColor.rgba.r}, ${this.shadowColor.rgba.g}, ${this.shadowColor.rgba.b}, ${this.shadowColor.rgba.a})`;
    },
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
    margin-top: -10px;
  }
}

.box {
  margin: 0 auto;
  width: 400px;
  height: 300px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.custom-range::-webkit-slider-runnable-track {
  background-color: black;
  border-radius: 0;
  height: 2px;
}
.custom-range::-webkit-slider-thumb {
  position: relative;
  margin-top: -10px;
  height: 20px;
  width: 20px;
  background-color: white;
  border: 2px solid black;
  box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 1);

  &:active {
    background-color: black;
  }
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
