(function (modules) {
            function require(filename) {
                var fn = modules[filename]
                var module = {exports: {}}
                fn(require, module, module.exports)
                return module.exports
            }
            require('/Users/liupeng/work/ifYou/online-course/玩转webpack/simple_webpack/src/index.js')
        })({'/Users/liupeng/work/ifYou/online-course/玩转webpack/simple_webpack/src/index.js': function (require, module, exports) {"use strict";

var _greeting = require("./greeting.js");

document.write((0, _greeting.greeting)('qinqin'));},'./greeting.js': function (require, module, exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greeting = greeting;
function greeting(name) {
  return "hello " + name;
}},})