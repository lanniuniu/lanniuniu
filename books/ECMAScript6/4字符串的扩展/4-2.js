/**
 * Created by 懒牛牛 on 2017/1/5.
 */
//normalize() 将字符的不同表示方法统一为同样的形式，这称为Unicode正规化。
'\u01D1'.normalize() === '\u004F\u030C'.normalize()
// true

//includes(), startsWith(), endsWith() ES6新增的三个方法
//ES5indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中,s包含b
var s = "hello world";
var b = "world";
s.indexOf(b);

// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部

s.includes(b);
b.startsWith('w');
b.endsWith('d');

//可以有第二个参数，表示起始位置
s.startsWith(" ",5);
// 使用第二个参数n时，endsWith的行为与其他两个方法有所不同。
// 它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束
s.endsWith('hello', 5); // true

