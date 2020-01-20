$(document).ready(function () {


  // custom number buttons
  $('.input-group--arrow').each(function () {
    var input = $(this).find('input');
    // var steps = input.data('steps');


    // var steps = input.dataset.steps
    // console.log(input)

    // var val = input.val();


    input.css('padding-right', $(this).find('.custom').width())
  })
});