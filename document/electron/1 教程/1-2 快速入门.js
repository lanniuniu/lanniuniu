/*
主进程
在 Electron 里，运行 package.json 里 main 脚本的进程被称为主进程。在主进程运行的脚本可以以创建 web 页面的形式展示 GUI。

渲染进程
每个 Electron 的页面都在运行着自己的进程，这样的进程我们称之为渲染进程。
在一般浏览器中，网页通常会在沙盒环境下运行，并且不允许访问原生资源。然而，Electron 用户拥有在网页中调用 io.js 的 APIs 的能力，可以与底层操作系统直接交互。

主进程和渲染进程的区别
主进程使用BrowserWindow实例创建渲染进程  并互相独立地管理自己的进程 渲染进程是不可以调用GUI的API  需要用ipc模块、remote模块来调用

package.json
运行main字段里面的脚本  没得就运行index.js
 */
