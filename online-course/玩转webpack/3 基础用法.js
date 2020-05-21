/*
1、entry
打包入口：根据入口文件 生成依赖图
单入口和多入口

2、output
单入口和多入口：多入口需要区分添加name占位数

3、loaders
loader原生支持js json
本身是一个函数，接受源文件作为参数 返回转换的结果
常见loaders：babel-loader css-loader less-loader ts-loader file-loader图片、字体等文件打包 raw-loader二进制导入 thread-loader多进程打包
写在module里面 rules数组 test匹配规则 use指定loader名称
 loader链式调用 最先调用的放最后
4、plugins
用于增强webpack的功能 bundle文件优化 资源管理 环境变量注入 作用于整个构建过程
常见plugins：CommonChunkPlugin将相同的模块代码打包为公共js cleanWebpackPlugin extractTextWebpackPlugin将css从bundle种提取为单独的css copyWebpackPlugin HtmlWebpackPlugin
    uglifyjsWebpackPlugin ZipWebpackPlugin
写在plugins数组里

5、mode
设置不同的mode 会默认开启一些变量和plugins
development:process.env.NODE_ENV为development 等等
production:process.env.NODE_ENV为production
none：无配置

6、栗子
解析es6：babel-loader
解析JSX或VUE语法：@babel
解析css：css-loader style-loader
解析less：less-loader
解析图片、字体：file-loader、url-loader小文件有base64编码

7、文件监听
开启监听模式 webpack启动命令带上--watch参数 或者 配置文件设置watch为true
原理分析：轮询判断文件的最后编辑时间是否发生变化

8、热更新 webpack-dev-server
注意：也没有做出刷新浏览器的操作 因为它 不输出文件，而是放在内存中
HotModuleReplacementPlugin

9、文件指纹
Hash：整个项目
Chunkhash：不同的入口文件
Contenthash：文件内容
 */





























