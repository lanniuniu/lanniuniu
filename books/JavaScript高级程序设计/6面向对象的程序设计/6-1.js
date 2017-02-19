/**
 * Created by 懒牛牛 on 2017/2/17.
 */
let publicFunc = require('../public');
/*
理解对象

属性类型：数据属性和访问器属性
 */

//数据属性 configurable  Enumerable writable value
//要修改属性默认的特性，使用Object.defineProperty() 三个参数 属性所在对象 属性名字 描述对象
let pledge = {};
Object.defineProperty(pledge,'love',{
    writable:false,
    value:'love qinqin!'
});
console.log(pledge.love);
pledge.love = 'don\'t love';
console.log(pledge.love);
publicFunc.cutOff();

//configurable一旦设置为false就不能变了

//访问器设置 getter setter 在读取或写入访问器属性时，会调用getter或setter函数，且该函数返回有效的值或如何处理数据
//configurable enumerable get set
let pledge2 = {
    _love:'love qinqin',//下划线不能少，表示只能通过对象方法访问的属性
    years:100
};
Object.defineProperty(pledge2,'love',{
    get:function () {
        return this._love;
    },
    set:function (value) {
        this._love = 'love qinqin forever';
        this.years = 520;
    }
});
console.log(pledge2.love);
pledge2.love = 'don\'t?';
console.log(pledge2._love);
console.log(pledge2.years);
publicFunc.cutOff();

/*
定义多个属性
Object.defineProperties() 通过对象嵌套
 */

/*
读取属性的特性
Object.getOwnPropertyDescriptor() 取得给定属性的描述符  接受属性所在对象和属性名称两个参数
    返回一个对象 或访问器属性或数据属性，但只能用于实例属性
    可以针对任何对象  包括dom bom
 */











