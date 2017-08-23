/**
 * Created by 懒牛牛 on 2017/1/5.
 */

// 如果直接在\u后面跟上超过0xFFFF的数值（比如\u20BB7），JavaScript会理解成\u20BB+7。
// 由于\u20BB是一个不可打印字符，所以只会显示一个空格，后面跟着一个7。
// ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。

//字符串的遍历器接口,这个遍历器最大的优点是可以识别大于0xFFFF的码点
var text = String.fromCodePoint(0x20BB7);//codePointAt() 逆函数 同样可以识别码点大于0xfffff

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}
// " "
// " "

for (let i of text) {
    console.log(i);
}
// "𠮷"
//需要在nodejs repl运行
