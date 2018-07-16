/*
javascript中，模块是内含JavaScript代码的独立文件，这样能让代码加上命名空间
 */

/*
angular模块是 一些带有 @NgModule 装饰器的类。

Angular 模块只绑定了可声明的类，这些可声明的类只是供Angular 编译器用的。

与 JavaScript 类把它所有的成员类都放在一个巨型文件中不同，你要把该模块的类列在它的 @NgModule.declarations 列表中。

Angular 模块只能导出可声明的类。这可能是它自己拥有的也可能是从其它模块中导入的。它不会声明或导出任何其它类型的类。

与 JavaScript 模块不同，NgModule 可以通过把服务提供商加到 @NgModule.providers 列表中，来用服务扩展整个应用。
 */