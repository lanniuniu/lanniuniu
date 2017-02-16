/**
 * Created by 懒牛牛 on 2017/1/12.
 */

/**
 * 属性的可枚举性
 * 对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。
 * Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象
 */
let obj = { foo: 123 };
Object.getOwnPropertyDescriptor(obj, 'foo');

/*描述对象的enumerable属性，称为”可枚举性“，如果该属性为false，就表示某些操作会忽略当前属性。
ES5有三个操作会忽略enumerable为false的属性。
    for...in循环：只遍历对象自身的和继承的可枚举的属性
    Object.keys()：返回对象自身的所有可枚举的属性的键名
    JSON.stringify()：只串行化对象自身的可枚举的属性
ES6新增了一个操作Object.assign()，会忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。*/

/*
 * 属性的遍历
 * ES6一共有5种方法可以遍历对象的属性。
 * 1）for...in

 for...in循环遍历对象自身的和继承的可枚举属性（不含Symbol属性）。

 （2）Object.keys(obj)

 Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）。

 （3）Object.getOwnPropertyNames(obj)

 Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）。

 （4）Object.getOwnPropertySymbols(obj)

 Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有Symbol属性。

 （5）Reflect.ownKeys(obj)

 Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管是属性名是Symbol或字符串，也不管是否可枚举。

 以上的5种方法遍历对象的属性，都遵守同样的属性遍历的次序规则。

 首先遍历所有属性名为数值的属性，按照数字排序。
 其次遍历所有属性名为字符串的属性，按照生成时间排序。
 最后遍历所有属性名为Symbol值的属性，按照生成时间排序
 */

/**
 * __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
 * __proto__属性（前后各两个下划线），用来读取或设置当前对象的prototype对象。
 * Object.setPrototypeOf方法的作用与__proto__相同，用来设置一个对象的prototype对象
 * 该方法与setPrototypeOf方法配套，用于读取一个对象的prototype对象。
 */

/**
 * Object.keys()，Object.values()，Object.entries()
 */














