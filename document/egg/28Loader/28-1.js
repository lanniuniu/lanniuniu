/**
 * Created by 懒牛牛 on 2017/11/29.
 */

/*
Egg 在 Koa 的基础上进行增强最重要的就是基于一定的约定，根据功能差异将代码放到不同的目录下管理，对整体团队的开发成本提升有着明显的效果。
Loader 实现了这套约定，并抽象了很多底层 API 可以进一步扩展。
 */

/*
应用、框架和插件

Egg 是一个底层框架，应用可以直接使用，但 Egg 本身的插件比较少，应用需要自己配置插件增加各种特性，比如 MySQL。

当应用达到一定数量，我们会发现大部分应用的配置都是类似的，这时可以基于 Egg 扩展出一个框架，应用的配置就会简化很多。

我们在应用中完成业务，需要指定一个框架才能运行起来，当需要某个特性场景的功能时可以配置插件（比如 MySQL）。
插件只完成特定功能，当两个独立的功能有互相依赖时，还是分开两个插件，但需要配置依赖。
框架是一个启动器（默认就是 Egg），必须有它才能运行起来。框架还是一个封装器，将插件的功能聚合起来统一提供，框架也可以配置插件。
在框架的基础上还可以扩展出新的框架，也就是说框架是可以无限级继承的，有点像类的继承。
 */

/*
loadUnit

Egg 将应用、框架和插件都称为加载单元（loadUnit），因为在代码结构上几乎没有什么差异

文件顺序
文件加载规则
扩展Loader
 */

/*
框架与多进程

框架的扩展是和多进程模型有关的，我们已经知道多进程模型，也知道 Agent Worker 和 App Worker 的区别，所以我们需要扩展的类也有两个 Agent 和 Application，而这两个类的 API 不一定相同。

在 Agent Worker 启动的时候会实例化 Agent，而在 App Worker 启动时会实例化 Application，这两个类又同时继承 EggCore。

EggCore 可以看做 Koa Application 的升级版，默认内置 Loader、Router 及应用异步启动等功能，可以看做是支持 Loader 的 Koa。
 */

/*
如何定制一个框架

你可以直接通过 [egg-init] 选择 framework 脚手架来快速上手。

框架 API
Egg 框架提供了一些 API，所有继承的框架都需要提供，只增不减。这些 API 基本都有 Agent 和 Application 两份。

框架继承

框架支持继承关系，可以把框架比作一个类，那么基类就是 Egg 框架，如果想对 Egg 做扩展就继承。

框架继承原理

自定义 Agent

自定义 Loader
 */

/*
框架启动原理

框架启动在多进程模型、Loader、插件中或多或少都提过，这里系统的梳理下启动顺序。

startCluster 启动传入 baseDir 和 framework，Master 进程启动
Master 先 fork Agent Worker
根据 framework 找到框架目录，实例化该框架的 Agent 类
Agent 找到定义的 AgentWorkerLoader，开始进行加载
AgentWorkerLoader，开始进行加载 整个加载过程是同步的，按 plugin > config > extend > agent.js > 其他文件顺序加载
agent.js 可自定义初始化，支持异步启动，如果定义了 beforeStart 会等待执行完成之后通知 Master 启动完成。
Master 得到 Agent Worker 启动成功的消息，使用 cluster fork App Worker
App Worker 有多个进程，所以这几个进程是并行启动的，但执行逻辑是一致的
单个 App Worker 和 Agent 类似，通过 framework 找到框架目录，实例化该框架的 Application 类
Application 找到 AppWorkerLoader，开始进行加载，顺序也是类似的，会异步等待，完成后通知 Master 启动完成
Master 等待多个 App Worker 的成功消息后启动完成，能对外提供服务。
 */

/*
框架测试
 */






