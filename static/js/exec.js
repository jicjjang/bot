$(document).ready(function () {
  $.ajax({
    url: FIREBASE_URL + '/data.json',
    method: 'GET',
    success: function (data) {
      var days = [];
      for (var k in data) {
        days.push(data[k]);
      }
      days.sort(function (a, b) {
        var timeA = parseInt(a.hookTime.split(':').join(''));
        var timeB = parseInt(b.hookTime.split(':').join(''));

        if (timeA < timeB) {
          return -1;
        } else if (timeA > timeB) {
          return 1;
        }
        return 0;
      });
      for (var k in days) {
        if (days[k].hookType === 'dooray-weeklist') {
          $('.' + days[k].data.day + '_ul').append('<li>' + days[k].hookTime + '까지 : ' + days[k].data.text + '</li>');
        }
      }
    }
  });

  $('button').click(function (e) {
    var target = $(e.target);
    var val = target.siblings('.time').children('input[type=text]').val();
    var time = target.siblings('.time').children('input[type=time]').val();
    var day = target.attr('id').split('_button')[0];

    if (val && time && day) {
      $.post(FIREBASE_URL + '/data.json', JSON.stringify({
          hookType: "dooray-weeklist",
          id: bot_id,
          description: 'weeklist',
          image: bot_image,
          hookTime: time,
          hookTerm: "0",
          name: "Weeklist 봇",
          data: {
            text: val,
            day: day
          }
        }),
        function (data) {
          console.log(data);
          location.reload();
        }
      );
    } else {
      alert('모두 입력해주세요.');
    }
  });
});
