/**
 * Created by 懒牛牛 on 2017/1/17.
 */
/**
 * Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
 * Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例。
     * Promise.all方法的参数可以不是数组，但必须具有Iterator接口，且返回的每个成员都是Promise实例。
     * p的状态由p1、p2、p3决定，分成两种情况。

     （1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

     （2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
 */
//生成一个Promise对象的数组
var promise = [1,2,3,4,5,6].map(function (id) {
    "use strict";

});
Promise.all(promise).then(
    // ()=>
).catch(
    // ()=>
);

//Promise.race方法同样是将多个Promise实例，包装成一个新的Promise实例。
//只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数

//5s之内fetch无返回值 p就会变为rejected从而出发error回调函数
var p = Promise.race([
    // fetch('/resource-that-may-take-a-while'),
    new Promise(function (resolve, reject) {
        // setTimeout(() => reject(new Error('request timeout')), 5000)
    })
]);
p.then(response => console.log(response));
p.catch(error => console.log(error));

//Promise.resolve()将现有对象转为Promise对象
// Promise.resolve(xxx) => new Promise(resolve=>resolve(xxx))
//参数有四种
//1.Promise实例  Promise.resolve将不做任何修改、原封不动地返回这个实例。

//2.参数是一个thenable对象（指的是具有then方法的对象）
    // Promise.resolve方法会将这个对象转为Promise对象，然后就立即执行thenable对象的then方法。
let thenable = {
    then:function (resolve, reject) {
        resolve('thenable对象');
    }
};
let p2 = Promise.resolve(thenable);
p2.then(value=>console.log(value));
console.log('-----------------');

//（3）参数不是具有then方法的对象，或根本就不是对象
//Promise.resolve方法返回一个新的Promise对象，状态为Resolved。
var p3 = Promise.resolve('hello,lanniuniu!');
p3.then(s=>console.log(s));

//(4) 不带有任何参数 Promise.resolve方法允许调用时不带参数，直接返回一个Resolved状态的Promise对象。

















