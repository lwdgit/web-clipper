fis.set('project.exclude', ['client/editor/umeditor/**']);
fis.set('project.include', ['client/editor/umeditor/*', 'client/editor/umeditor/themes/**']);

fis.hook('relative')
fis.match('**.css', {
    relative: true
})
fis.match('client/editor/index.html', {
    isHtmlLike: false,
    isJsLike: true
})

//fis.extend('compress')

fis.match('client/bookmark.js', {
    optimizer: fis.plugin('uglify-js')
})

fis.hook('cmdpack');
fis.match('client/clean-rules/**', {
    cmdpack: true,
    packTo: 'client/bundle.js'
});
fis.match('client/lib/**.js', {
    cmdpack: true,
    packTo: 'client/bundle.js',
    packOrder: 100
});

fis.config.set('port', 8080);
fis.media('github')
.match('client/client.conf', {
    parser: function(file, content) {
        return '//lwdgit.github.io/web-clipper/dist/client/';
    }
})
.match('client/server.conf', {
    parser: function(file, content) {
        return '//wenblog.vipsinaapp.com/plugins/web-clipper/';
    }
})
