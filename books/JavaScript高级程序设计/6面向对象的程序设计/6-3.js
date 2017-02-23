/**
 * Created by 懒牛牛 on 2017/2/19.
 */
let publicFunc = require('../public');
/*
继承

接口继承和实现继承（javascript）
继承方式：原型链、借用构造函数、组合继承、原型式继承、寄生式、寄生组合式
 */

//组合继承

//组合创建对象Func1
function Func1(name) {
    this.name = name;
    this.colors = ['red','blue'];
}
Func1.prototype.sayName = function () {
    console.log(this.name);
};
//
function Func2(name, age) {
    //继承属性
    Func1.call(this,name);
    this.age = age;
}
//继承方法
Func2.prototype = new Func1();
Func2.prototype.constructor = Func1;
Func2.prototype.sayAge = function () {
    console.log(this.age);
};
//组合继承缺点：无论什么时候，都会调用两次超类型构造函数，一次在创建子类型原型，
// 另一次在子类型构造函数内部。子类型最终会包含超类型的全部实例，我不能不得不在调用子类型构造函数式时
//重写这些属性

// 最佳实践 创建：组合构造函数模式和原型模式 继承：组合继承















