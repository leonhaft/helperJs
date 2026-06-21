// ==UserScript==
// @name         B站 Block
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  删除B站恶心的首页背景图片
// @author       You
// @match        *://tjyaoying.cn/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  const inte = setInterval(lookElements, 1000);
  findContainer();
  let loopCount = 0;
  let successHaixing = false;
  function lookElements() {
    if (successHaixing == false) {
      liveBanner();
    }

    loopCount++;
    console.log("循环次数", loopCount);
    if (successHaixing || loopCount > 20) {
      clearInte();
    }
  }

  function clearInte() {
    clearInterval(inte);
  }

  function liveBanner() {
    const bannerId = "494";
    document.querySelector("div");
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

  function findContainer() {
    // 选择要观察的目标节点
    const targetNode = document.querySelector(
      'div[class^="anchor-grid_anchor-card-wrap"]'
    );
    if (targetNode) {
      // 配置观察选项
      const config = {
        attributes: false, // 观察属性变动
        childList: true, // 观察目标节点的子节点的增加和删除
        subtree: false, // 观察所有后代节点
      };

      // 创建观察者对象
      const observer = new MutationObserver((mutationsList, observer) => {
        for (let mutation of mutationsList) {
          if (mutation.type === "childList") {
            console.log("A child node has been added or removed.");
          } else if (mutation.type === "attributes") {
            console.log(
              "The " + mutation.attributeName + " attribute was modified."
            );
          }
        }
      });

      // 开始观察目标节点
      observer.observe(targetNode, config);

      // later, you can stop observing
      // observer.disconnect();
    } else {
      console.log("未能找到匹配的DIV");
    }
  }
})();
