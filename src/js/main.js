

$(document).ready(function () {


  $(document).on('click', '.input-group--number .arrows svg', function () {

    var inputField = $(this).parents('.input-group').find('.form-control');

    var elementVal = inputField.val();    


    if ($(this).hasClass('add')) {
      var x =  elementVal++
      inputField.val(elementVal++)
    } else {
      var x = elementVal--
      inputField.val(elementVal--)
    }
  })


});
