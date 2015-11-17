
_cmd_define('/client/clean-rules/cnblogs_code.js', function(_cmd_require, exports, module) {
module.exports = function(code) {
    code = code.replace(/<\/?(code|div|a|p|span|i|em)[^>]*>/gi, '');
    return '<pre><code>' + code.replace(/^\s*[\n\r]+/, '').replace(/[\r\n]+\s*$/, '') + '</code></pre>';
};
});
