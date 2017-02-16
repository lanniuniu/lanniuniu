/**
 * Created by 懒牛牛 on 2017/2/6.
 */

//setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
// 返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
// setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
function love() {
    console.log('love you,qinqin');
}
let love1 = setInterval(love,1000);
clearInterval(love1);
//console对象的方法
//console.log([data][, ...])  console.info([data][, ...])  console.error([data][, ...])
//console.warn([data][, ...])  console.dir(obj[, options])  console.time(label)
//console.timeEnd(label)  console.trace(message[, ...])  console.assert(value[, message][, ...])
console.log('miss%dqinqin',520);
console.trace();//向标准错误流输出当前的调用栈。
console.log('---------------------');

let counter = 10000;
console.log('计数:%d',counter);
console.time('获取数据');
for(let i = 0;i<10000;i++){

}
console.timeEnd('获取数据');
console.info('执行完毕');
















