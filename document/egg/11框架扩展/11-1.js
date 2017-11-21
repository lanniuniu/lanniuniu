/**
 * Created by 懒牛牛 on 2017/11/20.
 */

/*
框架提供了多种扩展点扩展自身的功能：

Application
Context
Request
Response
Helper
 */

/*
Application

app 对象指的是 Koa 的全局应用对象，全局只有一个，在应用启动时被创建。

 访问方式

ctx.app

Controller，Middleware，Helper，Service 中都可以通过 this.app 访问到 Application 对象，例如 this.app.config 访问配置对象。

在 app.js 中 app 对象会作为第一个参数注入到入口函数中
// app.js
module.exports = app => {
  // 使用 app 对象
};

扩展方式

框架会把 app/extend/application.js 中定义的对象与 Koa Application 的 prototype 对象进行合并，
在应用启动时会基于扩展后的 prototype 生成 app 对象。

# 方法扩展
# 属性扩展
一般来说属性的计算只需要进行一次，那么一定要实现缓存，否则在多次访问属性时会计算多次，这样会降低应用性能。

推荐的方式是使用 Symbol + Getter 的模式。
 */

/*
Context

Context 指的是 Koa 的请求上下文，这是 请求级别 的对象，每次请求生成一个 Context 实例，通常我们也简写成 ctx。
在所有的文档中，Context 和 ctx 都是指 Koa 的上下文对象。

访问方式

middleware 中 this 就是 ctx，例如 this.cookies.get('foo')。
controller 有两种写法，类的写法通过 this.ctx，方法的写法直接通过 ctx 入参。
helper，service 中的 this 指向 helper，service 对象本身，使用 this.ctx 访问 context 对象，
例如 this.ctx.cookies.get('foo')。

 扩展方式

框架会把 app/extend/context.js 中定义的对象与 Koa Context 的 prototype 对象进行合并，
在处理请求时会基于扩展后的 prototype 生成 ctx 对象。

属性扩展

一般来说属性的计算在同一次请求中只需要进行一次，那么一定要实现缓存，否则在同一次请求中多次访问属性时会计算多次，这样会降低应用性能。

推荐的方式是使用 Symbol + Getter 的模式。
 */

/*
Request

Request 对象和 Koa 的 Request 对象相同，是 请求级别 的对象，它提供了大量请求相关的属性和方法供使用。
 */

/*
Response

Response 对象和 Koa 的 Response 对象相同，是 请求级别 的对象，它提供了大量响应相关的属性和方法供使用
 */

/*
Helper

Helper 函数用来提供一些实用的 utility 函数。

它的作用在于我们可以将一些常用的动作抽离在 helper.js 里面成为一个独立的函数，这样可以用 JavaScript 来写复杂的逻辑，避免逻辑分散各处。另外还有一个好处是 Helper 这样一个简单的函数，可以让我们更容易编写测试用例。

框架内置了一些常用的 Helper 函数。我们也可以编写自定义的 Helper 函数。
 */





