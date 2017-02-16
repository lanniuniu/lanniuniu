/**
 * Created by 懒牛牛 on 2017/1/11.
 */
/*
 Array.from()
 将两类对象转为真正的数组：
 类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）
 */
let obj1 = {
    '0':'1',
    '1':'2',
    '2':'3',
    length:3
};
//ES5
let arr1 = [].slice.call(obj1);//被转换的对象的属性名必须有length属性,若能正常使用必须是从零开始的数值
console.log(arr1);

//ES6
let arr2 = Array.from(obj1);
console.log(typeof arr2[0]);

//Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。

let arr3 = Array.from(obj1,x=>x*x);
console.log(arr3);

//Array.from()可以将各种值转为真正的数组，并且还提供map功能。
// 这实际上意味着，只要有一个原始的数据结构，你就可以先对它的值进行处理，然后转成规范的数组结构，进而就可以使用数量众多的数组方法。
let obj2 = {
    length:3
};
console.log(Array.from(obj2,x=>'liupeng'
));



