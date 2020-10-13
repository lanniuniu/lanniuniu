/*
AST 抽象语法树

1、将ES6语法转换为ES5
通过babylon 生成AST
通过babel-core将AST重新生成源码

2、分析模块之间的依赖关系
通过babel-traverse的ImportDeclaration方法获取依赖属性  入参为AST

3、生成的js文件可以在浏览器运行
 */
