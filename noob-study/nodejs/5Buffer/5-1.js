/**
 * Created by 懒牛牛 on 2017/1/9.
 */
/*
 buffer 缓冲区
 处理像TCP流或文件流时，必须使用到二进制数据。
 因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
 原始数据存储在 Buffer 类的实例中。
 一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
 */

//创建buffer类
//way1
var buff = new Buffer(10);//创建长度为 10 字节的 Buffer 实例

//way2
var buff2 = new Buffer([10,20,30]);//通过给定的数组创建 Buffer 实例

//way3
var buff3 = new Buffer("liupeng");//通过一个字符串来创建 Buffer 实例

//utf-8 是默认的编码方式，
// 此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。

//写入缓冲区
// buf.write(string[, offset[, length]][, encoding])
//string - 写入缓冲区的字符串。
// offset - 缓冲区开始写入的索引值，默认为 0 。
// length - 写入的字节数，默认为 buffer.length
// encoding - 使用的编码。默认为 'utf8' 。
// 返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。

var res = buff.write('lanniuniu');
console.log(`写入字节数为 ${res}`);

//从缓存区读取数据
//buf.toString([encoding[, start[, end]]])
//encoding - 使用的编码。默认为 'utf8' 。
// start - 指定开始读取的索引位置，默认为 0。
// end - 结束位置，默认为缓冲区的末尾。
//返回值  解码缓冲区数据并使用指定的编码返回字符串。
for(var i = 0;i<buff2.length;i++){
    console.log(buff2[i]);//数组的读取方法
}









