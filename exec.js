var html = $('html');
var htmlOverflowY = null;
var body = $('body');
var dimmed_weekly = $('#dimmed_weekly');

$(document).ready(function () {
  $.ajax({
      url: 'FIREBASE_URL/data.json',
      method: 'GET',
      success: function (data) {
        for (var k in data) {
          console.log(data[k]);
        }
      }
    });
  $('button').click(function (e) {
    var val = $(e.target).siblings('input').val();
    var day = $(e.target).attr('id').split('_button')[0];
    switch (day) {
      case 'monday':
        day = 1;
        break;
      case 'tuesday':
        day = 2;
        break;
      case 'wednesday':
        day = 3;
        break;
      case 'thursday':
        day = 4;
        break;
      case 'friday':
        day = 5;
        break;
    }
    console.log(day);
  });
});
