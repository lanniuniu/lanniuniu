/**
 * Created by 懒牛牛 on 2017/1/5.
 */
/**
 * 数值和布尔值的解构赋值
 */
let{toString:a}=3;
// a === Number.prototype.toString // true
console.log(a);

//解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。
// 由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
