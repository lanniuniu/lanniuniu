/**
 * Created by 懒牛牛 on 2017/2/15.
 */
//对象的继承
// function ClassB(sColor) {
//     this.newMethod = ClassA;
//     this.newMethod(sColor);
//     delete this.newMethod;
// }
// 在这段代码中，为 ClassA 赋予了方法 newMethod（请记住，函数名只是指向它的指针）。然后调用该方法，传递给它的是 ClassB 构造函数的参数 sColor。最后一行代码删除了对 ClassA 的引用，这样以后就不能再调用它。
// 所有新属性和新方法都必须在删除了新方法的代码行后定义。否则，可能会覆盖超类的相关属性和方法：