/*
1、清理构建目录
rm -rf ./dist 或者 使用clean-webpack-plugin

2、postcss添加前缀
autoprefixer自动补齐css前缀 postcss-loader autoprefixer

3、适配 px rem
px2rem-loader lib-flexible

4、资源内联
html：raw-loader
js：raw-loader

5、多页面打包
好处：多页面之间解耦 SEO友好
方法：指定entry 可以指定死 也可以动态获取某个目录

6、使用source map定位到源码
多种类型 按需设置
使用 devtool 设置

7、公共资源分离
基础库分离：html-webpack-externals-plugin
splitChunksPlugin

8、摇树优化 tree shaking
把无用的代码删除
默认支持 生产模式默认开启

9、scope hoisting
原理：把所有模块的代码按照引用顺序放到一个函数作用域中 适当重命名一些变量防止变量名冲突~
目的：减少内存开销、函数声明代码
moduleConcatenationPlugin 生产环境默认开启

10、代码分割和懒加载
动态import babel插件 @babel/plugin-syntax-dynamic-import
import().then

11、eslint
规范
落地：CI/CD、webpack构建集成
eslint-loader
继承各大库

12、webpack打包库
output: {
    library
    libraryTarget
    libraryExport
}

13、ssr
减少请求条数
减少白屏时间 SEO友好

14、优化构建信息
stats 统计信息
friendly-errors-webpack-plugin

15、错误捕获、异常处理
code 0 为成功  其他为失败

16、构建配置包
通过多个配置文件来管理不同环境的构建
将构建配置设计出一个库
抽成一个工具进行管理
所有配置写成一个 用--env参数进行hack

webpack-merge 可以merge webpack的配置

17、eslint规范构建脚本
eslint [目录]
eslint [目录] --fix 可以处理空格类报错

18、
 */
