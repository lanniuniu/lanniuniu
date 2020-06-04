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

18、冒烟测试
构建是否成功
构建的产出是否有js css html
mocha

19、单元测试和测试覆盖率
测试框架（不含断言库）：mocha、ava
集成框架（含断言）：jasmine、jest
API

技术选型 macha+Chai（assert）
describe测试描述 it单个测试 except期望（断言）

测试覆盖率 库 istanbul

20、持续集成
优点: 快速发现错误、防止分支大幅偏离主干
可以执行测试用例、构建等等
接入github ci 例如Travis CI Jenkins  然后在各自的官网中开启 在代码中定义好配置文件

21、发布到npm
登录：npm login
添加用户：npm adduser
升级版本：
    补丁：npm version patch
    小版本：npm version minor
    大版本：npm version major
发布：npm publish

22、规范git commit 和 changelog
开发阶段增加precommit钩子 安装husky

23、语义化版本规范格式
semver规范
优势：避免出现循环依赖、依赖冲突减少

1.0.0-rc.1 公测
1.1.0-alpha.1 内部测试
1.0.0-beta.1  测试

24、构建分析
webpack 内置的stats 构建的统计信息

在package script中使用  --json > stats.json
配置文件

25、构建速度分析
speed-measure-webpack-plugin
总耗时
每个插件或者loader的耗时

26、构建体积分析
webpack-bundle-analyzer

第三方包的体积大小
自己写的组件大小

27、使用高版本的webpack和node
随着软件的优化，可以不断优化性能
所以使用高版本的webpack和node 可以简化构建时间

28、多进程 多实例的构建
thread-loader 每解析一个模块 thread-loader会将模块和模块的依赖分配到worker线程中

29、多进程 多实例的并行压缩
parallel-uglify-plugin
terser-webpack-plugin 开启parallel参数

30、分包：预编译资源模块
将多个框架包和业务包分别打成一个包 简化html 减少http请求
DLLPlugin 使用它分包
 */

