/**
 * Created by 懒牛牛 on 2017/1/16.
 */
/**
 * Iterator接口与Generator函数
 *  Symbol.iterator方法的最简单实现，还是使用下一章要介绍的Generator函数。
 */
let obj1 = {
    * [Symbol.iterator](){
        yield 'hello';
        yield 'world';
    }
};
for(let i of obj1){
    console.log(i)
}

/**
 * for of
 * 一个数据结构只要部署了Symbol.iterator属性，就被视为具有iterator接口，就可以用for...of循环遍历它的成员。
 * 也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。
 for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、
 后文的 Generator 对象，以及字符串。
 */
//数组
//Set Map结构  Set返回是一个值 而Map返回的是数组
//字符串、DOM NodeList对象、arguments对象
//对于字符串来说，for...of循环还有一个特点，就是会正确识别32位UTF-16字符。

// 并不是所有类似数组的对象都具有iterator接口，一个简便的解决方法，就是使用Array.from方法将其转为数组。
let arrayLike = { length: 2, 0: 'a', 1: 'b' };
for(let x of Array.from(arrayLike)){
    console.log(x);
}
console.log('---------------');

//对象
// 对于普通的对象，for...of结构不能直接使用，会报错，必须部署了iterator接口后才能使用。
// 但是，这样情况下，for...in循环依然可以用来遍历键名。
//方法1：使用Object.keys方法将对象的键名生成一个数组，然后遍历这个数组。
//方法2：使用Generator函数将对象重新包装一下。















