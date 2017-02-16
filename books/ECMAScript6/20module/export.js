/**
 * Created by 懒牛牛 on 2017/1/19.
 */
function hello(name) {
    console.log(`hello,${name}`);
}
var fileName = 'export.js';
// export {
//     hello,
//     fileName
// }
(function foo(x,y=function () {
    x=2
}) {
    var x =3;
    y();
    console.log(x);
})();














