/**
 * Created by 懒牛牛 on 2017/1/9.
 */
/*
 u修饰符
 ES6对正则表达式添加了u修饰符，含义为“Unicode模式”，用来正确处理大于\uFFFF的Unicode字符
 一旦加上u修饰符号，就会修改如下这些正则表达式的行为。
 */

//1.点字符
//点（.）字符在正则表达式中，含义是除了换行符以外的任意单个字符。
// 对于码点大于0xFFFF的Unicode字符，点字符不能识别，必须加上u修饰符。
let word1 = '𠮷';
let reg1 = /^.$/;
let reg2 = /^.$/u;
console.log(reg1.test(word1));
console.log(reg2.test(word1));

console.log('----------------');

//Unicode字符表示法
//ES6新增了使用大括号表示Unicode字符，这种表示法在正则表达式中必须加上u修饰符，才能识别。
console.log(/\u{61}/.test('a'));// false
console.log(/\u{61}/u.test('a')); // true

console.log('-----------------');

//量词
//使用u修饰符后，所有量词都会正确识别码点大于0xFFFF的Unicode字符
console.log(/𠮷{2}/.test('𠮷𠮷')); // false
console.log(/𠮷{2}/u.test('𠮷𠮷')); // true

//i字符 不区分大小写
//有些Unicode字符的编码不同，但是字型很相近，比如，\u004B与\u212A都是大写的K。
console.log(/[a-z]/i.test('\u212A')); // false
console.log(/[a-z]/iu.test('\u212A')); // true

