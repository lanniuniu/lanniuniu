/*
所有的 Node.js's built-in modules 在 Electron 中都可用，并且所有的 node 的第三方组件也可以放心使用（包括自身的模块）。

内置的组件分类：主进程可使用 渲染进程可使用 均可使用

基本规则：GUI 模块或者系统底层的模块只可以在主进程中使用。要使用这些模块，你应当很熟悉主进程 vs 渲染进程脚本的概念。

主进程脚本看起来像个普通的 nodejs 脚本

渲染进程和传统的 web 界面一样，除了它具有使用 node 模块的能力
 */
