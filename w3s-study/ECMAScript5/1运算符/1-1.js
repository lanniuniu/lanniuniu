/**
 * Created by 懒牛牛 on 2017/2/14.
 */
// 一元运算符只有一个参数，即要操作的对象或值。它们是 ECMAScript 中最简单的运算符。
// delete 运算符删除对以前定义的对象属性或方法的引用。
// delete 运算符不能删除开发者未定义的属性和方法。例如，下面的代码将引发错误：
var object1 = new Object();
object1.name = 'qinqin';
console.log('love'+object1.name);
delete object1.name;
console.log('love'+object1.name);
console.log('-------------------');

//void
// void 运算符对任何值返回 undefined。
// 没有返回值的函数真正返回的都是 undefined。
// 前增量/前减量运算符
// 后增量/后减量运算符
// 一元加法和一元减法

// 位运算符是在数字底层（即表示数字的 32 个数位）进行操作的。
// 位运算 NOT
// 位运算 NOT 由否定号（~）表示，它是 ECMAScript 中为数不多的与二进制算术有关的运算符之一。
// 位运算 NOT 是三步的处理过程：
// 把运算数转换成 32 位数字
// 把二进制数转换成它的二进制反码
// 把二进制数转换成浮点数

// 位运算 AND(&)  OR(|) XOR(^)
// 左移运算(<<) 有符号右移运算(>>) 无符号右移运算(>>>)
















