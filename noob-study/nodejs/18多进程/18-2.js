/**
 * Created by 懒牛牛 on 2017/2/9.
 */
// spawn() 方法
// child_process.spawn 使用指定的命令行参数创建新进程，语法格式如下：
// child_process.spawn(command[, args][, options])
//     command： 将要运行的命令
//     args： Array 字符串参数数组
//     options Object
// spawn() 方法返回流 (stdout & stderr)，在进程返回大量数据时使用。
// 进程一旦开始执行时 spawn() 就开始接收响应。
const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++) {
    var workerProcess = child_process.spawn('node', ['support.js', i]);

    workerProcess.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });

    workerProcess.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    workerProcess.on('close', function (code) {
        console.log('子进程已退出，退出码 '+code);
    });
}


















