/**
 * Created by 懒牛牛 on 2017/11/8.
 */

/*
快速初始化

我们推荐直接使用脚手架，只需几条简单指令，即可快速生成项目:

$ npm i egg-init -g
$ egg-init egg-example --type=simple
$ cd egg-example
$ npm i
启动项目:

$ npm run dev
$ open localhost:7001
 */

/*
逐步搭建

见example目录

1.初始化项目
先来初始化下目录结构：
添加 npm scripts 到 package.json：


2.编写 Controller

如果你熟悉 Web 开发或 MVC，肯定猜到我们第一步需要编写的是 Controller 和 Router。
配置路由映射：

加一个配置文件

好，现在可以启动应用来体验下

$ npm run dev
$ open localhost:7001
Controller 有 class 和 exports 两种编写方式，本文示范的是前者，你可能需要参考 Controller 文档。
Config 也有 module.exports 和 exports 的写法，具体参考 Node.js modules 文档

3.静态资源
Egg 内置了 static 插件，线上环境建议部署到 CDN，无需该插件。

static 插件默认映射 /public/* -> app/public/* 目录

此处，我们把静态资源都放到 app/public 目录即可

4.模板渲染
绝大多数情况，我们都需要读取数据后渲染模板，然后呈现给用户。故我们需要引入对应的模板引擎。

框架并不强制你使用某种模板引擎，只是约定了 View 插件开发规范，开发者可以引入不同的插件来实现差异化定制。

为列表页编写模板文件，一般放置在 app/view 目录下

5.编写 service

在实际应用中，Controller 一般不会自己产出数据，也不会包含复杂的逻辑，复杂的过程应抽象为业务逻辑层 Service。

我们来添加一个 Service 抓取 Hacker News 的数据
框架提供了内置的 HttpClient 来方便开发者使用 HTTP 请求。
然后稍微修改下之前的 Controller
还需增加 app/service/news.js 中读取到的配置：

6.编写扩展

遇到一个小问题，我们的资讯时间的数据是 UnixTime 格式的，我们希望显示为便于阅读的格式。

框架提供了一种快速扩展的方式，只需在 app/extend 目录下提供扩展脚本即可，具体参见扩展。

在这里，我们可以使用 View 插件支持的 Helper 来实现

7.编写 Middleware

假设有个需求：我们的新闻站点，禁止百度爬虫访问。

聪明的同学们一定很快能想到可以通过 Middleware 判断 User-Agent

8.配置文件
写业务的时候，不可避免的需要有配置文件，框架提供了强大的配置合并管理功能：

支持按环境变量加载不同的配置文件，如 config.local.js， config.prod.js 等等。
应用/插件/框架都可以配置自己的配置文件，框架将按顺序合并加载。
具体合并逻辑可参见配置文件。

9.单元测试
单元测试非常重要，框架也提供了 egg-bin 来帮开发者无痛的编写测试。

测试文件应该放在项目根目录下的 test 目录下，并以 test.js 为后缀名
 */



