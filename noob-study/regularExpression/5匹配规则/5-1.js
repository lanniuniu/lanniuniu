/**
 * Created by 懒牛牛 on 2017/1/9.
 */
/**
 * 基本模式匹配
 * 模式，是正规表达式最基本的元素，它们是一组描述字符串特征的字符。
 * @type {RegExp}
 */
var reg1 = new RegExp(/^once/);
console.log(reg1.exec('once upon a time'));

var reg2 = new RegExp(/once$/);
console.log(reg2.exec('once upon a time'));