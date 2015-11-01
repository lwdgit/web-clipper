fis.set('project.ignore', ['editor/umeditor/**']);
fis.hook('relative')
fis.match('**.css', {
    relative: true
})
//fis.extend('compress')

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

