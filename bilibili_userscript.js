// ==UserScript==
// @name         B站 Block
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  删除B站恶心的首页背景图片
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