/**
 * Created by 懒牛牛 on 2017/2/19.
 */
let publicFunc = require('../public');
/*
函数声明和函数表达式

函数声明
函数声明提升：执行代码前会先读取函数声明 所以引用函数可以在函数之前
函数表达式：无提升，必须在之后

函数重载使用匿名函数来实现
 */

/*
递归
非严格模式下使用arguments.callee来递归函数
严格模式下用命名函数式来递归
 */
let fun1 = (function f(num) {
    if (num<=1){
        return 1;
    }else {
        return num*f(num-1);
    }
});
console.log(fun1(5));
















