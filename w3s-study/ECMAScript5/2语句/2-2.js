/**
 * Created by 懒牛牛 on 2017/2/15.
 */
// with 语句用于设置代码在特定对象中的作用域。
var sMessage = "hello";
with(sMessage) {
    console.log(toUpperCase());//输出 "HELLO"
}
// with 语句是运行缓慢的代码块，尤其是在已设置了属性值时。大多数情况下，如果可能，最好避免使用它。

// switch 语句
// 在 ECMAScript 中，switch 语句可以用于字符串，而且能用不是常量的值说明情况
// switch (expression)
//     case value: statement;//其中value可以使用变量
//         break;
//     case value: statement;
//         break;
//     case value: statement;
//         break;
//     case value: statement;
//         break;
//     ...
//     case value: statement;
//         break;
//     default: statement;














