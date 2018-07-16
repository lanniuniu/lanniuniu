/*
1.<base href>
大多数带路由的应用都要在index.html的 <head> 标签下先添加一个 <base> 元素，来告诉路由器该如何合成导航用的 URL。
2.从路由库中导入
3.配置
 路由参数
 data 属性用来存放于每个具体路由有关的任意信息。
 空路径（''）表示应用的默认路径
 ** 路径是一个通配符
4.路由出口
<router-outlet></router-outlet>
5.路由器链接
routerLink
routerLinkActive
6.路由器状态
用 Router 服务及其 routerState 属性来访问当前的 RouterState 值。
7.激活的路由
ActivatedRoute  一个服务

url

路由路径的 Observable 对象，是一个由路由路径中的各个部分组成的字符串数组。

data

一个 Observable，其中包含提供给路由的 data 对象。也包含由解析守卫（resolve guard）解析而来的值。

paramMap

一个 Observable，其中包含一个由当前路由的必要参数和可选参数组成的map对象。用这个 map 可以获取来自同名参数的单一值或多重值。

queryParamMap

一个 Observable，其中包含一个对所有路由都有效的查询参数组成的map对象。 用这个 map 可以获取来自查询参数的单一值或多重值。

fragment

一个适用于所有路由的 URL 的 fragment（片段）的 Observable。

outlet

要把该路由渲染到的 RouterOutlet 的名字。对于无名路由，它的路由名是 primary，而不是空串。

routeConfig

用于该路由的路由配置信息，其中包含原始路径。

parent

当该路由是一个子路由时，表示该路由的父级 ActivatedRoute。

firstChild

包含该路由的子路由列表中的第一个 ActivatedRoute。

children

包含当前路由下所有已激活的子路由。

8.路由事件




 */