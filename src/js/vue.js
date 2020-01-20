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
    opacity: 0.5,
    colors: {
      hex: '#000000',
      hsl: { h: 4, s: 0, l: 0, a: 1 },
      hsv: { h: 4, s: 0, l: 0, a: 1 },
      rgba: { r: 0, g: 0, b: 0, a: 1 },
      a: 1
    },
  },
  methods: {
    increaseValue: function (offset) {
      this._data[offset]++;
    },
    decreaseValue: function (offset) {
      this._data[offset]--;
    },
    show: function () {
      var rgba = `rgba(${this.colors.rgba.r}, ${this.colors.rgba.g}, ${this.colors.rgba.b}, ${this.colors.rgba.a})`;
      var inset = '';
      if (this.inset == true) {
        inset = 'inset'
      }
      var settings = `${this.horizontalOffset}px ${this.verticalOffset}px ${this.blurRadius}px ${this.blurSpread}px ${rgba} ${inset}`;

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