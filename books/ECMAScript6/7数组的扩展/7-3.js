/**
 * Created by 懒牛牛 on 2017/1/11.
 */
/*
 数组实例的copyWithin()
 当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
 Array.prototype.copyWithin(target, start = 0, end = this.length)
 它接受三个参数。
 target（必需）：从该位置开始替换数据。
 start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
 end（可选）：到该位置“前”停止读取数据，默认等于数组长度。如果为负值，表示倒数。
 */
let arr1 = [1,2,3,4,5];
console.log(arr1.copyWithin(0,3,4));
console.log('--------------');
/*
 数组实例的find()和findIndex()
 */

//数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，
// 直到找出"第一个"返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined
console.log([1,2,-2,5].find(n=>n<0));
console.log('-------------');
//find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
console.log([1,2,-2,5].find(function (value, index, arr) {
    return value < 1;//只会找出第一个
}));
console.log('---------------');

//findIndex 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

//fill()fill方法使用给定值，填充一个数组。
console.log(['a','b','c'].fill(1));
console.log(['a','b','c'].fill(''));
console.log(['a','b','c'].fill('',1,2));

// fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。参数的意义跟copyWithin()一致













