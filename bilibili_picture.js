(function () {
  var inte = setInterval(lookElements, 1000);
  var loopCount = 0;
  var successDiv = false;
  function lookElements() {
    if (successDiv == false) {
      findSickPicture();
    }

    loopCount++;
    if (successDiv || loopCount > 20) {
      clearInte();
    }
  }

  function clearInte() {
    clearInterval(inte);
  }

  function findSickPicture() {
    var element = document.getElementById("bili-header-banner-img");

    if (element) {
      element.remove();
      console.log("烦人背景删除成功");
      successDiv = true;
      styleBanner();
    }
  }
  function styleBanner(){
    var element=document.getElementsByClassName("bili-header__banner");
    if(element&&element.length==1){
      const banner=element[0];
      banner.setAttribute("style","min-height:65px;")
    }
  }
})();
