/**
 * Created by 懒牛牛 on 2017/1/5.
 */
//字符串的遍历器接口,这个遍历器最大的优点是可以识别大于0xFFFF的码点
var text = String.fromCodePoint(0x20BB7);

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
