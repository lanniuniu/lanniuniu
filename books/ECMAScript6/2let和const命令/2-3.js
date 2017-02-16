/**
 * Created by 懒牛牛 on 2017/1/4.
 */
/**
 * 块级作用域
 */

var tmp = new Date();
function a() {
    console.log(tmp);
    if (false){
        var tmp = "11";
    }
}
a();//undefined 变量提升导致变量覆盖

var word = "hello";
for(var i=0;i<word.length;i++){
    console.log(word[i]);
}
console.log(i);//i只是用于控制循环变量，但是循环结束时，他没有消失却成为了全局变量
console.log('-----------------');
//所以ES6中的let和const为javascript新添加了块级作用域
//考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。
// 如果确实需要，也应该写成函数表达式，而不是函数声明语句。例如:
{
    let a = 'secret';
    let f = function () {
        console.log(a);
    };
    f();
}
