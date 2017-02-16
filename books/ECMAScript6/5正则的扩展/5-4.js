/**
 * Created by 懒牛牛 on 2017/1/10.
 */
/*
 y修饰符 “粘连”（sticky）修饰符
 y修饰符的作用与g修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。
 不同之处在于，g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始，
 */
var word = 'aaa_aa_a';
var reg1 = /a+/g;
var reg2 = /a+/y;
var reg3 = /a+_/y;
console.log(reg1.exec(word));
console.log(reg1.exec(word));
console.log(reg1.exec(word));
console.log(reg1.exec(word));
console.log('------------------');
console.log(reg2.exec(word));
console.log(reg2.exec(word));
console.log('------------------');
console.log(reg3.exec(word));
console.log(reg3.exec(word));
console.log(reg3.exec(word));
console.log('------------------');
//sticky属性 表示是否设置了y修饰符。
console.log(reg2.sticky);

//flags属性
//返回正则表达式的修饰符。
console.log(reg2.flags);

// //s 修饰符：dotAll 模式(提案)
// //使得.可以匹配任意单个字符。
// var reg4 = /liu.peng/;
// console.log(reg4.exec('liu\npeng'));









