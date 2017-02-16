/**
 * Created by 懒牛牛 on 2017/1/18.
 */
/**
 * class
 * JavaScript语言的传统方法是通过构造函数，定义并生成新对象
 */
function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function () {
    return '('+this.x +','+this,y+ ')';
};
var p = new Point(1,2);
console.log(p);
//如下
// class Point {
//     constructor(){
//         // ...
//     }
//     toString(){
//         // ...
//     }
//     toValue(){
//         // ...
//     }
// }
//
// // 等同于
//
// Point.prototype = {
//     toString(){},
//     toValue(){}
// };

class B{}
let b = new B();
console.log(b.constructor === B.prototype.constructor);
//prototype对象的constructor属性，直接指向“类”的本身
console.log(B.prototype.constructor === B);

//Object.assign方法可以很方便地一次向类添加多个方法。
Object.assign(B.prototype,{
    way1(){console.log('用Object.assign()添加的方法哦~')},
    way2(){}
});
b.way1();





















