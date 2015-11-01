
_cmd_define('/clean-rules/pre.js', function(_cmd_require, exports, module) {
module.exports = function(code) {
    code = code.replace(/<\/?(code|p|span|i|em)[^>]*>/gi, '');
    return '<code>' + code.replace(/^\s*[\n\r]+/, '').replace(/[\r\n]+\s*$/, '') + '</code>';
};
});
