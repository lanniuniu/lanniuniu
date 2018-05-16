// 可选属性的接口和普通的接口定义差不多，只是在可选属性名字的后面加个问号
// 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。
function createPhone(phone) {
    var _a = phone.color, color = _a === void 0 ? 'red' : _a, width = phone.width; // 设置默认值
    console.log("a " + color + " phone is " + width + "cm");
    return true;
}
createPhone({ width: 100 });
var func1; // 声明func1的函数类型要和接口func定义的一样
func1 = function (color, width) {
    return "a " + color + " phone is " + width + "cm";
};
console.log(func1('red', 100)); // 若传参类型不对，则报错
var array3;
array3 = ['1', '2'];
console.log(array3);
var colok = /** @class */ (function () {
    function colok(h, m) {
    }
    return colok;
}());
var clock1 = {};
clock1.color = "blue";
clock1.currentTime = new Date();
console.log(clock1);
//一个接口可以继承多个接口，创建出多个接口的合成接口。
// 混合类型 一个对象可以同时做为函数和对象使用，并带有额外的属性。
// 接口继承类
