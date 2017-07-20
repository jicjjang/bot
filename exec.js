var cssId = 'weeklyCss';
var body = document.querySelector("body");

if (!document.getElementById(cssId)) {
    var head  = document.getElementsByTagName('head')[0];
    var style  = document.createElement('style');
    style.id   = cssId;
    style.type = 'text/css';

    style.appendChild(document.createTextNode('#container_weekly {' +
      'position: fixed;' +
      'right: 0;' +
      'top: 0;' +
      'background: white;' +
      'display: flex;' +
      '-webkit-display: flex;' +
      'width: 500px;' +
    '}' +

    '.listContainer_weekly {' +
      'width: 50%;' +
    '}' +

    '.inputContainer_weekly {' +
      'flex: 1;' +
      '-webkit-flex: 1;' +
    '}' +

    '.inputContainer_weekly > section > .time {' +
      'margin: 0 0 5px 0;' +
    '}' +

    '.inputContainer_weekly > section > .time > input {' +

  '}' +

    '.inputContainer_weekly > section > textarea {' +
      'width: 200px;' +
      'margin: 0 0 10px 0;' +
    '}'));
    head.appendChild(style);
}

if (!document.getElementById('container_weekly')) {
  body.insertAdjacentHTML('beforeend', '\
  <div id="container_weekly">\
    <div class="listContainer_weekly">\
      asdfasdf\
    </div>\
    <div class="inputContainer_weekly">\
      <section class="monday">\
        <div class="time">\
          <label for="monday">월요일</label>\
          <input type="time" name="monday_time" placeholder="할 일">\
        </div>\
        <textarea name="name" rows="8" cols="80"></textarea>\
      </section>\
      <section class="tuesday">\
        <div class="time">\
          <label for="monday">화요일</label>\
          <input type="time" name="tuesday_time" placeholder="할 일">\
        </div>\
        <textarea name="name" rows="8" cols="80"></textarea>\
      </section>\
      <section class="wednesday">\
        <div class="time">\
          <label for="monday">수요일</label>\
          <input type="time" name="wednesday_time" placeholder="할 일">\
        </div>\
        <textarea name="name" rows="8" cols="80"></textarea>\
      </section>\
      <section class="thursday">\
        <div class="time">\
          <label for="monday">목요일</label>\
          <input type="time" name="thursday_time" placeholder="할 일">\
        </div>\
        <textarea name="name" rows="8" cols="80"></textarea>\
      </section>\
      <section class="friday">\
        <div class="time">\
          <label for="monday">금요일</label>\
          <input type="time" name="friday_time" placeholder="할 일">\
        </div>\
        <textarea name="name" rows="8" cols="80"></textarea>\
      </section>\
    </div>\
  </div>');
} else {
  document.getElementById('container_weekly').remove();
}
