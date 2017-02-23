/**
 * Created by 懒牛牛 on 2017/2/19.
 */
let publicFunc = require('../public');
/*
创建对象
对象字面量和object构造函数来创建单个对象 缺点：使用同一个接口创建很多对象 会产生大量重复代码

工厂模式 构造函数模式 原型模式 组合使用构造函数模式和原型模式  动态原型模式 寄生构造函数模式 稳妥构造函数模式
 */

//工厂模式 无法知道一个对象的类型
function createPerson(name, age) {
    let o = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function () {
        console.log(this.name);
    };
    return o ;
}
let obj1 = createPerson('qinqin',18);

//构造函数模式
//定义在全局对象中，自定义了“引用类型”
//缺点：每个方法都要在每个实例中创建一遍
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(this.name)
    }
}
let obj2 = new Person('qinqin',18);

//原型模式
//读取属性先查询实例，若没有查询原型对象，所以赋值同名属性会屏蔽原型的属性，可以通过delete来解除屏蔽
function Person2() {

}
Person.prototype.name = 'qinqin';
Person.prototype.age = 18;
Person.prototype.sayName = function () {
    console.log(this.name);
};
let obj3 = new Person2();
let obj4 = new Person2();
console.log(obj3.sayName==obj4.sayName);//true

//isPrototypeOf() 判断是否存在prototype关系
//getPrototypeOf() 返回prototype的值
//hasOwnProperty() 判断是否是实例的属性

//原型与in操作符in
//in 单独使用返回boolean 判断对象是否能访问给定属性，实例和原型都要查找
//与hasOwnProperty()配合使用能判断是否是实例还是原型
//for in枚举了原型和实例中所有可以枚举的属性（enumerable=true）
//Object.keys() 取得对象上所有可以枚举的实例属性
//Object.getOwnPropertyNames() 获取所有实例，不论是否可以枚举

//更简单的原型语法
function Person3() {

}
Person3.prototype = {
    constructor:Person3,//如果不加这个，constructor不会指向Person3了，指向Object构造函数
    //但原生的constructor不可枚举，可以使用Object.defineProperty()重设枚举性
    name:'qinqin',
    age:18
};
//重写原型会切断现有原型和任何之前已经存在的对象实例，他们引用的仍然是最初的原型

//原生对象的原型重构 （不推荐）
//原型对象的问题：共享性。若两个实例的相同属性想设置为不同，那么就束手无策

// 组合使用构造函数模式和原型模式 （最广泛，认同度最高的一种创建自定义类型的方法）
function Person4(name, age) {
    this.name = name;
    this.age = age;
}
Person4.prototype = {
    constructor:Person4,
    sayName:function () {
        console.log(this.name)
    }
};










