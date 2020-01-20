import {BootstrapVue} from 'bootstrap-vue';
Vue.use(BootstrapVue)

import { Chrome } from 'vue-color';







new Vue({
  el: '#vue-app',
  data: {
    horizontalOffset: 0,
    verticalOffset: 0,
    blurRadius: 50,
    blurSpread: 10,
    inset: false,
    colors: {
      hex: '#194d33',
      hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
      hsv: { h: 150, s: 0.66, v: 0.30, a: 1 },
      rgba: { r: 25, g: 77, b: 51, a: 1 },
      a: 1
    },
    opacity: 0.5
  },
  methods: {
    increaseValue: function (offset) {
      this._data[offset]++;
    },
    decreaseValue: function (offset) {
      this._data[offset]--;
    },
    show: function () {
      var rgba = `rgba(${this.colors.rgba.r}, ${this.colors.rgba.g}, ${this.colors.rgba.b}, ${this.colors.rgba.a})`
      var settings = `${this.horizontalOffset}px ${this.verticalOffset}px ${this.blurRadius}px ${this.blurSpread}px ${rgba}`;
      console.log(settings)
    },
    showColorPicker: function () {
      $('.vc-chrome-saturation-wrap').parent().show();
    },
    hideColorPicker: function () {
      $('.vc-chrome-saturation-wrap').parent().hide();
    }
  },
  components: {
    'chrome-picker': Chrome
  },
  delimiters: ['[[', ']]']
});






$('.vc-chrome-saturation-wrap').parent().hide();