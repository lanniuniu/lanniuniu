/**
 * Created by 懒牛牛 on 2017/1/4.
 */
/**
 * 不存在变量提升，let会导致报错，而var只是未定义
 */
console.log(a);
var a = 2;
//console.log(b);
// let b = 2;

/**
 *let和const
 * ES6暂时性死区temporal dead zone,所有变量在块级作用域中未申明使用就会报错
 * 只要块级作用域存在let或const，那么就绑定这个区域，凡是未申明使用就会报错，
 * 意味着typeof不是100%安全
 */
if (true) {
    // TDZ开始
    //tmp = 'abc'; // ReferenceError
    //console.log(tmp); // ReferenceError

    let tmp; // TDZ结束
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}

/**
 * 未申明报错
 * @param x
 * @param y
 * @returns {[*,*]}
 */
function bar(x = y, y = 0) {
    return [x,y];
}
//bar();//报错

/**
 * let与const不允许在相同作用域中重复申明
 */
function a() {
    //let a=1;
    var a=1;
}


