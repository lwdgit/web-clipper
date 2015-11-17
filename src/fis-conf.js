fis.set('project.exclude', ['editor/umeditor/**']);
fis.set('project.include', ['editor/umeditor/*', 'editor/umeditor/themes/**']);

fis.hook('relative')
fis.match('**.css', {
    relative: true
})
fis.match('editor/index.html', {
    isHtmlLike: false
})

//fis.extend('compress')

fis.match('bookmark.js', {
    optimizer: fis.plugin('uglify-js')
})

fis.hook('cmdpack');
fis.match('clean-rules/**', {
    cmdpack: true,
    packTo: 'bundle.js'
});
fis.match('lib/**.js', {
    cmdpack: true,
    packTo: 'bundle.js',
    packOrder: 100
});

fis.media('github')
.match('domain.conf', {
    parser: function(file, content) {
        return 'http://lwdgit.github.io/web-clipper/dist/'
    }
})