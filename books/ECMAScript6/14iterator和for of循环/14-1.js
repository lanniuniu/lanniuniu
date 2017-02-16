/**
 * Created by 懒牛牛 on 2017/1/13.
 */
/**
 * Iterator（遍历器)
 * 任何数据结构只要部署Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
 * Iterator的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；
 * 二是使得数据结构的成员能够按某种次序排列；
 * 三是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。
 */

//一个对象如果要有可被for...of循环调用的Iterator接口，就必须在Symbol.iterator的属性上部署遍历器生成方法

//调用iterator接口的场合
//1.解构赋值 对数组和Set结构进行解构赋值时，会默认调用Symbol.iterator方法。
    //2.扩展运算符
let set1 = new Set().add('a').add('b').add('c');

let [x,y] = set1;
console.log(x +' '+ y);
let [first,...rest] = set1;
console.log(first+' '+rest);
//（3）yield*
// yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口
let generator = function* () {
    yield 1;
    yield* [2,3,4];
    yield 5;
};
var iterator = generator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//（4）其他场合
// 由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合，其实都调用了遍历器接口。下面是一些例子。
// for...of
// Array.from()
// Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
// Promise.all()
// Promise.race()

/**
 * 字符串的iterator接口
 * 字符串是一个类似数组的对象，也原生具有Iterator接口。
 */

//调用Symbol.iterator方法返回一个遍历器对象，在这个遍历器上可以调用next方法，实现对于字符串的遍历。
// 可以覆盖原生的Symbol.iterator方法，达到修改遍历器行为的目的。
var str = new String('hello');
console.log([...str]);
console.log(str[Symbol.iterator]);
console.log('---------------------');
str[Symbol.iterator] = function () {
    return{
        next:function () {
            if (this._first){
                this._first = false;
                return{value:"bye",done:false}
            }else {
                return {done:true}
            }
            console.log(this);
        },
        _first:true
    }
};







