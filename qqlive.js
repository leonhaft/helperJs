(function () {
    var inte = setInterval(lookElements, 1000);
    var loopCount = 0;
    var successDiv = false;

    function lookElements() {
        if (successDiv == false) {
            findSickDiv();
        }

        loopCount++;
        if ((successDiv && successLink) || loopCount > 20) {
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
            if (currentNode.nodeName === 'A') {
                continueLinkRemove = currentNode;
                break;
            }
        }

        if (continueLinkRemove) {
            continueLinkRemove.remove();
            console.log("恶心链接删除成功");
        }
    }

    function findSickDiv() {
        var divs = document.getElementsByTagName('div');
        console.log(divs.length)
        var continueRemove;
        for (var i = 0; i < divs.length; i++) {
            var style = window.getComputedStyle(divs[i]);
            if (style.backgroundImage) {
                if (style.backgroundImage.indexOf('qiecdn') > 0) {
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