/**
 * Created by 懒牛牛 on 2017/1/17.
 */
/**
 * 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
 * 从语法上说，Promise是一个对象，从它可以获取异步操作的消息
 * 特点一  对象的状态不受外界影响。Promise对象代表一个异步操作，
     * 有三种状态：Pending（进行中）、Resolved（已完成，又称Fulfilled）和Rejected（已失败）。
     * 只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
     * 这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。
 * 特点二  一旦状态改变，就不会再变，任何时候都可以得到这个结果。
     * Promise对象的状态改变，只有两种可能：从Pending变为Resolved和从Pending变为Rejected。
     * 只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。
     * 就算改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。
     * 这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
 */

//Promise对象是一个构造函数，用来生成Promise实例。
// then方法是定义在原型对象Promise.prototype上的。它的作用是为Promise实例添加状态改变时的回调函数。
    //then方法的第一个参数是Resolved状态的回调函数，第二个参数（可选）是Rejected状态的回调函数。
var promise1 = new Promise(function (resolve, reject) {
    console.log('hello');
    reject();
});
promise1.then(
    comments=> {console.log(',lanniuniu')},
    err=>{console.log('错误')}
).then(console.log('这是异步操作'));























