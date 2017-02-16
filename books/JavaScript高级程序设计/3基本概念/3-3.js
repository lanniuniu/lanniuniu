/**
 * Created by 懒牛牛 on 2017/2/15.
 */

/*
 数据类型 undefined null number string boolean object
 */

/*
 typeof 操作符
 */

/*
 undefined
 为声明的变量可以typeof 但不能使用其他语句
 */

/*
 null
 typeof null == object
 null作为空对象指针
 */

/*
 boolean
 true和false是区分大小写的
 Boolean()转型函数
 */
let str1 = '';
let str2 = 'love';
if (str1) {
    console.log('love qinqin!');
}
if (str2){
    console.log('love qinqin!')
}
console.log('-------------------');

/*
number
八进制0
16进制0x

浮点数值
必须包含小数点
由于保存空间为整数的两倍，所以会在恰当的时机转化为整数，小数点后没有数字或数字只有0时会解析为整数

指数表示法

虽然浮点数的精度为17位，但进行算数计算时远不如整数。
例如：0.1+0.2！=0.3，而是0.30000000000000004
因为永远不要测试某个特定的浮点数值
 */
console.log(0.1+0.2==0.3);//false
console.log('---------------');
/*
数值范围
 Number.MAX_VALUE Number.MIN_VALUE (+ -)Infinity
isFinite()
 Number.NEGATIVE_INFINITY Number.POSITIVE_INFINITY

NaN 即非数值是一个特殊的数值
用于一个本来要返回数值操作数未返回数值的情况
isNaN() 任何不能被转化为数值的值都会导致这个函数返回true
 */
console.log(isNaN(false));//false可以转化为0
console.log(isNaN(true));//true可以转化为1
console.log('----------------');

/*
数值转换
Number()
parseInt()
parseFloat()
忽略前导0，失去解析8进制的能力，所以要在函数加第二个参数表示进制
 */
console.log(Number(false));//0
console.log(Number(null));//0
console.log(Number(undefined));//NaN
console.log(Number('love'));//NaN
console.log(Number(''));//0
//若是对象，先valueOf()再使用前面的规则  若为NaN 先toString()再前面的规则

//parseInt()更加合理，空字符串为NaN，会解析出字符之前的数字
console.log(parseInt('520qinqin'));
console.log('-------------------');

//parseFloat() 只识别10进制  16进制的数会被解析为0
console.log(parseFloat('love qinqin'));//0
console.log('---------------------------');

/*
string

字符字面量(转义序列)
\n \t \b \r \f \\ \' \" \xnn \unnnn

toString() 除了null和undefined，都可以使用
String()  先判断有无toString()，如无，就"null"或者"undefined"
 */
console.log('love\tqinqin');

/*
object

object每一个实例都有如下方法：
constructor 保存这用于当前对象的函数
hasOwnProperty(propertyName) 检查给定的属性在当前对象实例中（而不是实例原型）是否存在
isPrototypeOf() 用于检查传入的对象是否是当前对象的原型
propertyIsEnumerable() 是否可以用for in来枚举
toLocaleString() 返回对象字符串表示  与执行环境的地区对应
toString() 返回对象字符串表示
valueOf() 返回对象字符串表示、数值、布尔值
 */
let qinqin = {
    name:'qinqin',
    hobby:'reading',
    love:()=>console.log('love lanniuniu!')
};
console.log(qinqin.love.valueOf());
console.log(qinqin.love.toLocaleString());
console.log(qinqin.hasOwnProperty('name'));











