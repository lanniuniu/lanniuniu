/*
生成 asar 包
asar 是一种将多个文件合并成一个文件的类 tar 风格的归档格式。Electron 可以无需解压整个文件，就能够从其中读取任意文件内容。

1、全局安装asar
npm install -g asar
2、用 asar pack 打包
asar pack your-app app.asar

使用 asar 档案文件
electron 两类api（node、web）都支持从asar读取文件
node api: 像读取虚拟文件夹一样 像没有打包一样的文件层级一样使用 例如：读取文件、查询文件、引用模块、显示页面
web api: 使用file协议 读取文件 一样的把asar当成虚拟文件夹

也可以把 asar 档案当作一个普通的文件

node API的缺陷
1、asar包只读
2、Working Directory 在 asar 包中无效
3、API 中需要额外解压的档案包
4、fs.stat 获取的 stat 信息不可靠

执行 asar 包中的程序
但只有 execFile 可以执行 asar 包中的程序。

打包时排除文件
排除文件原因：一些 Node API 会在调用时将文件解压到文件系统中，除了效率问题外，也有可能引起杀毒软件的注意！
asar pack app app.asar --unpack *.node
生成不仅仅是app.asar 而且还有app.asar.unpacked 这个文件夹要一起给用户使用
 */
