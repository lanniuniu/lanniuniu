/**
 * Created by 懒牛牛 on 2017/1/4.
 */
/**
 * Node.js 回调函数
 * Node.js 异步编程的直接体现就是回调。
 异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。
 回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。
 例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。
 这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，
 可以处理大量的并发请求。
 */

/**
 * 阻塞的例子
 */
var fs = require("fs");//fs是一个文件模块系统，可以通过这样来调取他
var dataA = fs.readFileSync('input.txt');
console.log(dataA.toString());
console.log("程序执行结束");

console.log("----------分割线----------");

/**
 * 非阻塞的实例
 */
var fold = require("fs");
fold.readFile('input.txt',function (err,dataB) {
    if (err){
        return console.error(err);
    }else {
        console.log(dataB.toString())
    }
    // if (err)return console.error(err);
    // console.log(dataB.toString());
});
console.log("程序执行结束");

//因此，阻塞是按顺序执行的，而非阻塞是不需要按顺序的，
// 所以如果需要处理回调函数的参数，我们就需要写在回调函数内。
