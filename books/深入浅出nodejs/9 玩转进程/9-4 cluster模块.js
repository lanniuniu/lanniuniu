/*
使用Cluster模块 实现子进程集群 解决多核CPU利用率问题
 */
const cluster = require('cluster')
cluster.setupMaster({
    exec: 'worker.js'
})
const cpus = require('os').cpus()
for (let i = 0; i < cpus.length; i++) {
    cluster.fork()
}
/*
Cluster工作原理
cluster就是child_process和net的组合应用
缺点：一个主进程只能管理一组工作进程 而自行通过child_process来操作时 可以更灵活的控制工作进程 控制多组工作进程 隐式地创建多个tcp服务器
使得子进程可以共享多个的服务器端socket

cluster事件
fork
online
listening
disconnect
exit
setup cluster.setupMaster()执行后出发改事件

unix设计理念 每个进程只做一件事 并做好一件事 将复杂分解为简单 将简单组合成强大
 */
