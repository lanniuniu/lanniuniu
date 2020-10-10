/*
1、webpack命令行
webpack入口文件 node_modules/webpack/bin/webpack.js

2、webpack-cli
引入yargs 对命令行进行定制
分析命令行参数 对参数进行转换 组成编译配置项 args分析
引用webpack 根据配置项进行编译和构建

3、webpack是一种基于事件流的编程返利，一系列的插件运行

4、许多类继承于Tapable
tapable是一个类似于Node.js的EventEmitter的库  主要控制钩子(HOOK)函数的发布和订阅 控制着webpack的插件系统
 */
