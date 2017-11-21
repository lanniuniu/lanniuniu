/**
 * Created by 懒牛牛 on 2017/11/20.
 */

/*
为了提升研发体验，我们提供了便捷的方式在本地进行开发、调试、单元测试等。

在这里我们需要使用到 egg-bin 模块（只在本地开发和单元测试使用，如果线上请参考 应用部署）。

首先，我们需要把 egg-bin 模块作为 devDependencies 引入：

$ npm i egg-bin --save-dev
 */

/*
启动应用

本地启动应用进行开发活动，当我们修改代码并保存后，应用会自动重启实时生效。

添加命令

添加 npm scripts 到 package.json：

{
  "scripts": {
    "dev": "egg-bin dev"
  }
}

这样我们就可以通过 npm run dev 命令启动应用。

环境配置

本地启动的应用是以 env: local 启动的，读取的配置也是 config.default.js 和 config.local.js 合并的结果。

指定端口

本地启动应用默认监听 7001 端口，可指定其他端口，例如：

{
  "scripts": {
    "dev": "egg-bin dev --port 7001"
  }
}

 */





