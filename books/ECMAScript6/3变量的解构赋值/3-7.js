/**
 * Created by 懒牛牛 on 2017/1/5.
 */
/**
 * 圆括号的问题
 * ES6的规则是，只要有可能导致解构的歧义，就不得使用圆括号。
 * 如下3种情况不能用括号
 * 1.变量声明语句中，不能带有圆括号。
 * 2.函数参数中，模式不能带有圆括号。
 * 3.赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号之中。
 *
 * 可以使用括号只有1种
 * 赋值语句的非模式部分，可以使用圆括号。
 */


/**
 * 解构赋值的用途
 */
//1.交换两个变量的值
var [a,b] = [0,1];
console.log([a,b]);
[a,b] = [b,a];
console.log([a,b]);

//2.从函数返回取出多个值
function example() {
    return {
        foo: 1,
        bar: 2
    };//返回一个对象
}
var { foo, bar } = example();

function exampleB() {
    return [1,2];//返回一个数组
}
var [c,d] = exampleB();

//3.函数参数的定义
//4.提取json数据
var jsonData = {
    "name":"liupeng",
    "age":23
    };
let {name,age}= jsonData;
console.log(name);

//5.函数参数的默认值
//6.遍历Map结构
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
    console.log(key + " is " + value);
}

//7.输入模块的指定方法
// 加载模块时，往往需要指定输入那些方法。解构赋值使得输入语句非常清晰。
// const { SourceMapConsumer, SourceNode } = require("source-map");