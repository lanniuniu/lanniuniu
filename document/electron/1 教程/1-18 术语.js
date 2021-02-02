/*
ASAR 代表了 Atom Shell Archive Format。
一个 asar 压缩包就是一个简单的 tar 文件-就像将那些有联系的文件格式化至一个单独的文件中。
Electron 能够任意读取其中的文件并且不需要解压缩整个文件。
ASAR 格式主要是为了提升 Windows 平台上的性能

Brightray 一个低级别依赖 启动chromium渲染引擎

DMG
IPC
main process
MAS
native modules
process
render process
V8
webview

libchromiumcontent 一个单独的开源库，包含了 Chromium 的模块以及全部依赖（比如 Blink, V8 等）

NSIS 一个微软 Windows 平台上的脚本驱动的安装制作工具

Squirrel 是一个开源的框架来让 Electron 的应用能够自动的更新到发布的新的版本

userland (当程序运行在操作系统内核之外) 让用户能够创造和分享一些工具来提额外的功能在这个能够使用的 "core（核心）"之上。
 */
