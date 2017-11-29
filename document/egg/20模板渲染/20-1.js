/**
 * Created by 懒牛牛 on 2017/11/27.
 */

/*
框架内置 egg-view 作为模板解决方案，并支持多模板渲染，每个模板引擎都以插件的方式引入，但保持渲染的 API 一致。

例子：nunjucks
 */

/*
引入 view 插件
$ npm i egg-view-nunjucks --save

启用插件

// config/plugin.js
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

配置插件

egg-view 提供了 config.view 通用配置

# root {String}

模板文件的根目录，为绝对路径，默认为 ${baseDir}/app/view。

cache {Boolean}

模板路径缓存，默认开启。框架会根据 root 配置的目录依次查找，如果匹配则会缓存文件路径，下次渲染相同路径时不会重新查找

# mapping 和 defaultViewEngine

每个模板在注册时都会指定一个模板名（viewEngineName），在使用时需要根据后缀来匹配模板名，
比如指定 .nj 后缀的文件使用 Nunjucks 进行渲染。

 */

/*
渲染页面
框架在 Context 上提供了 3 个接口，返回值均为 Promise:

render(name, locals) 渲染模板文件, 并赋值给 ctx.body
renderView(name, locals) 渲染模板文件, 仅返回不赋值
renderString(tpl, locals) 渲染模板字符串, 仅返回不赋值

locals 在渲染页面的过程中，我们通常需要一个变量来收集需要传递给模板的变量，在框架里面，我们提供了 app.locals 和 this.locals。

 */

/*
Helper

在模板中可以直接使用 helper 上注册的方法
 */

/*
Security

框架内置的 egg-security 插件，为我们提供了常见的安全辅助函数，包括 helper.shtml / surl / sjs 等等等
 */






