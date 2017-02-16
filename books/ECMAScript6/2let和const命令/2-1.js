{
    var a = 1;
    let b = 2;
}
a;
// b;//报错未定义，let只能在一个大括号内有效
//let和var的作用域 example
var c = [];
for(var i = 0; i<10; i++){
    c[i] = function () {
        console.log(i);
    }
}
c[6]();
c[1]();
/**
 * var 在全局范围有效，所以会覆盖上一轮的值，导致c[1]和c[6]一样的输出，
 * 而let仅仅在块级作用域内有效
 */
var d = [];
for(let q = 0; q<10; q++){
    d[q] = function () {
        console.log(q);
    }
}
d[2]();
d[6]();

