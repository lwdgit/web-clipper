
_cmd_define('/client/clean-rules/crayon-syntax.js', function(_cmd_require, exports, module) {
module.exports = function(code) {
    var tmp;
    if (tmp = code.match(/<td class\="crayon-code">.*?<\/td>/mi)) {
        code = tmp[0];
    }
    code = code.replace(/<\/?(code|p|span|table|thead|tbody|td|tr)[^>]*>/mgi, '');
    code = code.replace(/<\/?(div)[^>]*>/mgi, function(match) {
        if (match.indexOf('crayon-line') > -1) {
            return '\n';
        } else {
            return '';
        }
    });
    return '<pre><code>' + code.replace(/^\s*[\n\r]+/, '').replace(/[\r\n]+\s*$/, '') + '</code></pre>';
};

});
