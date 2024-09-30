(function () {
  var inte = setInterval(lookElements, 1000);
  var loopCount = 0;
  var successDiv = false;
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

  function findSickDiv() {
    var element = document.getElementById("bili-header-banner-img");

    if (element) {
      element.remove();
      console.log("烦人背景删除成功");
      successDiv = true;
    }
  }
})();
