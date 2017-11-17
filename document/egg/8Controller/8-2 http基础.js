/**
 * Created by 懒牛牛 on 2017/11/16.
 */

/*
客户端请求和接受的内容

请求
method path Host Content-Type

回应
第一行中也包含了三段，其中我们常用的主要是响应状态码，这个例子中它的值是 201，它的含义是在服务端成功创建了一条资源。

和请求一样，从第二行开始到下一个空行之间都是响应头，这里的 Content-Type, Content-Length 表示这个响应的格式是 JSON，长度为 8 个字节。

最后剩下的部分就是这次响应真正的内容。
 */

/*
获取HTTP请求参数

query
我们可以通过 context.query 拿到解析过后的这个参数体
当 Query String 中的 key 重复时，context.query 只取 key 第一次出现时的值，后面再出现的都会被忽略。

queries
有时候我们的系统会设计成让用户传递相同的 key，例如 GET /posts?category=egg&id=1&id=2&id=3。
针对此类情况，框架提供了 context.queries 对象，这个对象也解析了 Query String，
但是它不会丢弃任何一个重复的数据，而是将他们都放到一个数组中：

 */

/*
Router params

在 Router 中，我们介绍了 Router 上也可以申明参数，这些参数都可以通过 context.params 获取到。
 */

/*
body
框架内置了 bodyParser 中间件来对这两类格式的请求 body 解析成 object 挂载到 context.request.body 上。
HTTP 协议中并不建议在通过 GET、HEAD 方法访问时传递 body，所以我们无法在 GET、HEAD 方法中按照此方法获取到内容。

当请求的 Content-Type 为 application/json，application/json-patch+json，application/vnd.api+json 和
 application/csp-report 时，会按照 json 格式对请求 body 进行解析，并限制 body 最大长度为 100kb。
当请求的 Content-Type 为 application/x-www-form-urlencoded 时，会按照 form 格式对请求 body 进行解析，
并限制 body 最大长度为 100kb。
如果解析成功，body 一定会是一个 Object（可能是一个数组）。

一般来说我们最经常调整的配置项就是变更解析时允许的最大长度，可以在 config/config.default.js 中覆盖框架的默认值

注意：在调整 bodyParser 支持的 body 长度时，如果我们应用前面还有一层反向代理（Nginx），
可能也需要调整它的配置，确保反向代理也支持同样长度的请求 body。
 */

/*
获取上传的文件

请求 body 除了可以带参数之外，还可以发送文件，一般来说，浏览器上都是通过 Multipart/form-data 格式发送文件的，
框架通过内置 Multipart 插件来支持获取用户上传的文件。
在 Controller 中，我们可以通过 context.getFileStream*() 接口能获取到上传的文件流。

要通过 context.getFileStream 便捷的获取到用户上传的文件，需要满足两个条件：
1.只支持上传一个文件。
2.上传文件必须在所有其他的 fields 后面，否则在拿到文件流时可能还获取不到 fields。

用户可以通过在 config/config.default.js 中配置来新增支持的文件扩展名，或者重写整个白名单

注意：当传递了 whitelist 属性时，fileExtensions 属性不生效。

 */

/*
header

除了从 URL 和请求 body 上获取参数之外，还有许多参数是通过请求 header 传递的。框架提供了一些辅助属性和方法来获取。
context.headers，context.header，context.request.headers，context.request.header：这几个方法是等价的，
都是获取整个 header 对象。

context.get(name)，context.request.get(name)：获取请求 header 中的一个字段的值，如果这个字段不存在，会返回空字符串。
我们建议用 context.get(name) 而不是 context.headers['name']，因为前者会自动处理大小写。
由于 header 比较特殊，有一些是 HTTP 协议规定了具体含义的（例如 Content-Type，Accept），有些是反向代理设置的，
已经约定俗成（X-Forwarded-For），框架也会对他们增加一些便捷的 getter，详细的 getter 可以查看 API 文档。
特别是如果我们通过 config.proxy = true 设置了应用部署在反向代理（Nginx）之后，有一些 Getter 的内部处理会发生改变。

# context.host

# context.protocol

# context.ips

# context.ip

 */

/*
Cookie

HTTP 请求都是无状态的，但是我们的 Web 应用通常都需要知道发起请求的人是谁。
为了解决这个问题，HTTP 协议设计了一个特殊的请求头：Cookie。服务端可以通过响应头（set-cookie）将少量数据响应给客户端，
浏览器会遵循协议将数据保存，并在下次请求同一个服务的时候带上
（浏览器也会遵循协议，只在访问符合 Cookie 指定规则的网站时带上对应的 Cookie 来保证安全性）。

通过 context.cookies，我们可以在 Controller 中便捷、安全的设置和读取 Cookie。

Cookie 在 Web 应用中经常承担了传递客户端身份信息的作用，因此有许多安全相关的配置，不可忽视
 */

/*
session
通过 Cookie，我们可以给每一个用户设置一个 Session，用来存储用户身份相关的信息，这份信息会加密后存储在 Cookie 中，
实现跨请求的用户身份保持。
框架内置了 Session 插件，给我们提供了 context.session 来访问或者修改当前用户 Session 。
Session 的使用方法非常直观，直接读取它或者修改它就可以了，如果要删除它，直接将它赋值为 null：
和 Cookie 一样，Session 也有许多安全等选项和功能

配置

对于 Session 来说，主要有下面几个属性可以在 config.default.js 中进行配置:

module.exports = {
  key: 'EGG_SESS', // 承载 Session 的 Cookie 键值对名字
  maxAge: 86400000, // Session 的最大有效时间
};
 */

/*
参数校验

在获取到用户请求的参数后，不可避免的要对参数进行一些校验。

借助 Validate 插件提供便捷的参数校验机制，帮助我们完成各种复杂的参数校验。
通过 context.validate(rule, [body]) 直接对参数进行校验：

当校验异常时，会直接抛出一个异常，异常的状态码为 422，errors 字段包含了详细的验证不通过信息。
如果想要自己处理检查的异常，可以通过 try catch 来自行捕获。

校验规则

参数校验通过 Parameter 完成
自定义校验规则

除了上一节介绍的内置检验类型外，有时候我们希望自定义一些校验规则，让开发时更便捷，
此时可以通过 app.validator.addRule(type, check) 的方式新增自定义规则。
添加完自定义规则之后，就可以在 Controller 中直接使用这条规则来进行参数校验了

 */

/*
调用service
我们并不想在 Controller 中实现太多业务逻辑，所以提供了一个 Service 层进行业务逻辑的封装，这不仅能提高代码的复用性，同时可以让我们的业务逻辑更好测试。

在 Controller 中可以调用任何一个 Service 上的任何方法，同时 Service 是懒加载的，只有当访问到它的时候框架才会去实例化它。
 */

/*
# 发送 HTTP 响应

当业务逻辑完成之后，Controller 的最后一个职责就是将业务逻辑的处理结果通过 HTTP 响应发送给用户。

# 设置 status

HTTP 设计了非常多的状态码，每一个状态码都代表了一个特定的含义，通过设置正确的状态码，可以让响应更符合语义。
框架提供了一个便捷的 Setter 来进行状态码的设置

绝大多数的数据都是通过 body 发送给请求方的，和请求中的 body 一样，在响应中发送的 body，
也需要有配套的 Content-Type 告知客户端如何对数据进行解析。
作为一个 RESTful 的 API 接口 controller，我们通常会返回 Content-Type 为 application/json 格式的 body，内容是一个 JSON 字符串。
作为一个 html 页面的 controller，我们通常会返回 Content-Type 为 text/html 格式的 body，内容是 html 代码段。

由于 Node.js 的流式特性，我们还有很多场景需要通过 Stream 返回响应，例如返回一个大文件，代理服务器直接返回上游的内容，
框架也支持直接将 body 设置成一个 Stream，并会同时处理好这个 stream 上的错误事件。

渲染模板

通常来说，我们不会手写 HTML 页面，而是会通过模板引擎进行生成。 Egg 自身没有集成任何一个模板引擎，但是约定了 View 插件的规范，
通过接入的模板引擎，可以直接使用 ctx.render(template) 来渲染模板生成 html。

JSONP

有时我们需要给非本域的页面提供接口服务，又由于一些历史原因无法通过 CORS 实现，可以通过 JSONP 来进行响应。

由于 JSONP 如果使用不当会导致非常多的安全问题，所以框架中提供了便捷的响应 JSONP 格式数据的方法，封装了 JSONP XSS 相关的安全防范，
并支持进行 CSRF 校验和 referrer 校验。

通过 app.jsonp() 提供的中间件来让一个 controller 支持响应 JSONP 格式的数据。在路由中，我们给需要支持 jsonp 的路由加上这个中间件：

用户请求对应的 URL 访问到这个 controller 的时候，如果 query 中有 _callback=fn 参数，将会返回 JSONP 格式的数据，否则返回 JSON 格式的数据。

JSONP 配置

框架默认通过 query 中的 _callback 参数作为识别是否返回 JSONP 格式数据的依据，
并且 _callback 中设置的方法名长度最多只允许 50 个字符。应用可以在 config/config.default.js 全局覆盖默认的配置：

跨站防御配置

默认配置下，响应 JSONP 时不会进行任何跨站攻击的防范，在某些情况下，这是很危险的。我们初略将 JSONP 接口分为三种类型：

查询非敏感数据，例如获取一个论坛的公开文章列表。
查询敏感数据，例如获取一个用户的交易记录。
提交数据并修改数据库，例如给某一个用户创建一笔订单。
如果我们的 JSONP 接口提供下面两类服务，在不做任何跨站防御的情况下，可能泄露用户敏感数据甚至导致用户被钓鱼。
因此框架给 JSONP 默认提供了 CSRF 校验支持和 referrer 校验支持。

 CSRF

在 JSONP 配置中，我们只需要打开 csrf: true，即可对 JSONP 接口开启 CSRF 校验。

referrer 校验

如果在同一个主域之下，可以通过开启 CSRF 的方式来校验 JSONP 请求的来源，而如果想对其他域名的网页提供 JSONP 服务，我们可以通过配置 referrer 白名单的方式来限制 JSONP 的请求方在可控范围之内。

//config/config.default.js
exports.jsonp = {
  whiteList: /^https?:\/\/test.com\//,
  // whiteList: '.test.com',
  // whiteList: 'sub.test.com',
  // whiteList: [ 'sub.test.com', 'sub2.test.com' ],
};
whiteList 可以配置为正则表达式、字符串或者数组：

正则表达式：此时只有请求的 Referrer 匹配该正则时才允许访问 JSONP 接口。在设置正则表达式的时候，注意开头的 ^ 以及结尾的 \/，
保证匹配到完整的域名
字符串：设置字符串形式的白名单时分为两种，当字符串以 . 开头，例如 .test.com 时，
代表 referrer 白名单为 test.com 的所有子域名，包括 test.com 自身。当字符串不以 . 开头，
例如 sub.test.com，代表 referrer 白名单为 sub.test.com 这一个域名。（同时支持 HTTP 和 HTTPS）

 */

/*
当 CSRF 和 referrer 校验同时开启时，请求发起方只需要满足任意一个条件即可通过 JSONP 的安全校验。

 设置 Header

我们通过状态码标识请求成功与否、状态如何，在 body 中设置响应的内容。而通过响应的 Header，还可以设置一些扩展信息。

通过 context.set(key, value) 方法可以设置一个响应头，context.set(headers) 设置多个 Header。
 */

