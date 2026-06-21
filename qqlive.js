(function () {
  var inte = setInterval(lookElements, 1000);
  var loopCount = 0;
  var successDiv = false;
  var sickBackgroundImageRegex = /\w{10,}.jpg/g;
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
    var continueLinkRemove = [];
    for (var i = 0; i < container.childNodes.length; i++) {
      var currentNode = container.childNodes[i];
      if (currentNode.nodeName === "A") {
        continueLinkRemove.push(currentNode);
      }
    }
    console.log("找到链接的数量", continueLinkRemove.length);
    if (continueLinkRemove) {
      for (var i = 0; i < continueLinkRemove.length; i++) {
        
        console.log("删除恶心链接",continueLinkRemove[i].href);
        continueLinkRemove[i].remove();
      }
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
      const styleDelete = continueRemove.style;
      continueRemove.style = null;
      console.log("烦人背景删除成功", styleDelete);
      successDiv = true;
      findSickLink(continueRemove);
    }
  }
})();
