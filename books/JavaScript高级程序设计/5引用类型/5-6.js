/**
 * Created by 懒牛牛 on 2017/2/17.
 */
let publicFunc = require('../public');
/*
单体内置对象

由ECMAScript实现提供的、不依赖于宿主环境的对象。这些对象在ECMAScript程序执行之前已经存在
如Object Array String Global Math等
 */

/*
Global对象

URI（uniform resource identifiers）统一资源标识符 编码方法（强烈推荐使用）
encodeURI() encodeURIComponent() 前一个对整体编码 而后一个对某一段编码
decodeURI() decodeURIComponent()

eval() ECMAScript解析器
在执行用户输入数据时小心使用，可能发生代码注入

EvalError RangeError ReferenceError SyntaxError TypeError URIError

window
 */

/*
Math对象

属性
Math.E
Math.LN10
Math.LN2
Math.LOG2E
Math.LOG10E
Math.PI
Math.SQRT1_2
Math.SQRT2
 */
console.log(Math.SQRT2);
publicFunc.cutOff();

/*
min() max()
 */
let arr1 = [1,2,3,4,5,6];
let res1 = Math.max.apply(Math,arr1);
console.log(res1);

/*
舍入方法
Math.ceil() 向上
Math.floor()向下
Math.round()四舍五入
 */

/*
random()
 */

/*
更多的数学方法
 */











