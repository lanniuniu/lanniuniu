/**
 * Created by 懒牛牛 on 2017/1/12.
 */
/**
 * 属性的简洁表示法
 * ES6允许直接写入变量和函数，作为对象的属性和方法
 */
function f(x, y) {
    return {x,y};
}
console.log(f(1,2));

//除了属性简写，方法也可以简写
var o = {
    method(){
        "use strict";
        return 'hello';
    }
};
console.log(o.method());
console.log('---------------');
//如果某个方法的值是一个Generator函数，前面需要加上星号。

/**
 * 属性名表达式
 * 方法一是直接用标识符作为属性名，方法二是用表达式作为属性名，这时要将表达式放在方括号之内。
 * 如果使用字面量方式定义对象（使用大括号）
 */
let var1 = 'foo';
let obj1 = {
    [var1]:true//[]中是可编译的表达式
};
console.log(obj1['foo']);//true
//属性名表达式与简洁表示法，不能同时使用，会报错。

//属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]
var var2 = {a:1};
const obj2 = {
    [var2]:'value2'
};
console.log(obj2);//{ '[object Object]': 'value2' }
















