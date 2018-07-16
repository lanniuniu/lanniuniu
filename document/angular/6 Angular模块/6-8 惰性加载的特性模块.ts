/*
1.创建应用
ng new customer-app --routing

2.创建一个带路由的特性模块
ng generate module customers --routing

3.向特性模块中添加组件
ng generate component orders/order-list

4.建立 UI

5.配置路由
特性路由为子路由，挂载到跟路由上
{
    path: 'customers',
    loadChildren: 'app/customers/customers.module#CustomersModule'
},
{
    path: 'orders',
    loadChildren: 'app/orders/orders.module#OrdersModule'
},

6.配置该特性模块的路由

7.forRoot() 与 forChild()

 */