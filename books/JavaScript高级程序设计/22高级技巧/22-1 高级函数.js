/**
 * Created by 懒牛牛 on 2017/2/22.
 */

/*
高级函数

高级的类型检测：判断函数是否原生
使用Object.prototype.toString() 来检测 看是否返回"[object 类型]"
 */

/*
作用域安全的构造函数
使用类型检测 判断作用域是否为window等全局变量
 */
function Person(name, age, job) {
    if(this instanceof Person){
        this.name = name;
        this.age = age;
        this.job = job;
    }else {
        return new Person(name, age, job);
    }
}

/*
惰性载入函数
表示函数执行的分支仅仅发生一次
1.在函数被调用时在处理函数
2.声明函数时就指定适当的函数
优点：执行分支代码时牺牲一点性能
 */

/*
函数绑定 bind() 需要更多内存
 */

/*
函数柯里化 创建已经设置好了一个或多个参数的函数 bind(this,参数)
 */


















