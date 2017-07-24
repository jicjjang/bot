$(document).ready(function () {
  $.ajax({
    url: 'https://ttest-e32d9.firebaseio.com/data.json',
    method: 'GET',
    success: function (data) {
      for (var k in data) {
        if (data[k].hookType === 'dooray-weekly') {
          $('.' + data[k].data.day + '_ul_weekly').append('<li>' + data[k].hookTime + '까지 : ' + data[k].data.text + '</li>');
        }
      }
    }
  });

  $('button').click(function (e) {
    var target = $(e.target);
    var val = target.siblings('.time_weekly').children('input[type=text]').val();
    var time = target.siblings('.time_weekly').children('input[type=time]').val();
    var day = target.attr('id').split('_button')[0];

    if (val && time && day) {
      $.post(FIREBASE_URL + '/data.json', JSON.stringify({
          hookType: "dooray-weekly",
          id: bot_id,
          description: 'weekly',
          image: bot_image,
          hookTime: time,
          hookTerm: "0",
          name: "Weekly 봇",
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
