(function () {
    var inte = setInterval(lookElements, 1000);
    var loopCount = 0;

    function lookElements() {
        var divs = document.getElementsByTagName('div');
        console.log('divs:' + divs.length);
        loopCount++;
        if (loopCount > 50) {
            clearInte();
        }
    }

    function clearInte() {
        clearInterval(inte);
    }
})();