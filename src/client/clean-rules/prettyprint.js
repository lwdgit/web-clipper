module.exports = function(code) {
    code = code.replace(/<ul class\="pre-numbering">.*?<\/ul>/im, '');
    code = code.replace(/<(\/?(ol|ul)|li)[^>]*>/gi, '');
    code = code.replace(/<\/li>/gi, '\n');
    return '<code>' + code + '</code>';
};