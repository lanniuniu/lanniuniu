/**
 * Created by 懒牛牛 on 2017/1/7.
 */
/**
 * RegExp 是正则表达式的缩写。
 * RegExp 对象用于存储检索模式。
 * 通过 new 关键词来定义 RegExp 对象
 * RegExp 对象有 3 个方法：test()、exec() 以及 compile()。
 * @type {RegExp}
 */

var patt1 = new RegExp('l');

//test()方法检索字符串中的指定值。返回值是 true 或 false。
console.log(patt1.test('hello world!'));

//exec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
console.log(patt1.exec('hello world!'));
console.log('----------分割线---------');

//向 RegExp 对象添加第二个参数，以设定检索。例如，如果需要找到所有某个字符的所有存在，则可以使用 "g" 参数 ("global")。
var patt2 = new RegExp('l','g');
var results = '';
while (results != null){
    results = patt2.exec('hello world!');
    console.log(results);
}
console.log('----------分割线---------');

// compile() 方法用于改变 RegExp。
// compile() 既可以改变检索模式，也可以添加或删除第二个参数。
patt2.compile('s');
console.log(patt2.test('hello world!'));