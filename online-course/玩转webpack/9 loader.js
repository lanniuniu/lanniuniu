/*
1、定义
一个导出为函数的JavaScript模块

2、执行顺序
链式调用
串行执行
从后到前

3、创建loader
webpack-cli创建工具

4、loader-runner
定义：允许在不安装webpack的情况下  运行loaders
作用：1、webpack的依赖 webpack中使用它执行loader
    2、进行loader的开发和调试

5、loader的参数获取
loader-untils 的getOptions()方法可以获取参数

6、异常处理
同步：this.callback(new Error(), data)    throw new Error()
异步：this.async(error, input)

7、在loader里面使用缓存
webpack默认开启缓存 使用this.cacheable(false)关闭缓存

8、文件输出
this.emitFile()
 */
