/**
 * Created by 懒牛牛 on 2017/1/12.
 */
/**
 * 函数的name属性，返回函数名
 * 如果对象的方法使用了取值函数（getter）和存值函数（setter），则name属性不是在该方法上面，
 * 而是该方法的属性的描述对象的get和set属性上面，返回值是方法名前加上get和set。
 */
const obj1 = {
    fun1(){
        "use strict";
    },
    get fun2(){
        "use strict";
    },
    set fun3(x){
        "use strict";
    }
};
console.log(obj1.fun1.name);
const describe = Object.getOwnPropertyDescriptor(obj1,'fun2');//Object.getOwnPropertyDescriptor()获取对象相关描述
console.log(describe.get.name);
console.log('--------------');
//bind方法创造的函数，name属性返回bound加上原函数的名字；
// Function构造函数创造的函数，name属性返回anonymous。
// 如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述。

/**
 * Object.is()
 * 它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。并解决了===的缺陷：NaN不等于自身，以及+0等于-0
 * ==的缺陷:自动转换数据类型
 */
console.log(+0===-0);
console.log(NaN===NaN);
console.log(Object.is(+0,-0));
console.log(Object.is(NaN,NaN));
console.log('-----------');

/*
 * Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
 */
var obj2 = {a:1};
var obj3 = {b:2};
var obj4 = Object.assign(obj2,obj3);
console.log(obj4);
console.log('------------');
//如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
// 如果只有一个参数，Object.assign会直接返回该参数。
// 如果该参数不是对象，则会先转成对象，然后返回。
//由于undefined和null无法转成对象，所以如果它们作为“第一个参数”，就会报错。
//Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）。
//浅拷贝：对象的属性名相同就覆盖

//常见用途
//（1）为对象添加属性
class Point {
    constructor(x, y) {//constructor
        Object.assign(this, {x:1, y:2});
    }
}
var obj5 = new Point();//将x属性和y属性添加到Point类的对象实例
console.log(obj5);
console.log('--------------');

//（2）为对象添加方法
var someClass = {
    prototype : {},
    a(){
        "use strict";
        return 111;
    }
};
Object.assign(someClass.prototype, {
    someMethod(arg1, arg2) {
        "use strict";
        console.log(arg1+arg2) ;
    },
    anotherMethod() {
        "use strict";
        return "111";
    }
});
console.log(someClass.prototype.anotherMethod());//11

// 克隆对象
//只能克隆原始对象自身的值，不能克隆它继承的值。
function clone(origin) {
    return Object.assign({}, origin);
}

//合并多个对象

//为属性指定默认值
const DEFAULTS = {
    logLevel: 0,
    outputFormat: 'html'
};

function processContent(options) {
    options = Object.assign({}, DEFAULTS, options);
}

















