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
而webpack会使用到compiler extend tapable
 */

const hook = new SyncHook(['arg1', 'arg2', 'arg3'])

// 绑定事件到webpack事件流
hook.tap('hook', (arg1, arg2, arg3) => {
    // do some
})

// 执行
hook.call(1, 2 , 3)

/*
5、执行webpack.js compiler会把plugin 和 插件 注入进去
 */
