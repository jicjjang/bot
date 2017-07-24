# Weekly

Weekly to do list to chrome extension using with NHN messenger Dooray.

![Usage](static/capture.png)

## Install

~~~shell
$ git clone https://github.com/jicjjang/weekly
$ cd weekly
$ vi static/config.js
~~~

~~~javascript
// static/config.js
var FIREBASE_URL = "FIREBASE_URL";
var bot_image = "IMAGE_URL";
var bot_id = "DOORAY_ID";
~~~

## Usage

Go to `chrome://extensions/` tab and check the `Developer mode` in Google Chrome.  
Choose the `Load unpacked extensions` button next to Load the `weekly` project.  
Is done.

## LICENSE

MIT License

Copyright (c) 2017 jicjjang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
