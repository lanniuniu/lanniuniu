/**
 * Created by 懒牛牛 on 2017/11/21.
 */

/*
一般从源码代码到真正运行，我们会拆分成构建和部署两步，可以做到一次构建多次部署。

构建

JavaScript 语言本身不需要编译的，构建过程主要是下载依赖。但如果使用 TypeScript 或者 Babel 支持 ES6 以上的特性，那就必须要这一步了。

一般安装依赖会指定 NODE_ENV=production 或 npm install --production 只安装 dependencies 的依赖。
因为 devDependencies 中的模块过大而且在生产环境不会使用，安装后也可能遇到未知问题。

增加构建环节才能做到真正的一次构建多次部署，理论上代码没有改动的时候是不需要再次构建的，可以用原来的包进行部署，这有着不少好处：

构建依赖的环境和运行时是有差异的，所以不要污染运行时环境。
可以减少发布的时间，而且易回滚，只需要把原来的包重新启动即可。
 */

/*
部署

服务器需要预装 Node.js，框架支持的 Node 版本为 >= 6.0.0。

框架内置了 egg-cluster 来启动 Master 进程，Master 有足够的稳定性，不再需要使用 pm2 等进程守护模块。

同时，框架也提供了 egg-scripts 来支持线上环境的运行和停止。

首先，我们需要把 egg-scripts 模块作为 dependencies 引入：

$ npm i egg-scripts --save
添加 npm scripts 到 package.json：

{
  "scripts": {
    "start": "egg-scripts start --daemon",
    "stop": "egg-scripts stop"
  }
}
注意：egg-scripts 不支持 Windows 系统。

 */










