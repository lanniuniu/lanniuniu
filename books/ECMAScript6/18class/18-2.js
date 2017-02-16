/**
 * Created by 懒牛牛 on 2017/1/18.
 */
/**
 * constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
 * 一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
 * constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象
 * 类的所有实例共享一个原型对象。这也意味着，可以通过"实例"的__proto__属性为Class添加方法。(改变了实例 不推荐使用)
 */
class Point{

}
var p1 = new Point();
var p2 = new Point();
console.log(p1.__proto__ === p2.__proto__);
p1.__proto__.hello = function () {
    return 'hello,lanniuniu!'
};
console.log(p1.hello());
console.log('---------------');
//不存在变量提升 继承有关，必须保证子类在父类之后定义。

//class表达式
//如下，这个类的名字是MyClass而不是Me，Me只在Class的内部代码可用，指代当前类。
const myClass = class Me{
    getName(){
        console.log(Me.name);
    }
};
let name1 = new myClass();
name1.getName();
//Me.getName() 报错，Me是内部使用类名
console.log('---------------------');

//私有方法 1.在方法前面加上"下划线" 2.移除模块 3.使用Symbol
const oxox1 = Symbol('变量1');
const oxox2 = Symbol('变量2');
























