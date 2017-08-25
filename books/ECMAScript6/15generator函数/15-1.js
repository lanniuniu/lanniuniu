/**
 * Created by 懒牛牛 on 2017/1/16.
 */

/**
 * Generator函数是一个状态机，封装了多个内部状态。
 * Generator函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历Generator函数内部的每一个状态。
 */

//Generator函数是一个普通函数，但是有两个特征。
// 一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield语句，定义不同的内部状态
//调用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象（Iterator object）
//下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。
//换言之，Generator函数是分段执行的，yield语句是暂停执行的标记，而next方法可以恢复执行。
function *firstGenerator() {
    yield 'hello';
    yield 'liupeng';
    return 'end';
}
var gener1 = firstGenerator();
console.log(gener1.next());
console.log(gener1.next());
console.log(gener1.next());
console.log(gener1.next());
console.log(gener1.next());
console.log('--------------');

//yield不能用于普通函数
//另外，yield语句如果用在一个表达式之中，必须放在圆括号里面。
//         console.log('Hello' + (yield)); // OK
//         console.log('Hello' + (yield 123)); // OK
//yield语句用作函数参数或赋值表达式的右边，可以不加括号。

//next方法的参数表示上一个yield语句的返回值

function* foo(x) {
    let y = 2 * (yield (x + 1));
    let z = yield (y / 3);
    return (x + y + z);
}

let a = foo(5);
console.log(a.next()); // Object{value:6, done:false}
console.log(a.next()); // Object{value:NaN, done:false}
console.log(a.next()); // Object{value:NaN, done:true}

let b = foo(5);
console.log(b.next()); // { value:6, done:false }
console.log(b.next(12)); // { value:8, done:false }
console.log(b.next(13)); // { value:42, done:true }
console.log('--------------------');

//for...of循环可以自动遍历Generator函数时生成的Iterator对象，且此时不再需要调用next方法。
function *foo() {
    yield 1;
    yield 2;
    yield 3;
    return 4;//这个并不会在for of循环中遍历到
}
for(let i of foo()){
    console.log(i);
}
console.log('--------------');

//对于generator返回的iterator对象，可以用扩展运算符、Array.from()、解构赋值、for of

















