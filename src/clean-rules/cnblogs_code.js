module.exports = function(code) {
    code = code.replace(/<\/?(code|p|span|i|em)[^>]*>/gi, '');
    return '<code>' + code.replace(/^\s*[\n\r]+/, '').replace(/[\r\n]+\s*$/, '') + '</code>';
};