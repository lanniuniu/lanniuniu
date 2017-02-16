/**
 * Created by 懒牛牛 on 2017/1/11.
 */
/**
 * rest参数
 * ES6引入rest参数（形式为“...变量名”），用于获取函数的多余参数，这样就不需要使用arguments对象了。
 * rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
 */
function add(...values) {
    let sum = 0;
    for(let val of values){
        sum += val;
    }
    return sum;
}
console.log(add(2,3,4));
console.log('-----------------');

/**
 * 扩展运算符...
 * 好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列
 */
console.log(1,...[2,3,4],5);
console.log(Math.max(...[14, 3, 77]));

//应用1 合并数组
var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];
console.log([...arr1,...arr2,...arr3]);
console.log('-------------');

//应用2 与解构赋值结合
// [a, ...rest] = list;//与解构赋值结合.扩展运算符可以与解构赋值结合起来，用于生成数组
//如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。

//应用3  函数的返回值
// var dateFields = readDateFields(database);
// var d = new Date(...dateFields);
//上面代码从数据库取出一行数据，通过扩展运算符，直接将其传入构造函数Date。

//应用4  字符串
//扩展运算符还可以将字符串转为真正的数组。
//能够正确识别32位的Unicode字符。
console.log([...'hello']);
console.log('----------');

//应用5  实现了Iterator接口的对象
//任何Iterator接口的对象，都可以用扩展运算符转为真正的数组。
// var nodeList = document.querySelectorAll('div');
// var array = [...nodeList];

//应用6  同理Map和Set结构，Generator函数，一样可以使用...


/**
 * 规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。
 * @param a
 * @param b
 */
function doSomething(a, b) {
    'use strict';
    // code
}











