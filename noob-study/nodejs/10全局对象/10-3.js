/**
 * Created by 懒牛牛 on 2017/2/6.
 */
/**
 * process 是一个全局变量，即 global 对象的属性。
 * 它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。
 */
// process.on('exit', function(code) {
//
//     // 以下代码永远不会执行
//     setTimeout(function() {
//         console.log("该代码不会执行");
//     }, 0);
//
//     console.log('退出码为:', code);
// });
// console.log("程序执行结束");
// console.log('-----------------------');
//退出状态码 1-12,>128

//Process 属性
//stdout  stderr  stdin  argv  execPath  execArgv  env  exitCode  version  versions  config
//pid  title  arch  platform  mainModule
// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});

// 获取执行路局
console.log(process.execPath);


// 平台信息
console.log(process.platform);
console.log('--------------------');
//process方法
//abort()  chdir(directory)  cwd()  exit([code])  getgid()  setgid(id)   getuid()
//setuid(id)  getgroups()  setgroups(groups)  initgroups(user, extra_group)
//kill(pid[, signal])  memoryUsage()   nextTick(callback)  umask([mask])
//uptime()  hrtime()
// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());





















