/**
 * Created by 懒牛牛 on 2017/1/10.
 */
/*
 Number.parseInt(), Number.parseFloat()
 目的是逐步减少全局性方法，使得语言逐步模块化
 */
let num1 = '12.45#';
console.log(Number.parseInt(num1));
console.log(Number.parseFloat(num1));
console.log('---------------------');

/*
 Number.isInteger()
 */
console.log(Number.isInteger(25.0));
console.log(Number.isInteger(25.1));
console.log(Number.isInteger('15'));
console.log(Number.isInteger(false));
console.log('--------------');

/*
 Number.EPSILON 新增一个非常小的常量
 目的，在于为浮点数计算，设置一个误差范围
 */
console.log(Number.EPSILON);
console.log(Number.EPSILON.toFixed(20));//把 Number 四舍五入为指定小数位数的数字(0 ~ 20,包括 0 和 20)。
console.log('-------------------');

/*
 安全整数和Number.isSafeInteger()
 JavaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。
 */
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
//Number.isSafeInteger() 判断一个数是否在二者之间
console.log(9007199254740993-1);//9007199254740991
//计算机将超过2的53次方的数统一按2的53次方存储











