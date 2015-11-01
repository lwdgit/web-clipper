var cleanRules = {
    '.cnblogs_code': require('../clean-rules/cnblogs_code.js'),
    '.syntaxhighlighter': require('../clean-rules/syntaxhighlighter.js'),
    '.dp-highlighter': require('../clean-rules/dp-highlighter.js'),
    '.prettyprint': require('../clean-rules/prettyprint.js')
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