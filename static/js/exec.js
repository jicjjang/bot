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

        if (target.hasClass('choice')) {
          target.removeClass('choice');
          modifyTime.val('');
          modifyText.val('');
          $('article.' + day + ' > .button > button.save_button').addClass('active');
          $('article.' + day + ' > .button > button.modify_button, article.' + day + ' > .button > button.delete_button').removeClass('active').attr('data-key', '');
        } else {

          target.siblings().removeClass('choice');
          target.addClass('choice');
          modifyTime.val(target.data('time'));
          modifyText.val(target.data('text'));

          $('article.' + day + ' > .button > button.save_button').removeClass('active');
          $('article.' + day + ' > .button > button.modify_button, article.' + day + ' > .button > button.delete_button').addClass('active').attr('data-key', target.data('key'));
        }
      });
    }
  });

  addButton();
  modifyButton();
  deleteButton();
});

function addButton () {
  $('button.save_button').on('click', function (e) {
    _commonFirebase (e, '_save_button', 'POST', false);
  });
}

function modifyButton () {
  $('button.modify_button').on('click', function (e) {
    _commonFirebase (e, '_modify_button', 'PUT', true);
  });
}

function _commonFirebase (e, splitClass, method, key) {
  var target = $(e.target);
  var val = target.parent().siblings('.time').children('input[type=text]').val();
  var time = target.parent().siblings('.time').children('input[type=time]').val();
  var day = target.attr('id').split(splitClass)[0];

  if (val && time && day) {
    $.ajax({
      url: FIREBASE_URL + '/data' + (key ? '/' + target.data('key') : '') + '.json',
      method: method,
      data: JSON.stringify({
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
      success: function (data) {
        console.log(data);
        location.reload();
      }
    });
  } else {
    alert('모두 입력해주세요.');
  }
}

function deleteButton () {
  $('button.delete_button').on('click', function (e) {
    var key = $(e.target).data('key');
    if (key) {
      $.ajax({
        url: FIREBASE_URL + '/data/' + key + '.json',
        method: 'DELETE',
        success: function (data) {
          console.log(data);
          location.reload();
        }
      });
    }
  });
}
