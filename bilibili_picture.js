(function () {
  const hostname = document.location.hostname;

  const inte = setInterval(lookElements, 1000);
  let loopCount = 0;
  let successBilibili = false;
  let successHaixing = true;
  function lookElements() {
    if (hostname.indexOf("bilibili") >= 0) {
      if (successBilibili == false) {
        findSickPicture();
      }
    }

    // if (hostname.indexOf("tjyaoying") >= 0) {
    //   if (successHaixing == false) {
    //     liveBanner();
    //   }
    // }

    loopCount++;
    if ((successBilibili && successHaixing) || loopCount > 20) {
      clearInte();
    }
  }

  function clearInte() {
    clearInterval(inte);
  }

  function findSickPicture() {
    const element = document.getElementById("bili-header-banner-img");

    if (element) {
      element.remove();
      console.log("烦人背景删除成功");
      successBilibili = true;
      styleBanner();
    }
  }
  function styleBanner() {
    var element = document.getElementsByClassName("bili-header__banner");
    if (element && element.length == 1) {
      const banner = element[0];
      banner.setAttribute("style", "min-height:55px;height:55px;");
    }
  }

  function liveBanner() {
    const bannerId = "494";
    const links = document.getElementsByTagName("a");
    for (const linkItem of links) {
      const itemHref = linkItem.getAttribute("href");
      if (itemHref && itemHref.indexOf(bannerId) > -1) {
        linkItem.parentNode.remove();
        successHaixing = true;
        console.log("海星播主删除成功");
        break;
      }
    }
  }
})();
