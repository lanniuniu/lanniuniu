/**
 * Created by 懒牛牛 on 2017/1/4.
 */
/**
 * const声明一个只读常量。一旦声明，常量的值就不能改变。
 * const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值
 * 块级作用域 暂时性死区
 * 不可重复申明
 * @type {string}
 */
// 'use strict';//严格模式
const a = "hello";

/**
 * b申明了一个对象，const只是保证变量名指向的地址不变，并不保证该地址的数据不变
 * @type {{}}
 */
const b = {};
b.name = "liupeng";
b.play = function () {
    console.log(b.name);
};
b.play();

/**
 * 如果真的想将对象冻结，应该使用Object.freeze方法
 * @type {Object}
 */
const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
{
    'use strict';
    foo.prop = 123;
    console.log(foo.prop)
}
