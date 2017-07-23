var html = $('html');
var htmlOverflowY = null;
var body = $('body');
var dimmed_weekly = $('#dimmed_weekly');

var initWeekly = function () {
  $("<style type='text/css'>\
    html.weekly {\
      overflow-y: hidden;\
    }\
    #dimmed_weekly {\
      width: 100%;\
      position: fixed;\
      height: 100%;\
      overflow: auto;\
      top: 0;\
      left: 0;\
      background-color: rgba(0,0,0,0.8);\
      z-index: 99999;\
    }\
    #container_weekly {\
      position: absolute;\
      right: 0;\
      top: 0;\
      width: 440px;\
      padding: 30px;\
      background: white;\
    }\
    .infomation_weekly {\
      position: fixed;\
      width: 200px;\
    }\
    .infomation_weekly > h1 {\
      margin: 0 0 10px 0;\
    }\
    .infomation_weekly > article > div > ul {\
      margin: 0;\
      list-style-type: none;\
    }\
    .infomation_weekly > article > div > ul > li {\
      word-break: break-all;\
    }\
    .form_weekly {\
      float: right;\
    }\
    .form_weekly::after {\
      content: '';\
      display: table;\
      clear: both;\
    }\
    .form_weekly > article > .time {\
      margin: 0 0 5px 0;\
    }\
    .form_weekly > article > .time > input {\
    }\
    .form_weekly > article > textarea {\
      width: 200px;\
      margin: 0 0 10px 0;\
    }\
  </style>").appendTo('head');

  body.append('\
    <div id="dimmed_weekly">\
      <div id="container_weekly">\
        <section class="infomation_weekly">\
          <h1>Weekly</h1>\
          <article>\
            <div>\
              <h3>월요일</h3>\
              <ul>\
                <li>test1test1test1test1test1test1</li>\
                <li>test1test1test1test1test1test2</li>\
                <li>test1test1test1test1test1test3</li>\
                <li>test1test1test1test1test1test4</li>\
                <li>test1test1test1test1test1test5</li>\
              </ul>\
            </div>\
            <div>\
              <h3>화요일</h3>\
              <ul>\
                <li>test1test1test1test1test1test1</li>\
                <li>test1test1test1test1test1test2</li>\
                <li>test1test1test1test1test1test3</li>\
                <li>test1test1test1test1test1test4</li>\
                <li>test1test1test1test1test1test5</li>\
              </ul>\
            </div>\
            <div>\
              <h3>수요일</h3>\
              <ul>\
                <li>test1test1test1test1test1test1</li>\
                <li>test1test1test1test1test1test2</li>\
                <li>test1test1test1test1test1test3</li>\
                <li>test1test1test1test1test1test4</li>\
                <li>test1test1test1test1test1test5</li>\
              </ul>\
            </div>\
            <div>\
              <h3>목요일</h3>\
              <ul>\
                <li>test1test1test1test1test1test1</li>\
                <li>test1test1test1test1test1test2</li>\
                <li>test1test1test1test1test1test3</li>\
                <li>test1test1test1test1test1test4</li>\
                <li>test1test1test1test1test1test5</li>\
              </ul>\
            </div>\
            <div>\
              <h3>금요일</h3>\
              <ul>\
                <li>test1test1test1test1test1test1</li>\
                <li>test1test1test1test1test1test2</li>\
                <li>test1test1test1test1test1test3</li>\
                <li>test1test1test1test1test1test4</li>\
                <li>test1test1test1test1test1test5</li>\
              </ul>\
            </div>\
          </article>\
        </section>\
        <section class="form_weekly">\
          <article class="monday">\
            <div class="time">\
              <label for="monday">월요일</label>\
              <input type="time" name="monday_time" placeholder="할 일">\
            </div>\
            <textarea name="name" rows="8" cols="80"></textarea>\
          </article>\
          <article class="tuesday">\
            <div class="time">\
              <label for="monday">화요일</label>\
              <input type="time" name="tuesday_time" placeholder="할 일">\
            </div>\
            <textarea name="name" rows="8" cols="80"></textarea>\
          </article>\
          <article class="wednesday">\
            <div class="time">\
              <label for="monday">수요일</label>\
              <input type="time" name="wednesday_time" placeholder="할 일">\
            </div>\
            <textarea name="name" rows="8" cols="80"></textarea>\
          </article>\
          <article class="thursday">\
            <div class="time">\
              <label for="monday">목요일</label>\
              <input type="time" name="thursday_time" placeholder="할 일">\
            </div>\
            <textarea name="name" rows="8" cols="80"></textarea>\
          </article>\
          <article class="friday">\
            <div class="time">\
              <label for="monday">금요일</label>\
              <input type="time" name="friday_time" placeholder="할 일">\
            </div>\
            <textarea name="name" rows="8" cols="80"></textarea>\
          </article>\
        </section>\
      </div>\
    </div>');

  html.addClass('weekly');
}

if (!dimmed_weekly[0]) {
  $.ajax({
    url: 'FIREBASE_URL/data.json',
    method: 'GET',
    success: function (data) {
      initWeekly();
      for(var k in data) {
        console.log(data[k]);
      }
    }
  });
} else if (dimmed_weekly.hasClass('hidden')) {
  dimmed_weekly.removeClass('hidden');
  html.addClass('weekly');
} else {
  dimmed_weekly.addClass('hidden');
  html.removeClass('weekly');
}
