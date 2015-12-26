// ==UserScript==
// 请将本文件拖至chrome拓展管理器中安装
// @name         web clipper
// @namespace    https://lwdgit.github.io/web-clipper/
// @version      0.1.0
// @description  web clipper
// @author       lwdgit
// @grant        none
// ==/UserScript==

(function() {
    function load() {
        if (!top.__clipper) {
            var s = document.createElement('script');
            s.src = "//lwdgit.github.io/web-clipper/dist/client/" + 'link.js?debug';
            document.getElementsByTagName('body')[0].appendChild(s);
        } else {
            top.__clipper.toggle();
        }
    }

    window.addEventListener('keyup', function(e) {
        if (e.keyCode === 90 && e.shiftKey && e.ctrlKey) { //ctrl + shift + z
            load();
        }
    }, false);
}());
