/**
 * Created by 懒牛牛 on 2017/1/19.
 */
/**
 * 严格模式
 * ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";。
 * 严格模式主要有以下限制：
     变量必须声明后再使用
     函数的参数不能有同名属性，否则报错
     不能使用with语句
     不能对只读属性赋值，否则报错
     不能使用前缀0表示八进制数，否则报错
     不能删除不可删除的属性，否则报错
     不能删除变量delete prop，会报错，只能删除属性delete global[prop]
     eval不会在它的外层作用域引入变量
     eval和arguments不能被重新赋值
     arguments不会自动反映函数参数的变化
     不能使用arguments.callee
     不能使用arguments.caller
     禁止this指向全局对象
     不能使用fn.caller和fn.arguments获取函数调用的堆栈
     增加了保留字（比如protected、static和interface）
 */

/**
 * export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。
 * 可以只在在变量和函数和类前加export 也可以统一在export加大括号（推荐使用）
 * export输出的变量就是本来的名字，但是可以使用as关键字重命名
 * 由于import是静态执行，所以不能使用“表达式和变量等”这些只有在运行时才能得到结果的语法结构
 */
// import {
//     hello
// }
// from './export';
// hello('lanniuniu');

//也可以整体加载
import * as all from './export';
all.hello('lanniuniu');

//export default命令  为模块指定默认输出。注意：这时import命令后面，不使用大括号。
//export 与 import 的复合写法 如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起。
//     export { foo, bar } from 'my_module';
//
//     // 等同于
//     import { foo, bar } from 'my_module';
//     export { foo, bar };

/**
 * 浏览器的模块加载
 * <script type="module" src="foo.js"></script>
 */

























