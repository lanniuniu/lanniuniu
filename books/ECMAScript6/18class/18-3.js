/**
 * Created by 懒牛牛 on 2017/1/19.
 */
/**
 * this的使用
 * 类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错
 * 也可以使用constructor构造方法中绑定this 如this.printName = this.printName.bind(this);
 * 也可以使用箭头函数
 * 也可以使用Proxy 获取方法的时候，自动绑定this。
 */
class Hello{
    getName(name){
        this.hello(name);
    }
    hello(name){
        console.log(`hello,${name}`);
    }
}
var hello1 = new Hello();
hello1.getName('lanniuniu');
console.log('----------------');


/**
 * 严格模式
 * name属性 返回紧跟在class关键字后面的类名。
 * Class之间可以通过extends关键字实现继承
 * super关键字，表示父类的构造函数，用来新建父类的this对象。
 * 在子类的"构造函数"中，只有调用super之后，才可以使用this关键字，否则会报错。
 * 类的prototype属性和__proto__属性
 * （1）子类的__proto__属性，表示构造函数的继承，总是指向父类。
 * （2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
 */
class Son extends Hello{
    constructor(){
        super();//调用super方法后才能使用this
        console.log(this);
    }
}
var hello2 = new Son();
hello2.getName('lanniuniu');
console.log('----------------');
/**
 * extends的继承目标
 * 只要是一个有prototype属性的函数 就能被继承
 * 1.任意函数都有prototype属性，所以可以被继承
 * 2.Object类
 * 3.不继承
 * 4.继承空
 */

//Object.getPrototypeOf方法可以用来从子类上获取父类。

/**
 * super关键字
 * 1.作为函数调用时 代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数，而只能在构造函数内执行
 * 2.super作为对象时，指向父类的原型对象。
 */

/**
 * 实例的__proto__属性
 * 子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。也就是说，子类的原型的原型，是父类的原型。
 */

/**
 * 原生构造函数的继承
 * 原生构造函数是指语言内置的构造函数，通常用来生成数据结构。
 * Boolean()Number()String()Array()Date()Function()RegExp()Error()Object()都可能通过子类继承来实现新版功能的数据结构
 */

/**
 * Class的取值函数（getter）和存值函数（setter）
 * 在Class内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
 */
class MyClass {
    get get1(){
        return 'get'
    }
    set set1(value){
        console.log('set')
        return 'set';
    }
}
var class2 = new MyClass();
console.log(class2.get1);
class2.set1 = 1;
console.log('-----------------');
/**
 * Class 的静态方法
 * 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
 * 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
 * 父类的静态方法，可以被子类继承。
 */

/**
 * Class的静态属性和实例属性
 * 静态属性指的是Class本身的属性，即Class.propname，而不是定义在实例对象（this）上的属性。
 * Class内部只有静态方法，没有静态属性。只能在外部进行属性赋值
 */

/**
 * new.target属性
 * new是从构造函数生成实例的命令。ES6为new命令引入了一个new.target属性，（在构造函数中）返回new命令作用于的那个构造函数。
 * 如果构造函数不是通过new命令调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。
 */





















