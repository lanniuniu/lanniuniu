/**
 * Created by 懒牛牛 on 2017/11/27.
 */

/*
异常捕获

得益于框架底层采用的 co 库将异步编码变成了同步模型，同时错误也完全可以用 try catch 来捕获。
在编写应用代码时，所有地方都可以直接用 try catch 来捕获异常。

框架也考虑到了这类场景(异步发生错误使用try catch无法捕捉)，提供了 ctx.runInBackground(scope) 辅助方法，
通过它又包装了一个异步链，所有在这个 scope 里面的错误都会统一捕获。
 */

/*
框架通过 onerror 插件提供了统一的错误处理机制。
对一个请求的所有处理方法（Middleware、Controller、Service）中抛出的任何异常都会被它捕获，
并自动根据请求想要获取的类型返回不同类型的错误（基于 Content Negotiation）。

errorPageUrl

onerror 插件的配置中支持 errorPageUrl 属性，当配置了 errorPageUrl 时，一旦用户请求线上应用的 HTML 页面异常，就会重定向到这个地址。
在 config/config.default.js 中

// config/config.default.js
module.exports = {
  onerror: {
    // 线上页面发生异常时，重定向到这个页面上
    errorPageUrl: '/50x.html',
  },
};
 */

/*
自定义统一异常处理

尽管框架提供了默认的统一异常处理机制，但是应用开发中经常需要对异常时的响应做自定义，特别是在做一些接口开发的时候。
框架自带的 onerror 插件支持自定义配置错误处理方法，可以覆盖默认的错误处理方法。

 */

/*
404

框架并不会将服务端返回的 404 状态当做异常来处理，但是框架提供了当响应为 404 且没有返回 body 时的默认响应。

自定义 404 响应

在一些场景下，我们需要自定义服务器 404 时的响应，和自定义异常处理一样，我们也只需要加入一个中间件即可对 404 做统一处理
 */






