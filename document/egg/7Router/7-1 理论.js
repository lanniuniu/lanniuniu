/**
 * Created by 懒牛牛 on 2017/11/13.
 */

/*
Router 主要用来描述请求 URL 和具体承担执行动作的 Controller 的对应关系， 框架约定了 app/router.js 文件用于统一所有路由规则。

通过统一的配置，我们可以避免路由规则逻辑散落在多个地方，从而出现未知的冲突，集中在一起我们可以更方便的来查看全局的路由规则。

 */

/*
如何定义 Router
app/router.js 里面定义 URL 路由规则
app/controller 目录下面实现 Controller
 */

/*
Router 详细定义说明

路由完整定义主要包括5个主要部分:

verb - 用户触发动作，支持 get，post 等方法，后面会通过示例详细说明。
app.head - HEAD
app.options - OPTIONS
app.get - GET
app.put - PUT
app.post - POST
app.patch - PATCH
app.delete - DELETE
app.del - 由于 delete 是一个保留字，所以提供了一个 delete 方法的别名。
app.redirect - 可以对 URL 进行重定向处理，比如我们最经常使用的可以把用户访问的根目录路由到某个主页。

router-name 给路由设定一个别名，可以通过 Helper 提供的辅助函数 pathFor 和 urlFor 来生成 URL。(可选)
path-match - 路由 URL 路径。
middleware1 - 在 Router 里面可以配置多个 Middleware。(可选)
controller - 指定路由映射到的具体的 controller 上，controller 可以有两种写法：
app.controller.user.fetch - 直接指定一个具体的 controller
'user.fetch' - 可以简写为字符串形式
 */

/*
在 Router 定义中， 可以支持多个 Middleware 串联执行
Controller 必须定义在 app/controller 目录中。
一个文件里面也可以包含多个 Controller 定义，在定义路由的时候，可以通过 ${fileName}.${functionName} 的方式指定对应的 Controller。
Controller 支持子目录，在定义路由的时候，可以通过 ${directoryName}.${fileName}.${functionName} 的方式制定对应的 Controller。
 */

/*
RESTful 风格的 URL 定义

如果想通过 RESTful 的方式来定义路由， 我们提供了 app.resources('routerName', 'pathMatch', controller)
快速在一个路径上生成 CRUD 路由结构。

app/router.js
module.exports = app => {
  app.resources('posts', '/api/posts', app.controller.posts);
  app.resources('users', '/api/v1/users', app.controller.v1.users); // app/controller/v1/users.js
};
上面代码就在 /posts 路径上部署了一组 CRUD 路径结构，对应的 Controller 为 app/controller/posts.js 接下来，
 你只需要在 posts.js 里面实现对应的函数就可以了。

 Method	Path	Route Name	Controller.Action
GET	/posts	posts	app.controllers.posts.index
GET	/posts/new	new_post	app.controllers.posts.new
GET	/posts/:id	post	app.controllers.posts.show
GET	/posts/:id/edit	edit_post	app.controllers.posts.edit
POST	/posts	posts	app.controllers.posts.create
PUT	/posts/:id	post	app.controllers.posts.update
DELETE	/posts/:id	post	app.controllers.posts.destroy
// app/controller/posts.js
exports.index = function* () {};

exports.new = function* () {};

exports.create = function* () {};

exports.show = function* () {};

exports.edit = function* () {};

exports.update = function* () {};

exports.destroy = function* () {};
如果我们不需要其中的某几个方法，可以不用在 posts.js 里面实现，这样对应 URL 路径也不会注册到 Router。
 */
