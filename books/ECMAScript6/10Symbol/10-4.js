/**
 * Created by 懒牛牛 on 2017/1/6.
 */
/**
 * Symbol.for()和Symbol.keyFor()
 * @type {Symbol}
 */
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(s1 === s2) // true

//Symbol.for为Symbol值登记的名字，是全局环境的，可以在不同的 iframe 或 service worker 中取到同一个值。

//Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。
var s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"
var s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined