
module.exports = function(code) {
    if (!code.trim()) {
        return code;
    }
    code = code.replace(/[\s]+/g, ' ');
    code = code.replace(/<td class="gutter"[\w\W]*?<\/td>/gi, '');
    code = code.replace(/<a.*?<\/a>/gi, '');
    code = code.replace(/<\/?(code|p|span|table|thead|tbody|td|tr)[^>]*>/gi, '');
    code = code.replace(/<\/?(div)[^>]*>/mgi, function(match) {
        if (match.indexOf('line number') > -1) {
            return '\n';
        } else {
            return '';
        }
    });
    return '<pre><code>' + code.replace(/^\s*[\n\r]+/, '').replace(/[\r\n]+\s*$/, '') + '</code></pre>';
}
