/*
electron 的 process对象 和node有所不同

属性
process.type String - 进程类型, 可以是 browser 或 renderer.
process.versions['electron'] String - Electron的版本.
process.versions['chrome'] String - Chromium的版本.
process.resourcesPath String - JavaScript源代码路径.
process.mas Boolean - 在Mac App Store 创建, 它的值为 true, 在其它的地方值为 undefined.
process.noAsar 设置它为 true 可以使 asar 文件在node的内置模块中实效.

事件
loaded 在Electron已经加载了其内部预置脚本和它准备加载主进程或渲染进程的时候触发.

方法
process.hang() 使当前进程的主线程挂起.
process.setFdLimit(maxDescriptors) OS X Linux
maxDescriptors Integer
设置文件描述符软限制于 maxDescriptors 或硬限制与os, 无论它是否低于当前进程.
 */
