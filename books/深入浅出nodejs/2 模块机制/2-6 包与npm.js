/*
1、符合CommonJS规范的包结构
package.json 包描述文件
bin：可执行二进制文件的目录
lib：JavaScript代码的目录
doc：文档
test：单元测试

2、package.json 和 npm
CommonJS包规范是理论，npm是其中的一种实践
包规范的定义可以帮助Node解决依赖包安装的问题，npm正是基于这个规范进行了实现

3、npm常用功能
从本地安装 npm i <folder>
从非官方源安装 npm i vue --registry=<url>
指定默认安装 npm config set registry <url>
钩子命令 preinstall

4、发布
npm publish .

5、管理包权限
npm owner ls <package name>
npm owner add <user> <package name>
npm owner rm <user> <package name>

6、局域npm
 */
