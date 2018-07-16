/*
创建服务
ng generate service Xxx
 */

/*
服务的作用域
可以作用于 某个模块(providedIn: UserModule),也可以作用域于全局（providedIn: 'root'）,
也可以作用于某个组件（provider）
 */

/*
在模块中提供服务还是在组件中？

要在根模块中提供整个应用都需要的服务，在惰性加载模块中提供限定范围的服务。
 */