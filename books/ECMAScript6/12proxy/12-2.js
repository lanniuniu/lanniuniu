/**
 * Created by 懒牛牛 on 2017/1/13.
 */
/**
 * Proxy 实例的方法
 * 对12-1的方法进行详细举例
 */

//get()  用于拦截某个属性的读取操作
var person = {
    name : '刘鹏'
};
var proxy1 = new Proxy(person,{
    get: function (target, property) {
        if (property in target){//in关键字 1.For...In 声明用于对数组或者对象的属性进行循环/迭代操作。in前面是键
            // 2.单独使用判断对象是否为数组/对象的元素/属性：
            // 格式：（变量 in 对象）......注意，，，
            //当“对象”为数组时，“变量”指的是数组的“索引”；
            // 当“对象”为对象时，“变量”指的是对象的“属性”，而不是属性值
            return target[property];
        }else {
            throw new ReferenceError(`Property${property} 不存在`)
        }
    } 
});
console.log(proxy1.name);
// console.log(proxy1.age);
console.log('--------------');
//get()方法可以继承
var obj1 = Object.create(proxy1);
console.log(proxy1.name);
console.log('--------------');
//下面的例子使用get拦截，实现数组读取负数的索引。
function createArray(...elements) {
    let handler = {
        get(target, propKey, receiver) {
            console.log(target);
            console.log(propKey);
            // console.log(receiver)

            let index = Number(propKey);
            if (index < 0) {
                propKey = String(target.length + index);
            }
            return Reflect.get(target, propKey, receiver);
        }
    };

    let target = [];
    target.push(...elements);
    return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');
console.log(arr[-1]);
console.log('-------------');

//以下是各种方法用于拦截或代理

//set()   拦截某个属性的赋值操作。

//apply() 拦截函数的调用、call和apply操作。

//has()
// has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符。

//construct()  拦截new命令

//deleteProperty() 拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除。
//defineProperty方法拦截了Object.defineProperty操作。
// getOwnPropertyDescriptor方法拦截Object.getOwnPropertyDescriptor，返回一个属性描述对象或者undefined。
//getPrototypeOf方法主要用来拦截Object.getPrototypeOf()运算符，以及其他一些操作。
//如Object.prototype.__proto__
//         Object.prototype.isPrototypeOf()
//         Object.getPrototypeOf()
//         Reflect.getPrototypeOf()
//         instanceof

//isExtensible方法拦截Object.isExtensible操作。

//ownKeys方法用来拦截以下操作。
//         Object.getOwnPropertyNames()
//         Object.getOwnPropertySymbols()
//         Object.keys()

// preventExtensions方法拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值。

//setPrototypeOf方法主要用来拦截Object.setPrototypeOf方法。











