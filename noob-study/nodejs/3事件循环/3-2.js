/**
 * Created by 懒牛牛 on 2017/1/5.
 */
var fileModule = require('fs');//fs是一个文件模块系统
fileModule.readFile('input.txt',function (err, data) {
    if (err){
        console.log(err);
        return;
    }
    console.log(data.toString());
});
console.log('程序执行完毕！');