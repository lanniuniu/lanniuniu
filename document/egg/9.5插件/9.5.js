/**
 * Created by 懒牛牛 on 2017/11/20.
 */

/*
插件机制是我们框架的一大特色。它不但可以保证框架核心的足够精简、稳定、高效，还可以促进业务逻辑的复用，生态圈的形成。
 */

/*
# 为什么要插件

中间件加载其实是有先后顺序的，但是中间件自身却无法管理这种顺序，只能交给使用者。这样其实非常不友好，一旦顺序不对，结果可能有天壤之别。
中间件的定位是拦截用户请求，并在它前后做一些事情，例如：鉴权、安全检查、访问日志等等。但实际情况是，有些功能是和请求无关的，
例如：定时任务、消息订阅、后台逻辑等等。
有些功能包含非常复杂的初始化逻辑，需要在应用启动的时候完成。这显然也不适合放到中间件中去实现。
综上所述，我们需要一套更加强大的机制，来管理、编排那些相对独立的业务逻辑。

中间件、插件、应用的关系

一个插件其实就是一个『迷你的应用』，和应用（app）几乎一样：

它包含了 Service、中间件、配置、框架扩展等等。
它没有独立的 Router 和 Controller。
他们的关系是：

应用可以直接引入 Koa 的中间件。
当遇到上一节提到的场景时，则应用需引入插件。
插件本身可以包含中间件。
多个插件可以包装为一个上层框架。
 */

/*
# 使用插件

插件一般通过 npm 模块的方式进行复用：

$ npm i egg-mysql --save

注意：我们建议通过 ^ 的方式引入依赖，并且强烈不建议锁定版本。

然后需要在应用或框架的 config/plugin.js 中声明：

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
就可以直接使用插件提供的功能：
app.mysql.query(sql, values);

 */

/*
参数介绍

plugin.js 中的每个配置项支持：

{Boolean} enable - 是否开启此插件，默认为 true
{String} package - npm 模块名称，通过 npm 模块形式引入插件
{String} path - 插件绝对路径，跟 package 配置互斥
{Array} env - 只有在指定运行环境才能开启，会覆盖插件自身 package.json 中的配置
 开启和关闭

在上层框架内部内置的插件，应用在使用时就不用配置 package 或者 path，只需要指定 enable 与否：
 */

/*
根据环境配置

虽然上述有 env 字段可以配置，但我们更推荐 plugin.{env}.js 这种模式，会根据运行环境加载插件配置。
 */

/*
package 和 path

package 是 npm 方式引入，也是最常见的引入方式
path 是绝对路径引入，如应用内部抽了一个插件，但还没达到开源发布独立 npm 的阶段，或者是应用自己覆盖了框架的一些插件
关于这两种方式的使用场景，可以参见渐进式开发。
 */

/*
插件配置

插件一般会包含自己的默认配置，应用开发者可以在 config.default.js 覆盖对应的配置：

// config/config.default.js
exports.mysql = {
  client: {
    host: 'mysql.com',
    port: '3306',
    user: 'test_user',
    password: 'test_password',
    database: 'test',
  },
};
 */

/*
框架默认内置了企业级应用常用的插件：
onerror 统一异常处理
Session Session 实现
i18n 多语言
watcher 文件和文件夹监控
multipart 文件流式上传
security 安全
development 开发环境配置
logrotator 日志切分
schedule 定时任务
static 静态服务器
jsonp jsonp 支持
view 模板引擎
 */




