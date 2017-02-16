/**
 * Created by 懒牛牛 on 2017/2/7.
 */
/**
 * 在 Node.js 模块库中有很多好用的模块。接下来我们为大家介绍几种常用模块的使用：
 * Node.js os 模块提供了一些基本的系统操作函数
 */
let os = require("os");
// CPU 的字节序
console.log('CPU 的字节序 : ' + os.endianness());

// 操作系统名
console.log('操作系统名 : ' + os.type());

// 操作系统名
console.log('操作系统名 : ' + os.platform());

// 系统内存总量
console.log('系统内存总量 : ' + os.totalmem() + " bytes.");

// 操作系统空闲内存量
console.log('操作系统空闲内存量 : ' + os.freemem() + " bytes.");




















