/**
 * Created by 懒牛牛 on 2017/2/5.
 */
/**
 * 一个函数可以作为另一个函数接收一个参数
 * @param word
 */
function say(word) {
    console.log(`miss,${word}`);
}
function exe(someFunction, value) {
    someFunction(value);
}
exe(say,'qinqin');

//匿名函数，
// 我们可以把一个函数作为变量传递。
// 但是我们不一定要绕这个"先定义，再传递"的圈子，我们可以直接在另一个函数的括号中定义和传递这个函数：
// 将say匿名
exe(function (value) {
    console.log(`hello,${value}`)
},'qinqin');


















