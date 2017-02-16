/**
 * Created by 懒牛牛 on 2017/2/7.
 */
/**
 * 打开文件
 * 异步模式下打开文件的语法格式：
     fs.open(path, flags[, mode], callback)
     参数
     参数使用说明如下：
     path - 文件的路径。
     flags - 文件打开的行为。具体值详见下文。
     mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
     callback - 回调函数，带有两个参数如：callback(err, fd)。
 */
let fs = require("fs");
//异步打开文件
console.log('准备打开文件')
fs.open('miss.txt','r+',function (err, fd) {
    if (err){return console.error(err)}
    console.log('文件打开成功');
    console.log(fd)
});

/**
 * 获取文件信息
     语法
     以下为通过异步模式获取文件信息的语法格式
     fs.stat(path, callback)
     参数
     参数使用说明如下：
     path - 文件路径。
     callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。
     fs.stat(path)执行后，会将stats类的实例返回给其回调函数。
     可以通过stats类中的提供方法判断文件的相关属性。例如判断是否为文件：
 */
let fs1 = require("fs");
fs1.stat('miss.txt',function (err, stats) {
    if (err){
        console.error(err);
    }
    console.log(stats);
    console.log('读取文件信息成功！');
    //检测文件类型
    console.log(`是否为文件(isFile) ? ${stats.isFile()}`);
    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
});
//stats类还有诸多方法

/**
 * 写入文件
     语法
     以下为异步模式下写入文件的语法格式：
     fs.writeFile(filename, data[, options], callback)
     如果文件存在，该方法写入的内容会覆盖旧的文件内容。
 */

/**
 * 读取文件
     语法
     以下为异步模式下读取文件的语法格式：
     fs.read(fd, buffer, offset, length, position, callback)
 */

/**
 * 关闭文件
     语法
     以下为异步模式下关闭文件的语法格式：
     fs.close(fd, callback)
     该方法使用了文件描述符来读取文件。
 */

/**
 * 截取文件
     语法
     以下为异步模式下截取文件的语法格式：
     fs.ftruncate(fd, len, callback)
     该方法使用了文件描述符来读取文件。
 */

/**
 * 删除文件
     语法
     以下为删除文件的语法格式：
     fs.unlink(path, callback)
 */

/**
 * 创建目录
     语法
     以下为创建目录的语法格式：
     fs.mkdir(path[, mode], callback)
 */

/**
 * 读取目录
     语法
     以下为读取目录的语法格式：
     fs.readdir(path, callback)
 */

/**
 * 删除目录
     语法
     以下为删除目录的语法格式：
     fs.rmdir(path, callback)
 */

//文件模块参考手册http://www.runoob.com/nodejs/nodejs-fs.html










