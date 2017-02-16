/**
 * Created by 懒牛牛 on 2017/1/16.
 */
/**
 * 为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。
 模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。
 换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。
 */
var hello = require('./7-1-1.js');
hello.world();
console.log('------------');
var Hello2 = require('./7-1-2.js');
hello2 = new Hello2();
hello2.setName('lanniuniu');
hello2.sayHello();

/**
 * 从文件加载
 当文件模块缓存中不存在，而且不是原生模块的时候，Node.js会解析require方法传入的参数，
 并从文件系统中加载实际的文件，加载过程中的包装和编译细节在前一节中已经介绍过，
 这里我们将详细描述查找文件模块的过程，其中，也有一些细节值得知晓。
 require方法接受以下几种参数的传递：
 http、fs、path等，原生模块。
 ./mod或../mod，相对路径的文件模块。
 /pathtomodule/mod，绝对路径的文件模块。
 mod，非原生模块的文件模块。
 */























