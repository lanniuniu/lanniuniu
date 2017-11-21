/**
 * Created by 懒牛牛 on 2017/11/21.
 */

/*
单元测试的好处

代码质量持续有保障
重构正确性保障
增强自信心
自动化运行

Web 应用中的单元测试更加重要，在 Web 产品快速迭代的时期，每个测试用例都给应用的稳定性提供了一层保障。
API 升级，测试用例可以很好地检查代码是否向下兼容。 对于各种可能的输入，一旦测试覆盖，都能明确它的输出。
代码改动后，可以通过测试结果判断代码的改动是否影响已确定的结果。

所以，应用的 Controller、Service、Helper、Extend 等代码，都必须有对应的单元测试保证代码质量。
当然，框架和插件的每个功能改动和重构都需要有相应的单元测试，并且要求尽量做到修改的代码能被 100% 覆盖到。

 */

/*
测试框架

# Mocha

我们选择和推荐大家使用 Mocha，功能非常丰富，支持运行在 Node.js 和浏览器中， 对异步测试支持非常友好。

# AVA

 */

/*
断言库

直到我们发现 power-assert， 因为『No API is the best API』， 最终我们重新回归原始的 assert 作为默认的断言库。

简单地说，它的优点是：

没有 API 就是最好的 API，不需要任何记忆，只需 assert 即可。
强大的错误信息反馈

 */

/*
# 测试约定

测试目录结构

我们约定 test 目录为存放所有测试脚本的目录，测试所使用到的 fixtures 和相关辅助脚本都应该放在此目录下。

测试脚本文件统一按 ${filename}.test.js 命名，必须以 .test.js 作为文件后缀。

测试运行工具

统一使用 egg-bin 来运行测试脚本， 自动将内置的 Mocha、co-mocha、power-assert，istanbul 等模块组合引入到测试脚本中，
让我们聚焦精力在编写测试代码上，而不是纠结选择那些测试周边工具和模块。

只需要在 package.json 上配置好 scripts.test 即可。
 */

/*
准备测试

mock

正常来说，如果要完整手写一个 app 创建和启动代码，还是需要写一段初始化脚本的， 并且还需要在测试跑完之后做一些清理工作，
如删除临时文件，销毁 app。

常常还有模拟各种网络异常，服务访问异常等特殊情况。

所以我们单独为框架抽取了一个测试 mock 辅助模块：egg-mock， 有了它我们就可以非常快速地编写一个 app 的单元测试，

并且还能快速创建一个 ctx 来测试它的属性、方法和 Service 等。

app

在测试运行之前，我们首先要创建应用的一个 app 实例， 通过它来访问需要被测试的 Controller、Middleware、Service 等应用层代码。

通过 egg-mock，结合 Mocha 的 before 钩子就可以便捷地创建出一个 app 实例。

每一个测试文件都需要这样创建一个 app 实例非常冗余，因此 egg-mock 提供了一个 bootstrap 文件，可以直接从它上面拿到我们所常用的实例

ctx

我们除了 app，还需要一种方式便捷地拿到 ctx，方便我们进行 Extend、Service、Helper 等测试。
 而我们已经通过上面的方式拿到了一个 app，结合 egg-mock 提供的 app.mockContext(options) 方法来快速创建一个 ctx 实例。
 */

/*
测试执行顺序

特别需要注意的是执行顺序，尽量保证在执行某个用例的时候执行相关代码。

Mocha 使用 before/after/beforeEach/afterEach 来处理前置后置任务，基本能处理所有问题。
每个用例会按 before -> beforeEach -> it -> afterEach -> after 的顺序执行，而且可以定义多个。

 */

/*
异步测试
使用哪种写法取决于不同应用场景，如果遇到多个异步可以使用 generator function，也可以拆分成多个测试用例。
 */

/*
Controller 测试

Controller 在整个应用代码里面属于比较难测试的部分了，因为它跟 router 配置紧密相关，
我们需要利用 app.httpRequest() SuperTest 发起一个真实请求， 来将 Router 和 Controller 连接起来，
并且可以帮助我们发送各种满足边界条件的请求数据， 以测试 Controller 的参数校验完整性。
 app.httpRequest() 是 egg-mock 封装的 SuperTest 请求实例。

 通过基于 SuperTest 的 app.httpRequest() 可以轻松发起 GET、POST、PUT 等 HTTP 请求，并且它有非常丰富的请求数据构造接口，
 */

/*
mock CSRF

框架的默认安全插件会自动开启 CSRF 防护， 如果完整走 CSRF 校验逻辑，那么测试代码需要先请求一次页面，
通过解析 HTML 拿到 CSRF token， 然后再使用此 token 发起 POST 请求。

所以 egg-mock 对 app 增加了 app.mockCsrf() 方法来模拟取 CSRF token 的过程。
 这样在使用 SuperTest 请求 app 就会自动通过 CSRF 校验。
 */

/*
Service 测试

Service 相对于 Controller 来说，测试起来会更加简单， 我们只需要先创建一个 ctx，
然后通过 ctx.service.${serviceName} 拿到 Service 实例， 然后调用 Service 方法即可。
 */

/*
Extend 测试

应用可以对 Application、Request、Response、Context 和 Helper 进行扩展。 我们可以对扩展的方法或者属性针对性的编写单元测试。

Application

egg-mock 创建 app 的时候，已经将 Application 的扩展自动加载到 app 实例了， 直接使用这个 app 实例访问扩展的属性和方法即可进行测试。

Context

Context 测试只比 Application 多了一个 app.mockContext() 步骤来模拟创建一个 Context 对象。

Request

通过 ctx.request 来访问 Request 扩展的属性和方法，直接即可进行测试。

Response
Response 测试与 Request 完全一致。 通过 ctx.response 来访问 Response 扩展的属性和方法，直接即可进行测试。

 Helper

Helper 测试方式与 Service 类似，也是通过 ctx 来访问到 Helper，然后调用 Helper 方法测试。

 */

/*
 Mock 方法

egg-mock 除了上面介绍过的 app.mockContext() 和 app.mockCsrf() 方法外，还提供了非常多的 mock 方法帮助我们便捷地写单元测试。

如我们不想在终端 console 输出任何日志，可以通过 mock.consoleLevel('NONE') 来模拟。

又如我想模拟一次请求的 Session 数据，可以通过 app.mockSession(data) 来模拟。

引入 egg-mock/bootstrap 时，会自动在 afterEach 钩子中还原所有的 mock，不需要在测试文件中再次编写。

Mock 属性和方法

因为 egg-mock 是扩展自 mm 模块， 它包含了 mm 的所有功能，这样我们就可以非常方便地 mock 任意对象的属性和方法了

Mock 一个对象的属性

mock app.config.baseDir 指向 /tmp/mockapp

Mock 一个对象的方法

mock fs.readFileSync 返回 hello world

Mock Service

Service 作为框架标准的内置对象，我们提供了便捷的 app.mockService(service, methodName, fn) 模拟 Service 方法返回值。

通过 app.mockServiceError(service, methodName, error) 可以模拟 Service 调用异常。

Mock HttpClient

框架内置了 HttpClient，应用发起的对外 HTTP 请求基本都是通过它来处理。
我们可以通过 app.mockHttpclient(url, method, data) 来 mock 掉 app.curl 和 ctx.curl 方法， 从而实现各种网络异常情况。
 */









