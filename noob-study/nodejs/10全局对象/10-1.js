/**
 * Created by 懒牛牛 on 2017/2/6.
 */
/**
 *  Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。
 *  在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。
 *  global 最根本的作用是作为全局变量的宿主。
 *   永远使用 var 定义变量以避免引入全局变量，因为全局变量会污染 命名空间，提高代码的耦合风险。
 */

//__filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。
// 如果在模块中，返回的值是模块文件的路径。
console.log(`文件所在位置的绝对路径为：${__filename}`);

//__dirname 表示当前执行脚本所在的目录。
console.log(`所在的目录为：${__dirname}`);

//setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
// setTimeout() 只执行一次指定函数。
// 返回一个代表定时器的句柄值。
function hello() {
    console.log('hello,qinqin');
}
setTimeout(hello,2000);

//clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。
// 参数 t 是通过 setTimeout() 函数创建的定时器。
let a = setTimeout(hello,3000);
clearTimeout(a);//清除定时器























