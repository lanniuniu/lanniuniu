var _this = this;
// 函数类型——包括参数类型和返回值类型 =>之前是参数类型 =>之后是返回值类型
var func1 = function (x, y) { return x + y; };
// 可选参数和默认参数 可选参数必须跟在必须参数后面。默认值共享参数类型
var fun2 = function (first, second) {
    if (first === void 0) { first = 'liu'; }
    return first + " love " + second;
};
console.log(fun2(undefined, 'dai'));
// 剩余参数
var fun3 = function (first) {
    if (first === void 0) { first = 'liu'; }
    var andSoOn = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        andSoOn[_i - 1] = arguments[_i];
    }
    return "" + typeof andSoOn.join(' ');
};
console.log(fun3('liu', '1', '2', '3'));
// this
var me = 'niu';
var a = {
    me: 'liu',
    func4: function (x) {
        console.log(_this);
        return _this.me + " love " + x;
    },
    func5: function (x) {
        console.log(this);
        return this.me + " love " + x;
    }
};
console.log(a.func4('dai'));
console.log(a.func5('dai'));
