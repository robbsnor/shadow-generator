import {BootstrapVue} from 'bootstrap-vue';
Vue.use(BootstrapVue)

import { Chrome } from 'vue-color';







new Vue({
  el: '#vue-app',
  data: {
    options: [
      {horizontalOffset: 0},
      {verticalOffset: 0},
      {blurRadius: 50},
      {blurSpread: 10}
    ],
    inset: false,
    opacity: 0.5,
    colors: {
      hex: '#000000',
      hsl: { h: 4, s: 0, l: 0, a: 1 },
      hsv: { h: 4, s: 0, l: 0, a: 1 },
      rgba: { r: 0, g: 0, b: 0, a: 1 },
      a: 0.5
    },
    shadow: ''
  },
  watch: {
    options(val) {
      console.log(this.options.horizontalOffset)
      $('.final-preview').css({boxShadow: `${this.options.horizontalOffset}px 10px 10px black`})
    },
  },

  methods: {
    increaseValue: function (offset) {
      this._data[offset]++;
    },
    decreaseValue: function (offset) {
      this._data[offset]--;
    },
    applyShadow: function () {
      var rgba = `rgba(${this.colors.rgba.r}, ${this.colors.rgba.g}, ${this.colors.rgba.b}, ${this.colors.rgba.a})`;
      var inset = '';
      if (this.inset == true) {
        inset = 'inset';
      }
      
     this.shadow = `${this.options.horizontalOffset}px ${this.options.verticalOffset}px ${this.options.blurRadius}px ${this.options.blurSpread}px ${rgba} ${inset}`;

      $('.final-preview').css({boxShadow: this.shadow})
    }
  },
  mounted: function () {
    console.log(this.colors.rgba)
  },
  components: {
    'chrome-picker': Chrome
  },
  delimiters: ['[[', ']]']
});







