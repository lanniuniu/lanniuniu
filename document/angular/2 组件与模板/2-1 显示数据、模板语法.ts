/*
一、显示数据

使用插值表达式
使用变量初始化
使用模板文件
使用*ngFor 循环
使用*ngIf 进行条件显示
为数据创建一个类
 */

/*
二、模板语法

忽略script标签，以阻止脚本注入攻击的风险
插值表达式可以把计算后的字符串插入到 HTML 元素标签内的文本或对标签的属性进行赋值。
插值表达式可以调用宿主组件的方法
模板表达式不能使用全局命名空间的任何东西

绑定的类型根据数据流的方向可以分为3种，从数据源到视图{{}} [] bind、从视图到数据源() on和双向流 [()] bindon

HTML attribute 与 DOM property 的对比
HTML attribute是html语言内置的，dom是自定义的
而angular的模板绑定是 通过 property 和事件来工作的

但是angular也提供了attribute [attr.some]、class [class.come] 和 style [style.color]绑定
 */

/*
$event 和事件处理语句

使用 EventEmitter 实现自定义事件
deleteRequest = new EventEmitter<Hero>();

delete() {
  this.deleteRequest.emit(this.hero);
}
 */

/*
指令

内置属性指令

[NgClass]= 一个对象 可以设置多个class是否显示
[class.some]="isBoolean" 设置单个class

[NgStyle]=  同理  样式使用-，和css一样

NgModel - 使用[(ngModel)]双向绑定到表单元素

内置结构型指令

*ngIf 这个和显示和隐藏不是一回事 ，if有无会销毁或建立相应dom和组件状态资源

*ngFor of
带索引的 *ngFor <div *ngFor="let hero of heroes; let i=index">{{i + 1}} - {{hero.name}}</div>
带 trackBy 的 *ngFor
ngFor 指令有时候会性能较差，特别是在大型列表中。 对一个条目的一丁点改动、移除或添加，都会导致级联的 DOM 操作。
所以， 使用trackBy ，当使用trackBy指定的东西更改时，dom才发生更改

*ngSwitch *ngSwitchCase *ngSwitchDefault
 */

/*
模板引用变量
模板引用变量通常用来引用模板中的某个 DOM 元素
<input #phone placeholder="phone number">
<button (click)="callPhone(phone.value)">Call</button>

ref- 前缀代替 #也可以
 */

/*
声明输入与输出属性
@Input()  hero: Hero;
@Output() deleteRequest = new EventEmitter<Hero>();

<app-hero-detail [hero]="currentHero" (deleteRequest)="deleteHero($event)">
</app-hero-detail>

 */

/*
模板表达式操作符  管道和安全导航操作符

管道 |  级联  内置多个 uppercase date带参数 json对调试有用
安全导航操作符?.  防止为空时 应用报错
类型转换函数 $any

 */
