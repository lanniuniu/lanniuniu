/**
 * Created by 懒牛牛 on 2017/1/6.
 */
/**
 * Symbol的内置值
 */

//MyClass是一个类，new MyClass()会返回一个实例。
// 该实例的Symbol.hasInstance方法，会在进行instanceof（判断参数是否为一个对象的实例）运算时自动调用，
// 判断左侧的运算子是否为Array的实例。
class MyClass {
    [Symbol.hasInstance](foo) {
        return foo instanceof Array;
    }
}
console.log([1, 2, 3] instanceof new MyClass()); // true

//Symbol.isConcatSpreadable
//对象的Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象使用Array.prototype.concat()时，是否可以展开。
class A1 extends Array {
    constructor(args) {
        super(args);
        this[Symbol.isConcatSpreadable] = true;
    }
}
class A2 extends Array {
    constructor(args) {
        super(args);
        this[Symbol.isConcatSpreadable] = false;
    }
}
let a1 = new A1();
a1[0] = 3;
a1[1] = 4;
let a2 = new A2();
a2[0] = 5;
a2[1] = 6;
[1, 2].concat(a1).concat(a2)
// [1, 2, 3, 4, [5, 6]]

//Symbol.species
//对象的Symbol.species属性，指向当前对象的构造函数。
// 创造实例时，默认会调用这个方法，即使用这个属性返回的函数当作构造函数，来创造新的实例对象。

//Symbol.match
//对象的Symbol.match属性，指向一个函数。当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。

//Symbol.replace
//对象的Symbol.replace属性，指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值

//Symbol.search Symbol.split Symbol.iterator Symbol.toPrimitive Symbol.toStringTag Symbol.unscopables