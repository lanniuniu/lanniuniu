/**
 * Created by 懒牛牛 on 2017/2/9.
 */
// fork 方法
// child_process.fork 是 spawn() 方法的特殊形式，用于创建进程，语法格式如下：
// child_process.fork(modulePath[, args][, options])
// 参数
// 参数说明如下：
// modulePath： String，将要在子进程中运行的模块
// args： Array 字符串参数数组
// options：Object
// 返回的对象除了拥有ChildProcess实例的所有方法，还有一个内建的通信信道。
const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++) {
    var worker_process = child_process.fork("support.js", [i]);

    worker_process.on('close', function (code) {
        console.log('子进程已退出，退出码 ' + code);
    });
}