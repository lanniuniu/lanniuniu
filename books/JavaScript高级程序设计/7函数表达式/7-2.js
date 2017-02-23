/**
 * Created by 懒牛牛 on 2017/2/19.
 */
let publicFunc = require('../public');
/*
闭包
概念：指有权访问另一个函数作用域中的变量的函数
 */

/*
闭包与变量
 闭包只能取得包含函数中的任何变量到最后一个值
 闭包保存的是整个变量对象，而不是某个特殊的变量
 */
function fun1() {
    let result = new Array();
    for(var i = 0;i<10;i++){
        result[i] = function () {
            return i;
        }
    }
    return result;
}
console.log(fun1()[0]());//10

//通过创建另一个匿名函数强制闭包
function fun2() {
    var result = new Array();
    for(var i=0;i<10;i++){
        result[i]=function (num) {
            return function () {
                return num;
            };
        }(i);
    }
    return result;
}
console.log(fun2()[1]());
//匿名函数的执行环境具有全局性，this通常指向全局对象

//内存泄漏
//当闭包的作用域链中保存一个html元素，那么就无法销毁
function fun3() {
    var element = document.getElementById("someid");
    element.onclick = function () {//循环引用，element引用数至少为一，所占内存永远不被回收
        console.log(element.id);
    }
}
//消除内存泄漏
function fun4() {
    var element = document.getElementById("someid");
    var id = element.id;
    element.onclick = function () {
        console.log(id);
    };
    element = null;
}

//使用闭包可以模仿块级作用域
//闭包可以创建私有变量和共有特权方法和变量








