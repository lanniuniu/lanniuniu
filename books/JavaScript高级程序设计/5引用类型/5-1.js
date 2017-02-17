/**
 * Created by 懒牛牛 on 2017/2/16.
 */
let publicFunc = require('../public');
/*
引用类型
类似class
 */

/*
Object类型

创建方法：
new+Object构造函数
对象字面量

访问
.
[] 可以传入变量
 */

/*
Array类型

创建数组的基本方式
（new+）Array()
数组字面量

数组的length可以从数组末尾移除或添加项
 */
let arr1 = ['blue','black'];
arr1.length = 1;//移除
console.log(arr1[1]);
arr1[arr1.length]='black';
arr1[arr1.length]='white';
console.log(arr1);
publicFunc.cutOff();

/*
检测数组
Array.isArray()

转换方法
toString() toLocaleString() valueOf() join()

栈方法 先进后出
push()  增
pop()   删

队列方法 先进先出
shift() 删
unshift() 增

重排序方法
reverse()
sort() 比较的是字符串  可以接受比较函数作为参数

 */
let arr2 = [1,5,10,20,0];
function compare(value1,value2) {
    if(value1<value2){
        return -1;
    }else if(value1>value2){
        return 1;
    }else {
        return 0;
    }
}
console.log(arr2.sort(compare));
publicFunc.cutOff();

/*
操作方法

concat()
slice()
 */

/*
位置方法
indexOf() 查找返回索引
lastIndexOf()
 */

/*
迭代方法
every()与some()
filter()
forEach()
map()
 */

let num1 = [0,5,10,15];
let res1 = num1.every((value)=>{//每一项返回true才为true
    "use strict";
    return value < 15;
});
let res2 = num1.some((value)=>{//有一项返回true就是true
    "use strict";
    return value<1;
});
console.log(res1);
console.log(res2);
publicFunc.cutOff();

let res3 = num1.filter((value)=>{//过滤器，返回符合条件的
    "use strict";
    return value<10;
});
console.log(res3);
publicFunc.cutOff();

let res4 = num1.map((value)=>{//操作每一项并返回
    "use strict";
    return value*2;
});
console.log(`num1为${num1}`);
console.log(`res4为${res4}`);
publicFunc.cutOff();

num1.forEach((value)=>{//遍历操作数组，无返回值
    "use strict";
    //
});
publicFunc.cutOff();

/*
归并方法
reduce()
reduceRight()
 */
let res5 = num1.reduce(function (prev, next, index, array) {//前一项当后一项的参数
    return prev-next;
});
console.log(res5);
publicFunc.cutOff();







