javascript: (function() {
    if (!window.__clipper) {
        var s = document.createElement('script');
        s.src = 'http://127.0.0.1/plugins/jianbaoV2/link.js?' + Math.random();
        document.getElementsByTagName('body')[0].appendChild(s);
    } else {
        window.__clipper.toggle();
    }
}());