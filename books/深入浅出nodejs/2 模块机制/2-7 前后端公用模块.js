/*
1、前端JavaScript 同一服务端分发到不同客户端 带宽 网络加载
后端JavaScript 相同代码多次执行 CPU和内存 磁盘加载
所以 CommonJS 是为后端指定的规范 不适合前端所需要的异步加载
所以来了 AMD CMD
2、AMD
define(id?, dependencie?, factory)

3、CMD
define(['dep1', 'dep2', ...], function(dep1, dep2) {
    return function () {}
})

4、CommonJS 现实意义很大 弥补了js的弱结构性 配合node 才有了npm 才有了当下的前端
 */

/**
 * 兼容所有的环境 amd cmd node 浏览器
 * @param functionName
 * @param definition
 */
function all(functionName, definition) {
    const hasDefine = typeof define === 'function' // 是否是amd cmd
    const hasExport = typeof module !== 'undefined' && module.export //是否是node
    if (hasDefine) {
        define(definition)
    } else if (hasExport) {
        module.export = definition()
    } else {
        this[functionName] = definition
    }
}
