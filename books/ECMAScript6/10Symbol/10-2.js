/**
 * Created by 懒牛牛 on 2017/1/6.
 */
/**
 * 作为属性名的Symbol
 * @type {Symbol}
 * 对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
 */
var mySymbol = Symbol('name');
var a = {};
a[mySymbol] = 'liupeng';
console.log(a[mySymbol]);
a[mySymbol] = 'qinqin';
console.log(a[mySymbol]);

var b = {
    [mySymbol]:'liupeng'
};
console.log(b[mySymbol]);

//Symbol值作为对象属性名时，不能用点运算符。
// 因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，
// 导致a的属性名实际上是一个字符串，而不是一个Symbol值。
var mySymbol2 = Symbol();
var c = {};

c.mySymbol2 = 'Hello!';
console.log(c[mySymbol2]); // undefined
console.log(c['mySymbol2']); // "Hello!"

//所以，在对象的内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中。
var s = Symbol();
let obj = {
    [s](arg) { console.log(arg) }
};
obj[s]('入参');

//Symbol值作为属性名时，该属性是公开属性，不是私有属性

//可以用来消除魔术字符串
// 魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。