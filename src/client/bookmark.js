javascript:(function() {
    if (!window.__clipper) {
        var s = document.createElement('script');
        s.src = __inline('client.conf') + 'link.js?debug';
        document.getElementsByTagName('body')[0].appendChild(s);
    } else {
        window.__clipper.toggle();
    }
}()); 