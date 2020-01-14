
  function isInset() {
    if (document.getElementById('inset').checked) {
      return 'inset';
    } else {
      return '';
    }
  }

  function checkEmpty(val) {
    if (val == '') {
      return 0;
    } else {
      return val;
    }
  }

  function getShadowVals() {

    boxShadowVals = '';

    var boxShadowSettings = {
      inset: isInset(),
      horizontalOffset: checkEmpty($('#horizontal-offset').val()) + 'px',
      verticalOffset: checkEmpty($('#vertical-offset').val()) + 'px',
      blurRadius: checkEmpty($('#blur-radius').val()) + 'px',
      spreadRadius: checkEmpty($('#spread-radius').val()) + 'px',
      shadowColor: $('#shadow-color').css('background-color'),

      // boxColor: $('#box-color').css('background-color'),
    }


    for (key in boxShadowSettings) {
      // console.log(key)
      // console.log(boxShadowSettings[key])
      boxShadowVals = boxShadowVals + (boxShadowSettings[key] + ' ');
    }

    $('.final-preview').html(boxShadowVals).css({
      'box-shadow': boxShadowVals
    });
  }



  $(document).on('click', function () {
    getShadowVals()
  })
  getShadowVals()





function initColorPicker(element) {

  var boxShadowPicerElement = document.querySelector(element);
  var boxShadowPicer = new Picker({
    parent: boxShadowPicerElement,
    color: boxShadowPicerElement.style.background
  });
  boxShadowPicer.onChange = function (color) {
    boxShadowPicerElement.style.background = color.rgbaString;
  };
}

initColorPicker('#shadow-color')
initColorPicker('#box-color')



// $('.preview').html(boxShadowVals).css({
//   'box-shadow': boxShadowVals
// });

// function checkHash(val) {
//   console.log(val)
//   if (!val.startsWith('#')) {
//     val = '#' + val;
//     $('.color').css({
//       'background': val
//     });
//     $('#shadow-color').val(val);

//     return val;
//   } else {
//     $('.color').css({
//       'background': val
//     });

//     return val;
//   }
// }