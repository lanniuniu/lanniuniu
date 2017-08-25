/**
 * Created by 懒牛牛 on 2017/1/13.
 */
/**
 * Reflect对象和object类似  都是为了操作对象而提供的新的API
 * 方法和Proxy类似
 */
//Reflect.get(target, name, receiver)
// Reflect.get方法查找并返回target对象的name属性，如果没有该属性，则返回undefined。
var obj1 = {
    name:"刘鹏",
    age:20,
    get play(){
        "use strict";
        return this.name+'才'+this.age+'岁';
    }
};
console.log(Reflect.get(obj1,'play'));

//Reflect.set(target, name, value, receiver)
// Reflect.set方法设置target对象的name属性等于value。

//Reflect.has(obj, name) reflect.has方法对应name in obj里面的in运算符。

//Reflect.deleteProperty(obj, name)
// Reflect.deleteProperty方法等同于delete obj[name]，用于删除对象的属性。

//Reflect.construct(target, args)
// Reflect.construct方法等同于new target(...args)，这提供了一种不使用new，来调用构造函数的方法。

//Reflect.getPrototypeOf(obj)
// Reflect.getPrototypeOf方法用于读取对象的__proto__属性，对应Object.getPrototypeOf(obj)。

//Reflect.setPrototypeOf(obj, newProto)
// Reflect.setPrototypeOf方法用于设置对象的__proto__属性，对应Object.setPrototypeOf(obj, newProto)。

//Reflect.apply(func, thisArg, args)
// Reflect.apply方法等同于Function.prototype.apply.call(func, thisArg, args)，用于绑定this对象后执行给定函数。

// Reflect.defineProperty(target, propertyKey, attributes)
// Reflect.defineProperty方法基本等同于Object.defineProperty，用来为对象定义属性。

//Reflect.getOwnPropertyDescriptor(target, propertyKey)
// Reflect.getOwnPropertyDescriptor基本等同于Object.getOwnPropertyDescriptor，用于得到指定属性的描述对象，将来会替代掉后者

//Reflect.isExtensible (target)
// Reflect.isExtensible方法对应Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展。

//Reflect.preventExtensions(target)
// Reflect.preventExtensions对应Object.preventExtensions方法，用于让一个对象变为不可扩展。它返回一个布尔值，表示是否操作成功。

//Reflect.ownKeys (target)
// Reflect.ownKeys方法用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。

//
















