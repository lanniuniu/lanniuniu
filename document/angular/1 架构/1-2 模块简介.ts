/*
1.angular是一个模块化应用系统，称为NgModule
 */

/*
@NgModule 元数据
属性：
1.declarations 可声明对象表，那些属于本 NgModule 的组件、指令、管道。
2.exports（导出表） 那些能在其它模块的组件模板中使用的可声明对象的子集。
3.imports（导入表） 那些导出了本模块中的组件模板所需的类的其它模块。
4.providers本模块向全局服务中贡献的那些服务的创建器。
这些服务能被本应用中的任何部分使用。（你也可以在组件级别指定服务提供商，这通常是首选方式。）
5.bootstrap 应用的主视图，称为根组件。它是应用中所有其它视图的宿主。只有根模块才应该设置这个 bootstrap 属性。
 */

/*
NgModule和组件
NgModule 和 JavaScript 的模块
Angular 自带的库
每个 Angular 库的名称都带有 @angular 前缀。
使用 npm 包管理器安装它们，并使用 JavaScript 的 import 语句导入其中的各个部分。
 */