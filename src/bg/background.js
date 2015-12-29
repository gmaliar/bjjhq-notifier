chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "bjjhqItem") {
    new Notification("New Item", {
        icon: request.icon,
        body: request.title
      }
    )
  }
});
