/**
 * Created by 懒牛牛 on 2017/2/15.
 */
// 函数

//arguments 对象
// 在函数代码中，使用特殊对象 arguments，开发者无需明确指出参数名，就能访问它们。
function hello() {
    if (arguments[0]==='qinqin'){
         return console.log('hello qinqin!')
    }
    return console.log('hello');
}
hello('qinqin');
console.log('-------------------');

// 检测参数个数
// 还可以用 arguments 对象检测函数的参数个数，引用属性 arguments.length 即可。
function love() {
    console.log(arguments.length);
}
console.log(love('1','2'));
console.log('------------------');

// 模拟函数重载
// 用 arguments 对象判断传递给函数的参数个数，即可模拟函数重载
function doAdd() {
    if(arguments.length == 1) {
        console.log(arguments[0] + 5);
    } else if(arguments.length == 2) {
        console.log(arguments[0] + arguments[1]);
    }
}
doAdd(10);//输出 "15"
doAdd(40, 20);//输出 "60"











