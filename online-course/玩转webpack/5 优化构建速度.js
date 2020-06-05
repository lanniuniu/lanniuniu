/*
1、构建速度分析
speed-measure-webpack-plugin
总耗时
每个插件或者loader的耗时

2、构建体积分析
webpack-bundle-analyzer

第三方包的体积大小
自己写的组件大小

3、使用高版本的webpack和node
随着软件的优化，可以不断优化性能
所以使用高版本的webpack和node 可以简化构建时间

4、多进程 多实例的构建
thread-loader 每解析一个模块 thread-loader会将模块和模块的依赖分配到worker线程中

5、多进程 多实例的并行压缩
parallel-uglify-plugin
terser-webpack-plugin 开启parallel参数

6、分包：预编译资源模块
将多个框架包和业务包分别打成一个包 简化html 减少http请求
DLLPlugin 使用它分包

7、提升二次构建速度
缓存：babel-loader terser-webpack-plugin cache-loader hard-source-webpack-plugin

8、缩小构建目标
比如babel-loader 不解析node_modules
减少文件搜索范围

 */
