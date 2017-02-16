/**
 * Created by 懒牛牛 on 2017/1/12.
 */
/**
 * map
 * 相比与object，键不仅限于字符串，可以使用对象
 */
var m = new Map();
var o = {
    p:"hello world"
};
m.set(o,'content');
console.log(m);
console.log(m.has(o));
console.log(m.delete(o));
console.log(m.has(o));
console.log('---------------');
//作为构造函数，Map也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
var map = new Map([
    ['name','liupeng'],
    ['age','20']
]);
console.log(map);
console.log(map.size);
console.log('-------------');

//如果对同一个键多次赋值，后面的值将覆盖前面的值。
//如果读取一个未知的键，则返回undefined。
//注意，只有对同一个对象的引用，Map结构才将其视为同一个键。这一点要非常小心。
//Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
var map2 = new Map();
var k1 = ['a'];
var k2 = ['a'];
map2.set(k1,111).set(k2,222);
console.log(map2);
console.log('------------');

//Map结构的实例有以下属性和操作方法。
//（1）size属性
//（2）set(key, value) set方法设置key所对应的键值，然后返回整个Map结构。如果key已经有值，则键值会被更新，否则就新生成该键。
//                        可以采用链式写法
//（3）get(key) get方法读取key对应的键值，如果找不到key，返回undefined。
//（4）has(key)   has方法返回一个布尔值，表示某个键是否在Map数据结构中。
//（5）delete(key)    delete方法删除某个键，返回true。如果删除失败，返回false。
//（6）clear()    clear方法清除所有成员，没有返回值。

//遍历方法 同set一样
// Map原生提供三个遍历器生成函数和一个遍历方法。
//
// keys()：返回键名的遍历器。
// values()：返回键值的遍历器。
// entries()：返回所有成员的遍历器。
// forEach()：遍历Map的所有成员。

//与其他数据结构的互相转换
//（1）Map转为数组  采用扩展运算符
let map3 = new Map().set(true,7).set({foo:3},['abc']);
console.log([...map3][0]);
console.log('--------------------');
//（2）数组转为Map 将数组转入Map构造函数，就可以转为Map。如上面的例子

//（3）Map转为对象 如果所有Map的键都是字符串，它可以转为对象。

//（4）对象转为Map
function objToMap(obj) {
    let map = new Map();
    for(let k of Object.keys(obj)){
        map.set(k,obj[k])
    }
    return map;
}
console.log(objToMap({yes:"1",no:"0"}));
console.log('-----------------');

//（5）Map转为JSON
// Map转为JSON要区分两种情况。一种情况是，Map的键名都是字符串，这时可以选择转为对象JSON。
    //实现方法可以先转换为obj 再进行json编码

//Map的键名有非字符串，这时可以选择转为数组JSON。
function mapToArrayJson(map) {
    return JSON.stringify([...map]);
}

let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
mapToArrayJson(myMap);

//（6）JSON转为Map
// JSON转为Map，正常情况下，所有键名都是字符串
//先转化为obj 再转换为Map



































