/**
 * Created by 懒牛牛 on 2017/11/13.
 */

/*
框架提供了强大且可扩展的配置功能，可以自动合并应用、插件、框架的配置，按顺序覆盖，
且可以根据环境维护不同的配置。合并后的配置可直接从 app.config 获取。

使用代码管理配置，在代码中添加多个环境的配置，在启动时传入当前环境的参数即可。但无法全局配置，必须修改代码。

配置即代码，配置的变更也应该经过 review 后才能发布。应用包本身是可以部署在多个环境的，只需要指定运行环境即可。

# 多环境配置
框架支持根据环境来加载配置，定义多个环境的配置文件，具体环境请查看运行环境配置

config
|- config.default.js
|- config.test.js
|- config.prod.js
|- config.unittest.js
`- config.local.js
config.default.js 为默认的配置文件，所有环境都会加载这个配置文件，一般也会作为开发环境的默认配置文件。

当指定 env 时会同时加载对应的配置文件，并覆盖默认配置文件的同名配置。
如 prod 环境会加载 config.prod.js 和 config.default.js 文件，
config.prod.js 会覆盖 config.default.js 的同名配置。
 */

/*
配置写法

配置文件返回的是一个 object 对象，可以覆盖框架的一些配置，应用也可以将自己业务的配置放到这里方便管理
 */

/*
配置加载顺序

应用、插件、框架都可以定义这些配置，而且目录结构都是一致的，但存在优先级（应用 > 框架 > 插件），相对于此运行环境的优先级会更高。
 */

/*
合并规则

配置的合并使用 extend2 模块进行深度拷贝，extend2 fork 自 extend，处理数组时会存在差异
 */

/*
插件配置

在应用中可以通过 config/plugin.js 来控制插件的一些选项。

 开启关闭

框架有一些内置的插件，通过配置可以开启或关闭插件。插件关闭后，插件内所有的文件都不会被加载。
或可以简单的配置一个布尔值


 */

/*
引入插件

框架默认内置了企业级应用常用的一部分插件。

而应用开发者可以根据业务需求，引入其他插件，只需要指定 package 配置

package 为一个 npm 模块，必须添加依赖到 pkg.dependencies 中。框架会在 node_modules 目录中找到这个模块作为插件入口。
注意：配置的插件即使只在开发期使用，也必须是 dependencies 而不是 devDependencies，否则 npm i --production 后会找不到。
也可以指定 path 来替代 package。
path 为一个绝对路径，这样应用可以把自己写的插件直接放到应用目录中，如 app/plugin 目录。
 */

/*
配置结果

框架在启动时会把合并后的最终配置 dump 到 run/application_config.json（worker 进程）和 run/agent_config.json（agent 进程）中，可以用来分析问题。

配置文件中会隐藏一些字段，主要包括两类:

如密码、密钥等安全字段，这里可以通过 config.dump.ignore 配置，必须是 Set 类型，查看默认配置。
如函数、Buffer 等类型，JSON.stringify 后的内容特别大
还会生成 run/application_config_meta.json（worker 进程）和 run/agent_config_meta.json（agent 进程）文件，用来排查属性的来源
 */




