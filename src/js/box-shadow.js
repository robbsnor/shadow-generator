
// var horizontalOffset = 0;


// range sliders
$('.setting input[type="range"]').rangeslider({
  polyfill: false,

  onInit: function () {
  },

  onSlide: function (position, value) {
    var parent = $(this.$element).parent('.setting');
    parent.find('input').val(value)
  }
});


$('input[type="number"]').keypress(function () {
});



$('body').on('click', function () {
      $('input[type="range"]').val($('input').val()).change();
})

