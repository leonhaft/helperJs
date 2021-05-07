(function () {
    var inte = setInterval(lookElements, 1000);
    var loopCount = 0;
    var successDiv = false;
    var successLink = false;

    function lookElements() {
        if (successDiv == false) {
            successDiv = findSickDiv();
        }
        if (successLink == false) {
            successLink = findsickLink();
        }
        loopCount++;
        if ((successDiv && successLink) || loopCount > 20) {
            clearInte();
        }
    }

    function clearInte() {
        clearInterval(inte);
    }

    function findsickLink() {
        var links = document.getElementsByTagName('a');
        var continueLinkRemove;
        for (var i = 0; i < links.length; i++) {
            var element = links[i];
            if (!element.href) {
                continueLinkRemove = element;
                break;
            }
        };
        if (continueLinkRemove) {
            continueLinkRemove.remove();
            console.log("恶心链接删除成功");
            return true;
        }

        return false;
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
            continueRemove.remove();
            console.log("烦人背景删除成功");
            return true;
        }

        return false;
    }
})();