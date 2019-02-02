// background page
var parent = chrome.contextMenus.create({
  "title": "Show pass",
  "id": "0",
  "contexts": ["all"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  chrome.tabs.sendMessage(tab.id, {});
})
