/**
 * Created by 懒牛牛 on 2017/1/9.
 */
/*
 字符串的正则方法
 字符串对象共有4个方法，可以使用正则表达式：match()、replace()、search()和split()。
 */

//match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
//以找到一个或多个与 regexp 匹配的文本。这个方法的行为在很大程度上有赖于 regexp 是否具有标志 g。
//否则只会执行一次便返回
let reg = /k\b/;
console.log('ok ok'.match(reg));

//split() 方法用于把一个字符串分割成字符串数组
let reg1 = /\b/;
console.log('ok is ok'.split(reg1));
console.log('ok is ok'.split(''));
console.log('---------分割线----------');

//search() 方法不执行全局匹配，它将忽略标志 g。
//stringObject 中第一个与 regexp 相匹配的子串的起始位置。
let reg2 = /k\b/;
console.log('ok ok'.search(reg2));

//字符串 stringObject 的 replace() 方法执行的是查找并替换的操作
//如果 regexp 具有全局标志 g，那么 replace() 方法将替换所有匹配的子串。否则，它只替换第一个匹配子串。
//返回值是替换过后的一个新的字符串
let reg3 = /k\b/;
let reg4 = /k\b/g;
console.log('ok ok'.replace(reg3,'h'));
console.log('ok ok'.replace(reg4,'h'));