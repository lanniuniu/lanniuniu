/**
 * Created by 懒牛牛 on 2017/1/6.
 */

/**
 * 新的数据类型Symbol
 * @type {Symbol}
 * 独一无二的值，用于防冲突，类字符串
 */
let s = Symbol();
console.log(typeof s);

// Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，
// 主要是为了在控制台显示，或者转为字符串时，比较容易区分。
var s1 = Symbol("姓名");
var s2 = Symbol("班级");
console.log(s1,s2);

//参数相同的两个Symbol是不等的
//Symbol值不能与其他类型的值进行运算，会报错。

//Symbol值可以显式转为字符串。
// console.log(s1+'连接字符串');//error
console.log(s1.toString()+'连接字符串');

//Symbol值也可以转为布尔值，但是不能转为数值。
console.log(!Boolean(s1));
// console.log(Number(s1));//error

