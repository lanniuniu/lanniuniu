// 可选属性的接口和普通的接口定义差不多，只是在可选属性名字的后面加个问号
// 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。

// 定义接口
interface config {
    color?: string; // 可选属性
    width: number;
}

function createPhone(phone: config): boolean { // 冒号后面的是返回值的类型
    let {color = 'red', width} = phone; // 设置默认值
    console.log(`a ${color} phone is ${width}cm`)
    return true
}

createPhone({width: 100});

// 只读属性 属性名前用 readonly来指定只读属性
// ReadonlyArray<T> 数组一经创建不可更改

// 似乎有bug
// let array1: number[] = [1,2,3];
// let array2: ReadonlyArray<number> = array1;
// array2.push(2);
// console.log(array2[0])

// 函数类型
interface func {
    (color: string, width: number):string
}
let func1 : func;// 声明func1的函数类型要和接口func定义的一样
func1 = function (color,width) {
    return `a ${color} phone is ${width}cm`
};
console.log(func1('red',100));// 若传参类型不对，则报错

// 可索引的类型
interface arr {
    [index: number]:string;
}
let array3 : arr;
array3 = ['1','2'];
console.log(array3)

// 类类型
interface inf1 {
    currentTime: Date
}
class colok implements inf1 {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

// 接口继承
interface inf2 extends inf1 {
    color: string;
}
let clock1 =  <inf2>{};
clock1.color = "blue";
clock1.currentTime = new Date();
console.log(clock1)
//一个接口可以继承多个接口，创建出多个接口的合成接口。

// 混合类型 一个对象可以同时做为函数和对象使用，并带有额外的属性。

// 接口继承类
