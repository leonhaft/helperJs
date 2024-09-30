// ==UserScript==
// @name         QQ Live Block
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  删除企鹅直播讨厌的F1背景
// @author       You
// @match        *://*.bilibili.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://cdn.jsdelivr.net/gh/leonhaft/helperjs/bilibili_picture.js";
    document.head.appendChild(s);

})();