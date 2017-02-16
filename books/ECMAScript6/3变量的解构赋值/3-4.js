/**
 * Created by 懒牛牛 on 2017/1/5.
 */
/**
 * 字符串的解构赋值
 * 字符串被转换成了一个类似数组的对象。
 */
const [a, b, c, d, e] = 'hello';
console.log(c);//l

//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let{length:len} = "hello";
console.log(len);