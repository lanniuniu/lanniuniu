/*
AST 抽象语法树

1、将ES6语法转换为ES5
通过babylon 生成AST
通过babel-core将AST重新生成源码

2、分析模块之间的依赖关系
通过babel-traverse的ImportDeclaration方法获取依赖属性  入参为AST

3、生成的js文件可以在浏览器运行

4、webpack的模块机制
打包出来的是一个IIFE
modules是一个数组 每一项是一个模块初始化函数
__webpack_quire用来加载模块 返回module.export
通过WEBPACK_REQUIRE_METHOD(0)启动程序
 */
