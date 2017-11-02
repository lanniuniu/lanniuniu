/**
 * Created by 懒牛牛 on 2017/11/1.
 */

/*
错误处理

除非 NODE_ENV 被配置为 "test"，Koa 都将会将所有错误信息输出到 stderr，也可以自定义「错误事件」来监听 Koa app 中发生的错误，
比如记录错误日志
 */

/*
应用上下文

Koa 的上下文封装了 request 与 response 对象至一个对象中，并提供了一些帮助开发者编写业务逻辑的方法。
为了方便，你可以在 ctx.request 和 ctx.response 中访问到这些方法。

每一个请求都会创建一段上下文。在控制业务逻辑的中间件中，上下文被寄存在 this 对象中：

app.use(function *(){
  this; // 上下文对象
  this.request; // Request 对象
  this.response; // Response 对象
});
为了使用方便，许多上下文属性和方法都被委托代理到他们的 ctx.request 或 ctx.response，
比如访问 ctx.type 和 ctx.length 将被代理到 response 对象，ctx.path 和 ctx.method 将被代理到 request 对象。

request 和 response 有许多API,API文档见：https://github.com/guo-yu/koa-guide#应用配置settings

 */

/*
Request ctx.request 对象是对 Node 原生请求对象的抽象包装，提供了一些非常有用的方法。

req.header 返回请求头

req.method 返回请求方法

req.method= 设置 req.method ，用于实现输入 methodOverride() 的中间件

req.length 返回 req 对象的 Content-Length (Number)

req.url 返回请求 url

req.url= 设置请求 url，用于进行 url 重写

req.path 返回请求 pathname

req.path= 设置请求 pathname，如果原有 url 存在查询字符串，则保留这些查询。

req.querystring 返回 url 中的查询字符串，去除了头部的 '?'

req.querystring= 设置查询字符串，不包含 '?'

req.search 返回 url 中的查询字符串，包含了头部的 '?'

req.search= 设置查询字符串，包含 '?'

req.host 返回请求主机名，不包含端口；当 app.proxy 设置为 true 时，支持 X-Forwarded-Host。

req.type 返回 req 对象的 Content-Type，不包括 charset 属性，

req.query 返回经过解析的查询字符串

req.query= 设置给定的对象为查询对象。

req.fresh 检查客户端请求的缓存是否是最新。当缓存为最新时，可编写业务逻辑直接返回 304

req.stale 与 req.fresh 返回的结果正好相反

req.protocol

返回请求协议名

req.secure

判断请求协议是否为 HTTPS 的快捷方法

req.ip

返回请求IP

req.ips

返回请求IP列表

req.subdomains

返回请求对象中的子域名数组。子域名数组会自动由请求域名字符串中的 . 分割开，在没有设置自定义的 app.subdomainOffset 参数时，
默认返回根域名之前的所有子域名数组。

req.is(type)

判断请求对象中 Content-Type 是否为给定 type 的快捷方法，如果不存在 request.body，将返回 undefined，
如果没有符合的类型，返回 false，除此之外，返回匹配的类型字符串。

req.accepts(type)

判断请求对象中 Accept 是否为给定 type 的快捷方法，当匹配到符合的类型时，返回最匹配的类型，
否则返回 false（此时服务器端应当返回 406 "Not Acceptable" ），传入参数可以是字符串或者数组。

req.acceptsEncodings(encodings) req.acceptsCharsets(charsets) req.acceptsLanguages(langs)

判断客户端是否接受给定的编码方式的快捷方法，当有传入参数时，返回最应当返回的一种编码方式。
 */

/*
response

res.header 获取返回头

res.status 获取返回状态

res.status= 设置返回状态

res.length=

设置返回头的 Content-Length 属性

res.length

返回返回头的 Content-Length 属性，当不存在 Content-Length 属性时，根据 res.body 推断

res.body

获取 res.body，当 res.body 为 null ，但返回状态仍为 200 时，koa 将会返回 404 页面。

res.body= 设置请求返回的主要内容

res.get(field) 获取指定的返回头属性，属性名称区分大小写。

res.set(field, value) 使用给定的参数设置一个返回头属性

res.set(fields) 使用给定的对象一次设置多个返回头属性

res.remove(fields) 删除指定的返回头属性

res.type 获取返回头中的 Content-Type，不包括 "charset" 等属性。

res.type= 使用字符串或者文件后缀设定返回的 Content-Type

res.redirect(url, [alt]) 返回一个 302 跳转到给定的 url，您也可以使用关键词 back 来跳转到该 url 的上一个页面（refer），当没有上一个页面时，默认会跳转到 '/'

res.attachment([filename]) 设置返回熟悉 Content-Disposition 为 "attachment"，并告知客户端进行下载。

res.headerSent 判断一个响应头是否已经发送到客户端，通常用来检测客户端是否收到了错误信息。

res.lastModified 如果返回头中存在 Last-Modified 属性，则返回它。

res.lastModified= 设置返回头中的 Last-Modified 属性，可以使用时间对象或者时间字符串。

res.etag= 设置返回头的 Etag 字段。koa 不提供关于 Etag 的获取方法。
 */

