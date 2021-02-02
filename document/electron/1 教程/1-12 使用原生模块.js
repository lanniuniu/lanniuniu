/*
Electron 同样也支持原生模块，但由于和官方的 Node 相比使用了不同的 V8 引擎，
如果想编译原生模块，则需要手动设置 Electron 的 headers 的位置。

如何安装原生模块
1、通过 electron-rebuild 包重新编译原生模块，它帮你自动完成了下载 headers、编译原生模块等步骤
npm install --save-dev electron-rebuild
2、通过 npm 安装
系统环境变量需要自己配置
3、通过 node-gyp 安装
自己设置参数

HOME=~/.electron-gyp 设置去哪找开发时的 headers。

--target=0.29.1 设置了 Electron 的版本

--dist-url=... 设置了 Electron 的 headers 的下载地址

--arch=x64 设置了该模块为适配64位操作系统而编译
 */
