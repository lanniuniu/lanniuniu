/**
 * Created by 懒牛牛 on 2017/11/1.
 */

/*
一个 Koa Application（以下简称 app）由一系列 generator 中间件组成。按照编码顺序在栈内依次执行，
从这个角度来看，Koa app 和其他中间件系统（比如 Ruby Rack 或者 Connect/Express ）没有什么太大差别，
不过，从另一个层面来看，Koa 提供了一种基于底层中间件编写「语法糖」的设计思路，这让设计中间件变得更简单有趣。
在这些中间件中，有负责内容协商（content-negotation）、缓存控制（cache freshness）、反向代理（proxy support）
与重定向等等功能的常用中间件（详见 中间件 章节），但如前所述， Koa 内核并不会打包这些中间件，
 */

/*
级联代码
 */

/*
应用配置
应用的配置是 app 实例的属性。目前来说，Koa 的配置项如下：

app.name 应用名称
app.env 执行环境，默认是 NODE_ENV 或者 "development" 字符串
app.proxy 决定了哪些 proxy header 参数会被加到信任列表中
app.subdomainOffset 被忽略的 .subdomains 列表，详见下方 api
 */
