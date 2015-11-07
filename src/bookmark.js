javascript: (function() {
    if (!window.__clipper) {
        var s = document.createElement('script');
        s.src = __inline('domain.conf') + 'link.js';
        document.getElementsByTagName('body')[0].appendChild(s);
    } else {
        window.__clipper.toggle();
    }
}()); 