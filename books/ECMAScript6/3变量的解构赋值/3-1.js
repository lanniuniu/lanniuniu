/**
 * Created by 懒牛牛 on 2017/1/5.
 */
/**
 * 数组的解构赋值
 * 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
 */
// var [a, b, c] = [1, 2, 3];

let [a,[[b],c]] = [1,[[2],3]];
console.log(a);
console.log(b);
console.log(c);

let [head, ...tail] = [1, 2, 3, 4];
head; // 1
tail; // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []

//如果解构不成功，变量的值就等于undefined。如下foo都解构不成功，值为为undefined
// var [foo] = [];
// var [bar, foo] = [1];

//如果等号的右边不是数组（或者严格地说，不是可遍历的结构），那么将会报错。如下
let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};
