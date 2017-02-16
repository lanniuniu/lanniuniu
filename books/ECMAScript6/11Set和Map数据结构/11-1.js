/**
 * Created by 懒牛牛 on 2017/1/12.
 */
/**
 * 新的数据结构Set
 * 它类似于数组，但是成员的值都是唯一的，没有重复的值。
 * Set本身是一个构造函数，用来生成Set数据结构。
 */
var set1 = new Set();
[1,1,2,3,4,5,4,3,2].map(x=>set1.add(x));
for(let i of set1){
    console.log(i);
}
console.log('-------------');
//Set函数可以接受一个数组（或类似数组的对象）作为参数，用来初始化。
var set = new Set([1, 2, 3, 4, 4]);
console.log(set);
console.log(set.size);
console.log('---------------');
// function divs () {
//     return [...document.querySelectorAll('div')];
// }
//
// var set = new Set(divs());
// set.size // 56
//
// // 类似于
// divs().forEach(div => set.add(div));
// set.size // 56

//可以用去去除数组重复的方法 是否相同用的是Object.is()的算法

//prototype 属性使您有能力向对象添加属性和方法。

// Set结构的实例有以下属性。
// Set.prototype.constructor：构造函数，默认就是Set函数。
// Set.prototype.size：返回Set实例的成员总数。
// Set实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。
//
// add(value)：添加某个值，返回Set结构本身。
// delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// has(value)：返回一个布尔值，表示该值是否为Set的成员。
// clear()：清除所有成员，没有返回值。

//Array.from方法可以将Set结构转为数组。结合set（）这样就提供了数组去重方法

//Set结构的实例有四个遍历方法，可以用于遍历成员。
// keys()：返回键名的遍历器
// values()：返回键值的遍历器  “默认”
// entries()：返回键值对的遍历器
// forEach()：使用回调函数遍历每个成员 无返回值
// 需要特别指出的是，Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用Set保存一个回调函数列表，调用时就能保证按照添加顺序调用。
for(let elem of set.values()){
    console.log(elem)
}
console.log('--------------');

//使用Set可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}












