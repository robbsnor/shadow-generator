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
  
});

new Vue({
  el: '#vue-app',
  data: {
    name: 'robbin'
  },
  delimiters: ['[[', ']]']
})