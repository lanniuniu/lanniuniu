/**
 * Created by 懒牛牛 on 2017/2/15.
 */

// ECMAScript 的函数实际上是功能完整的对象。
// Function 对象（类）
// 用 Function 类直接创建函数的语法如下：
// var function_name = new function(arg1, arg2, ..., argN, function_body)

// 如果函数名只是指向函数的变量，那么可以把函数作为参数传递给另一个函数吗？回答是肯定的！
// 尽管可以使用 Function 构造函数创建函数，但最好不要使用它，因为用它定义函数比用传统方式要慢得多。
// 不过，所有函数都应看作 Function 类的实例。

// ECMAScript 定义的属性 length 声明了函数期望的参数个数
// ECMAScript 可以接受任意多个参数（最多 25 个）

// Function 对象也有与所有对象共享的 valueOf() 方法和 toString() 方法。
// 这两个方法返回的都是函数的源代码，在调试时尤其有用。

// ECMAScript 最易让人误解的一点是，它支持闭包（closure）。
// 闭包，指的是词法表示包括不被计算的变量的函数，也就是说，函数可以使用函数之外定义的变量。
// 在 ECMAScript 中使用全局变量是一个简单的闭包实例。












