chrome.runtime.sendMessage({
  action: "bjjhqItem",
  title:  document.querySelector('#container > div.container-top > div.container-bottom > div.left > h1').innerText,
  icon:   document.querySelector('#regularProductImage').src
});
