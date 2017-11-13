/**
 * Created by 懒牛牛 on 2017/11/10.
 */

/*
从 Koa 继承而来的 4 个对象（Application, Context, Request, Response)
以及框架扩展的一些对象（Controller, Service, Helper, Config, Logger）
 */

/*
Application（app）
Application 是全局应用对象，在一个应用中，只会实例化一个
在它上面我们可以挂载一些全局的方法和对象。我们可以轻松的在插件或者应用中扩展 Application 对象。

获取方式
Application 对象几乎可以在编写应用时的任何一个地方获取到
几乎所有被框架 Loader 加载的文件（Controller，Service，Schedule 等），都可以 export 一个函数，
这个函数会被 Loader 调用，并使用 app 作为参数：

启动自定义脚本
Controller 文件

在 Context 对象上，可以通过 ctx.app 访问到 Application 对象。

在继承于 Controller, Service 基类的实例中，可以通过 this.app 访问到 Application 对象。

 */

/*
Context(ctx)
Context 是一个请求级别的对象
在每一次收到用户请求时，框架会实例化一个 Context 对象，这个对象封装了这次用户请求的信息，
并提供了许多便捷的方法来获取请求参数或者设置响应信息。框架会将所有的 Service 挂载到 Context 实例上，
一些插件也会将一些其他的方法和对象挂载到它上面（egg-sequelize 会将所有的 model 挂载在 Context 上）。

获取方式
最常见的 Context 实例获取方式是在 Middleware, Controller 以及 Service 中。
Controller 中的获取方式在上面的例子中已经展示过了，在 Service 中获取和 Controller 中获取的方式一样，
在 Middleware 中获取 Context 实例则和 Koa 框架在中间件中获取 Context 对象的方式一致。

框架的 Middleware 同时支持 Koa v1 和 Koa v2 两种不同的中间件写法，根据不同的写法，获取 Context 实例的方式也稍有不同

除了在请求时可以获取 Context 实例之外， 在有些非用户请求的场景下我们需要访问 service / model 等 Context 实例上的对象，
我们可以通过 Application.createAnonymousContext() 方法创建一个匿名 Context 实例：

在定时任务中的每一个 task 都接受一个 Context 实例作为参数，以便我们更方便的执行一些定时的业务逻辑：

 */

/*
Request(request) & Response(response)

Request 是一个请求级别的对象，继承自 Koa.Request。
封装了 Node.js 原生的 HTTP Request 对象，提供了一系列辅助方法获取 HTTP 请求常用参数。

Response 是一个请求级别的对象，继承自 Koa.Response。
封装了 Node.js 原生的 HTTP Response 对象，提供了一系列辅助方法设置 HTTP 响应。

获取方式

可以在 Context 的实例上获取到当前请求的 Request(ctx.request) 和 Response(ctx.response) 实例。
Koa 会在 Context 上代理一部分 Request 和 Response 上的方法和属性，参见 Koa.Context。
如上面例子中的 ctx.request.query.id 和 ctx.query.id 是等价的，ctx.response.body= 和 ctx.body= 是等价的。
需要注意的是，获取 POST 的 body 应该使用 ctx.request.body，而不是 ctx.body。
 */

/*
Controller

框架提供了一个 Controller 基类，并推荐所有的 Controller 都继承于该基类实现。这个 Controller 基类有下列属性：

ctx - 当前请求的 Context 实例。
app - 应用的 Application 实例。
config - 应用的配置。
service - 应用所有的 service。
logger - 为当前 controller 封装的 logger 对象。
在 Controller 文件中，可以通过两种方式来引用 Controller 基类
从 app 实例上获取（推荐）
从 egg 上获取

 */

/*
Service

框架提供了一个 Service 基类，并推荐所有的 Service 都继承于该基类实现。

Service 基类的属性和 Controller 基类属性一致，访问方式也类似
 */

/*
Helper

Helper 用来提供一些实用的 utility 函数。它的作用在于我们可以将一些常用的动作抽离在 helper.js 里面成为一个独立的函数，
这样可以用 JavaScript 来写复杂的逻辑，避免逻辑分散各处，同时可以更好的编写测试用例。

Helper 自身是一个类，有和 Controller 基类一样的属性，它也会在每次请求时进行实例化，
因此 Helper 上的所有函数也能获取到当前请求相关的上下文信息。

# 获取方式
可以在 Context 的实例上获取到当前请求的 Helper(ctx.helper) 实例。

除此之外，Helper 的实例还可以在模板中获取到，例如可以在模板中获取到 security 插件提供的 shtml 方法。
 */

/*
Config

我们推荐应用开发遵循配置和代码分离的原则，将一些需要硬编码的业务配置都放到配置文件中，同时配置文件支持各个不同的运行环境使用不同的配置，
使用起来也非常方便，所有框架、插件和应用级别的配置都可以通过 Config 对象获取到
获取方式

我们可以通过 app.config 从 Application 实例上获取到 config 对象，
也可以在 Controller, Service, Helper 的实例上通过 this.config 获取到 config 对象。
 */

/*
Logger

框架内置了功能强大的日志功能，可以非常方便的打印各种级别的日志到对应的日志文件中，每一个 logger 对象都提供了 5 个级别的方法：

logger.debug()
logger.info()
logger.warn()
logger.error()

App Logger

我们可以通过 app.logger 来获取到它，如果我们想做一些应用级别的日志记录，
如记录启动阶段的一些数据信息，记录一些业务上与请求无关的信息，都可以通过 App Logger 来完成

App CoreLogger

我们可以通过 app.coreLogger 来获取到它，一般我们在开发应用时都不应该通过 CoreLogger 打印日志，
而框架和插件则需要通过它来打印应用级别的日志，
这样可以更清晰的区分应用和框架打印的日志，通过 CoreLogger 打印的日志会放到和 Logger 不同的文件中。

Contest Logger
我们可以通过 ctx.logger 从 Context 实例上获取到它，从访问方式上我们可以看出来，Context Logger 一定是与请求相关的，
它打印的日志都会在前面带上一些当前请求相关的信息（如 [$userId/$ip/$traceId/${cost}ms $method $url]），
通过这些信息，我们可以从日志快速定位请求，并串联一次请求中的所有的日志。

Context CoreLogger

我们可以通过 ctx.coreLogger 获取到它，和 Context Logger 的区别是一般只有插件和框架会通过它来记录日志。

 Controller Logger & Service Logger

我们可以在 Controller 和 Service 实例上通过 this.logger 获取到它们，它们本质上就是一个 Context Logger，
不过在打印日志的时候还会额外的加上文件路径，方便定位日志的打印位置。


 */

/*
Subscription

订阅模型是一种比较常见的开发模式，譬如消息中间件的消费者或调度任务。因此我们提供了 Subscription 基类来规范化这个模式。

可以通过以下方式来引用 Subscription 基类：

const Subscription = require('egg').Subscription;

class Schedule extends Subscription {
  // 需要实现此方法
  // subscribe 可以为 generator function 或 async function
  * subscribe() {}
}
插件开发者可以根据自己的需求基于它定制订阅规范，如定时任务就是使用这种规范实现的
 */

