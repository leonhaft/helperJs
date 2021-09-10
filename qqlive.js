(function () {
  var inte = setInterval(lookElements, 1000);
  var loopCount = 0;
  var successDiv = false;
  var sickBackgroundImageRegex = /\w{1,}.jpg$/g;
  function lookElements() {
    if (successDiv == false) {
      findSickDiv();
    }

    loopCount++;
    if (successDiv || loopCount > 20) {
      clearInte();
    }
  }

  function clearInte() {
    clearInterval(inte);
  }

  function findSickLink(container) {
    var continueLinkRemove;
    for (var i = 0; i < container.childNodes.length; i++) {
      var currentNode = container.childNodes[i];
      if (currentNode.nodeName === "A") {
        var href = currentNode.getAttribute("href");
        if (href.length == 0) {
          continueLinkRemove = currentNode;
          break;
        }
      }
    }

    if (continueLinkRemove) {
      continueLinkRemove.remove();
      console.log("恶心链接删除成功");
    }
  }

  function findSickDiv() {
    var divs = document.getElementsByTagName("div");
    console.log(divs.length);
    var continueRemove;
    for (var i = 0; i < divs.length; i++) {
      var style = window.getComputedStyle(divs[i]);
      if (style.backgroundImage) {
        var bimg = style.backgroundImage;
        if (
          bimg.indexOf("qiecdn") > 0 &&
          bimg.indexOf("upload") > 0 &&
          bimg.match(sickBackgroundImageRegex)
        ) {
          continueRemove = divs[i];
          break;
        }
      }
    }

    if (continueRemove) {
      continueRemove.style = null;
      console.log("烦人背景删除成功");
      successDiv = true;
      findSickLink(continueRemove);
    }
  }
})();
