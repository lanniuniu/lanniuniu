/**
 * Created by 懒牛牛 on 2017/1/6.
 */
/**
 * 属性名的遍历
 * Symbol 作为属性名,该属性不会出现在for...in、for...of循环中，
 * 也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
 * 但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名。
 * Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
 * @type {{}}
 */
var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj.a = "我是a";
obj.b = function(argc){
    return '我是b';
};
obj[a] = 'Hello';
obj[b] = 'World';

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols);
// [Symbol(a), Symbol(b)]

//Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。
var mySymbol = Reflect.ownKeys(obj);
console.log(mySymbol);
