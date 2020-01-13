$(document).ready(function () {


  // custom number buttons
  $('.input-group--arrow').each(function () {
    var input = $(this).find('input');
    var add = $(this).find('.custom .add')
    var sub = $(this).find('.custom .sub')

    var val = input.val();

    input.css('padding-right', $(this).find('.custom').width())




    add.on('click', function () {
      val = input.val();
      val++;
      input.val(val);
    })

    sub.on('click', function () {
      val = input.val();
      val--;
      input.val(val);
    })
  })



  function generateGradient() {

    var settings = {
      horizontalOffset: $('#horizontal-offset').val(), // 0
      verticalOffset: $('#vertical-offset').val(), // 0
      blurRadius: $('#blur-radius').val(),
      spreadRadius: $('#spread-radius').val(),
      color: $('#color').val()
    }

    var settingsArray = [];

    for (key in settings) {
      // console.log(key)
      // console.log(settings[key])

      // check if empty
      if (settings[key] == "") {
        settings[key] = 0;
      }


      // add px to values
      var val = settings[key].toString();
      if (!val.includes('#')) {
        settings[key] = settings[key] + 'px';
      }

      // push results in array
      settingsArray.push(settings[key] + ' ')
    }



    // append shadow to preview
    var gradient = settingsArray.join('');
    $('.preview').css({
      'box-shadow': gradient
    }).html(gradient)
  }



var inset = false;



  $(document).on('click', function () {
    generateGradient();
    
    if (document.getElementById('inset').checked) {
      inset = true;
      
    } else {
      inset = false;
      
    }
    console.log(inset)
  })

  generateGradient();

});