/**
 * Created by 懒牛牛 on 2017/1/13.
 */
/**
 * 管道流 pipe()管子
 * 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
 */
var fs = require("fs");
//创建一个可读流
var readStream = fs.createReadStream("input.txt");
//创建一个可写流
var writeStream = fs.createWriteStream("output2.txt");

// 管道读写操作
console.log(readStream);
readStream.pipe(writeStream);
console.log('完毕');
console.log('---------------');
/**
 * 链式流
 * 链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。
 */
//压缩文件
var fs = require('fs');//引用文件系统
var zlib = require('zlib');//引用解压缩系统
//压缩input.txt 文件为input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));
console.log('压缩完毕');
console.log('---------------');

//解压文件
var fs2 = require('fs');
var zlib2 = require('zlib');
fs2.createReadStream('input.txt.gz')
    .pipe(zlib2.createGunzip())
    .pipe(fs2.createWriteStream('input2.txt'));
console.log('解压完毕');














