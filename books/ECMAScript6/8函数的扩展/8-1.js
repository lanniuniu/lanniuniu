/**
 * Created by 懒牛牛 on 2017/1/11.
 */
/**
 * 函数参数的默认值
 * 可以与解构赋值默认值结合使用 但只有符合解构赋值的数据类型才起效
 * 参数变量是默认声明的，所以不能用let或const再次声明
 */

/**
 * 函数的length属性
 * 没有指定默认值 length属性指的是该函数预期传入的参数个数
 * 指定了默认值以后，函数的length属性，将返回指定默认值之前没有指定的参数个数
 * length属性不包括length属性
 */
console.log((function (a,b,c) {}).length);//3
console.log((function (a=0,b,c) {}).length);//0
console.log((function (a,b=0,c) {}).length);//1
console.log((function (a,b,c=0) {}).length);//2

//作用域
//注意let和const的暂时性死区





