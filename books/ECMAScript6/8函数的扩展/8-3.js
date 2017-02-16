/**
 * Created by 懒牛牛 on 2017/1/11.
 */
/**
 * name 属性
 * 返回该函数的函数名。
 */
function foo() {}
console.log(foo.name);

//如果将一个匿名函数赋值给一个变量，ES5 的name属性，会返回空字符串，而 ES6 的name属性会返回实际的函数名。
//Function构造函数返回的函数实例，name属性的值为anonymous。
//bind返回的函数，name属性值会加上bound前缀。
console.log(foo.bind({
    function(){
        "use strict";
        console.log('bind绑定');
    }
}).name);

console.log((new Function).name);//new Funciton(参数,...,函数code字符串（某些符号需要转义）// )
console.log('----------------');
/**
 * 箭头函数
 * 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
 */
//如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
let fun1 = (a,b)=>{
    a= a*a;
    b= b*b;
    return a+b;
};
console.log(fun1(2,3));

//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
var getTempItem = id => ({ id: id, name: "Temp" });
console.log(getTempItem(1));

//箭头函数可以与变量解构结合使用。
const FULL = ({first,second})=>first+'和'+second;
console.log(FULL({first:1,second:2}));
console.log('---------------');
// 箭头函数有几个使用注意点。
//
// （1）函数体内的this对象，就是“定义时”所在的对象，而不是“使用时”所在的对象。
//     箭头函数可以让里面的this，绑定定义时所在的作用域，而不是指向运行时所在的作用域
//
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
//
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
//
// （4）不可以使用yield命令，因此箭头函数不能用作Generator函数。

/**
 * ES6中函数实际上是功能完整的对象
 * @constructor
 */
function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => this.s1++, 1000);
    // 普通函数
    setInterval(function () {
        this.s2++;
    }, 1000);
}

var timer = new Timer();
setTimeout(() => console.log('s1: ', timer.s1), 3100);//3
setTimeout(() => console.log('s2: ', timer.s2), 3100);//0

//箭头函数同样可以嵌套

//尾调用优化
//指某个函数的最后一步是调用另一个函数。return f(x)
//尾调用只在严格模式下开启，且禁用caller/arguments














