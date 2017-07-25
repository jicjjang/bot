$(document).ready(function () {
  $.ajax({
    url: FIREBASE_URL + '/data.json',
    method: 'GET',
    success: function (data) {
      var days = [];
      for (var k in data) {
        data[k].key = k;
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
          $('.' + days[k].data.day + '_ul').append('<li data-key="' + days[k].key + '" data-time="' + days[k].hookTime + '" data-text="' + days[k].data.text + '">' + days[k].hookTime + '까지 : ' + days[k].data.text + '</li>');
        }
      }

      $('.weeks_ul > li').on('click', function (e) {
        var target = $(e.target);
        var day = target.parent().attr('class').split('_ul weeks_ul')[0];
        var modifyTime = $('article.' + day + ' > .time > input[type=time]');
        var modifyText = $('article.' + day + ' > .time > input[type=text]');
        target.addClass('choice');
        modifyTime.val(target.data('time'));
        modifyText.val(target.data('text'));

        $('article.' + day + ' > button').off('click').on('click', function (e) {
          $.ajax({
            url: FIREBASE_URL + '/data/' + target.data('key') + '.json',
            method: 'PUT',
            data: JSON.stringify({
              hookType: "dooray-weeklist",
              id: bot_id,
              description: 'weeklist',
              image: bot_image,
              hookTime: modifyTime.val(),
              hookTerm: "0",
              name: "Weeklist 봇",
              data: {
                text: modifyText.val(),
                day: day
              }
            }),
            success: function (data) {
              console.log(data);
              location.reload();
            }
          });
        }).text('수정');
      });
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
