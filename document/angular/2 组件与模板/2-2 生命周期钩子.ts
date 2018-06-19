/*
发生顺序如下：
1.ngOnChanges
一旦检测到该组件(或指令)的输入属性发生了变化

2.ngOnInit
在构造函数之后马上执行复杂的初始化逻辑
在 Angular 设置完输入属性之后，对该组件进行准备。

3.ngDoCheck
使用 DoCheck 钩子来检测那些 Angular 自身无法捕获的变更并采取行动。什么行为都会触发。作为其他生命周期的补充

4.ngAfterContentInit
5.ngAfterContentChecked
在外来内容被投影到组件中之后调用它们 强调本视图

6.ngAfterViewInit
7.ngAfterViewChecked
每次创建了组件的子视图后调用它们 强调自视图

8.ngOnDestroy
这里是用来释放那些不会被垃圾收集器自动回收的各类资源的地方。 取消那些对可观察对象和 DOM 事件的订阅。
停止定时器。注销该指令曾注册到全局服务或应用级服务中的各种回调函数。
 */