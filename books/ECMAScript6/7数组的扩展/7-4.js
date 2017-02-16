/**
 * Created by 懒牛牛 on 2017/1/11.
 */
// entries()，keys()和values()
// 返回一个遍历器对象（详见《Iterator》一章），可以用for...of循环进行遍历
// 唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
for(let index of ['a','b'].keys()){
    console.log(index);
}
console.log('-----------');
// for(let elem of ['a','b'].values()){//values()没有实现
//     console.log(elem);
// }
console.log('-----------');
for(let [index,value] of ['a','b'].entries()){
    console.log(`${index}:${value}`);
}
console.log('-----------');

/*
 数组实例的includes()
 Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。
 该方法的第二个参数表示搜索的起始位置，默认为0。
 如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。
 区别Set结构has()查找值 Map has()查找键名
 */

/**
 * 数组的空位的处理很不统一，应避免出现这种情况
 */











