/*
根模块 然后从bootstrap入口
@NgModule 装饰器表明 AppModule 是一个 NgModule 类。 @NgModule 获取一个元数据对象，它会告诉 Angular 如何编译和启动本应用。

declarations —— 该应用所拥有的组件。

imports —— 导入 BrowserModule 以获取浏览器特有的服务，比如 DOM 渲染、无害化处理和位置（location）。

providers —— 各种服务提供商。

bootstrap —— 根组件，Angular 创建它并插入 index.html 宿主页面。
 */