/**
 * Created by 懒牛牛 on 2017/1/17.
 */
//方式2 把对象封装到模块中
function hello2() {
    var name;
    this.setName = function (thyname) {
        name = thyname;
    };
    this.sayHello = function () {
        console.log('hello,'+name+'!');
    };
}
module.exports = hello2;






