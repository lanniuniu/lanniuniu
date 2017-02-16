/**
 * Created by 懒牛牛 on 2017/1/10.
 */
/*
 二进制和八进制表示法
 二进制 0b 八进制 0o
 如果要将0b和0o前缀的字符串数值转为十进制，要使用Number方法。
 */
let num1 = 0b10;
let num2 = 0o71;
console.log(`二进制${num1} 八进制${num2} 十进制${Number(num1)} 十进制${Number(num2)}`);

/*
 Number.isFinite(), Number.isNaN()
 */

//Number.isFinite()用来检查一个数值是否为有限的（finite）。
console.log(Number.isFinite(99999999999999999999999999999999999999999999999999));
console.log(Number.isFinite(0.0000000000000000000000000000000000000000000000001));
console.log(Number.isFinite(NaN));//not a number
console.log(Number.isFinite(Infinity));//正无穷大的数值
console.log(Number.isFinite(-Infinity));
console.log('------------------');

//Number.isNaN()用来检查一个值是否为NaN。
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(15));
console.log(Number.isNaN(false));
console.log(Number.isNaN('15'));
console.log(Number.isNaN(9/NaN));
console.log(Number.isNaN('true'/0));
console.log(Number.isNaN('true'/'true'));//  /是除号的意思


//自执行匿名函数：
// 常见格式：(function() { /* code */ })();
//包围函数（function(){})的第一对括号向脚本返回未命名的函数，随后一对空括号立即执行返回的未命名函数，括号内为匿名函数的参数。
//作用：可以用它创建命名空间，只要把自己所有的代码都写在这个特殊的函数包装内，
// 那么外部就不能访问，除非你允许(变量前加上window，这样该函数或变量就成为全局)
// 匿名 和 自动执行
//其他写法
// (function () { /* code */ } ());
// !function () { /* code */ } ();
// ~function () { /* code */ } ();
// -function () { /* code */ } ();
// +function () { /* code */ } ();
(function (a) {
    console.log(a) ;
})(111);

