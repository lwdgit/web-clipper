
_cmd_define('/lib/clean.js', function(_cmd_require, exports, module) {
var cleanRules = {
    '.cnblogs_code': _cmd_require('/clean-rules/cnblogs_code.js'),
    '.syntaxhighlighter': _cmd_require('/clean-rules/syntaxhighlighter.js'),
    '.dp-highlighter': _cmd_require('/clean-rules/dp-highlighter.js'),
    '.prettyprint': _cmd_require('/clean-rules/prettyprint.js'),
    '.crayon-syntax': _cmd_require('/clean-rules/crayon-syntax.js')
};


var clean = function(e, selector) {
    for(var rule in cleanRules) {
        var el, len;
        if (len = (el = e.querySelectorAll(rule)).length) {
            while(len--) {
                el[len].innerHTML = cleanRules[rule](el[len].innerHTML);
            }
        }
    }
};

module.exports = function(e) {
    e && clean(e);
};
});
