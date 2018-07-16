/*
入口组件是 Angular 命令式加载的任意组件（也就是说你没有在模板中引用过它），
 你可以在 NgModule 中引导它，或把它包含在路由定义中来指定入口组件。
 */

/*
bootstrap

entryComponents 数组
虽然 @NgModule 装饰器具有一个 entryComponents 数组，但大多数情况下你不用显式设置入口组件，
因为 Angular 会自动把 @NgModule.bootstrap 中的组件以及路由定义中的组件添加到入口组件中。
 虽然这两种机制足够自动添加大多数入口组件，但如果你要用其它方式根据类型来命令式的引导或动态加载某个组件，
 你就必须把它们显式添加到 entryComponents 中了。
 */