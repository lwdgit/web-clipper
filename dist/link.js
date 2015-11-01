(function(window, document) {
    var host = 'http://lwdgit.github.io';
    var conf = {
        origin: host,
        base: host + '/web-clipper/dist/'
    };

    window.addEventListener('message', function(e) {
        if (e.origin === conf.origin) {
            if (e.data === 'close') {
                CLIP.toggle();
            } else if (e.data === 'clip') {
                CLIP.doClip();
            }
        }
    }, false);

    var CLIP = {
        main_layer: null,
        main_frame: null,
        toggle: function() {
            // console.log('toggle');
            if (!this.main_layer) {
                this.createClipDiv();
            } else {
                this.main_layer.style.display = this.main_layer.style.display === 'none' ? 'block' : 'none';
            }
        },
        loadLib: function() {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = conf.base + 'bundle.js';
            document.body.appendChild(script);
            script.onload = script.onreadystatechange = function() {
                CLIP.core = _cmd_require('/lib/readability.js');
                CLIP.core.setCleanRules([function() {console.log(arguments)}]);
            }
        },
        createClipDiv: function() {
            var div = document.createElement('div');
            div.style.cssText = 'position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 9999999999999; display: block; background: #fff;';
            div.id = 'clipper_main_layer';
            div.className = 'clipper-main-layer';
            document.getElementsByTagName('body')[0].appendChild(div);
            this.main_layer = div;
            this.appendIFrame();
        },
        appendIFrame: function() {
            var iframe = document.createElement('iframe');
            iframe.src = conf.base + 'editor/';
            iframe.style.cssText = 'width: 100%;height: 100%';
            this.main_frame = iframe;
            this.main_layer.appendChild(iframe);
        },
        doClip: function() {
            var div = document.createElement('div');
            div.innerHTML = document.body.innerHTML;

            CLIP.core.prepDocument(document, div);
            var content = CLIP.core.grabArticle(document, div);
            CLIP.post({
                href: window.location.href,
                content: content,
                title: document.title
            });
        },
        post: function(obj) {
            this.main_frame.contentWindow.postMessage(obj, '*');
        },
        core: {
            exports: {}
        }
    };

    CLIP.createClipDiv();
    CLIP.loadLib();

    window.__clipper = CLIP;
}(window, document));
