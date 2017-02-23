/**
 * Created by 懒牛牛 on 2017/1/4.
 */
/**
 *顶层对象，在浏览器环境指的是window对象，在Node指的是global对象。
 * ES5之中，顶层对象的属性与全局变量是等价的。
 * ES6为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；
 * 另一方面规定，let命令、const命令、class命令声明的全局变量，
 * 不属于顶层对象的属性。也就是说，
 * 从ES6开始，全局变量将逐步与顶层对象的属性脱钩。
 */

/**
 *global 对象
 *浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
 *浏览器和 Web Worker 里面，self也指向顶层对象，但是Node没有self。
 *Node 里面，顶层对象是global，但其他环境都不支持。
 */
var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
};
var a  =function () {
    return 111;
};
console.log(a());