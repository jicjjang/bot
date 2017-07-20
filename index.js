chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: "exec.js"
  }, function(result) {
    console.log(result);
  });
});
