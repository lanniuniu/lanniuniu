/**
 * Created by 懒牛牛 on 2017/2/17.
 */
let publicFunc = require('../public');
/*
Function类型
每个函数都是Function类型的实例，函数名也是一个指向函数对象的指针，不对与函数绑定
3种方式定义函数
function(){} 函数表达式 构造函数（两次解析代码，影响性能，不推荐）
 */

//由于函数名仅仅是指向函数的指针，所以一个函数可能有多个名字
function func1(value) {
    console.log(`love ${value}!`)
}
let func2 = func1;
func2('qinqin');
func1 = null;//销毁func1
// func1('qinqin');//报错
func2('qinqin');
publicFunc.cutOff();

/*
函数声明和函数表达式

函数声明有函数声明提升，可以在之前调用，而表达式不行
 */

/*
作为值的函数
可以作为参数把一个函数传给另一个参数，也可以把一个函数作为另一个函数的结果返回
 */
function func3(name) {
    console.log(`love ${name}!`);
}
function callSomeFunction(func, argv) {
    return func(argv);
}
let res1 = callSomeFunction(func3,'qinqin');
publicFunc.cutOff();

/*
函数内部属性
arguments this
arguments.callee 指针 指向arguments的函数 经典案例：递归函数消耦
 */
function fun4(num) {
    if (num<1){
        return 1;
    }else {
        return num * arguments.callee(num-1);
    }
}
console.log(fun4(5));
publicFunc.cutOff();

/*
this 指函数执行的环境对象
caller 保存着调用当前函数的函数的引用，就是那个函数引用它的
 */

/*
函数属性和方法

属性:length prototype
方法: apply() call() 两个方法的第一个参数都是传入在其中运行的作用域，
    第二个参数apply()传入参数数组,call传入参数确定的值
都用于扩充函数赖以运行的作用域，且对象与方法消耦

bind() 创建一个函数的实例，其this值会被绑定到传给bind()函数的值

toString() toLocaleString() valueOf()都返回函数的代码
 */
global.hoster = 'lanniuniu';
let love = { hoster: 'qinqin'};
function sayLove() {
    console.log(`love ${this.hoster}`);
}
sayLove();
sayLove.call(this);
sayLove.call(global);
sayLove.call(love);
publicFunc.cutOff();
let love1 = sayLove.bind(love);
let love2 = sayLove.bind(this);
let love3 = sayLove.bind(global);
love1();
love2();
love3();








