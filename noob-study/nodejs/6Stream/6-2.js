/**
 * Created by 懒牛牛 on 2017/1/13.
 */
var fs1 = require("fs");
var data = '懒牛牛';
// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs1.createWriteStream('output.txt');
//使用UTF8编码
writerStream.write(data,'UTF8');
//标记文件末尾
writerStream.end();
//处理流事件
writerStream.on('finish',function () {
    console.log('写入完成');
});
writerStream.on('error',function (err) {
    console.log(err.stack);
});
console.log('程序执行完毕');




















