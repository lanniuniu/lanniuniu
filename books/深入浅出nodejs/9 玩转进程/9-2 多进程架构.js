/*
node提供child_process模块 提供child_process.fork()实现进程的复制
 */

// worker.js
const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'})
    res.end('love qinqin\n')
}).listen(Math.round((1 + Math.random()) * 1000), '127.0.0.1')

// master.js
const fork = require('child_process').fork
const cpus = require('os').cpus()
for (let i = 0; i < cpus.length; i++) {
    fork('./worker.js')
}

/*
以上为著名的master-worker模式 又称主从模式
主进程和工作进程
分布式架构 用于并行处理业务 具有良好的可伸缩性和稳定性

但是fork()进程是昂贵的 10MB的内存和30ms的启动时间

创建子进程
spawn() exec() execFile() fork() 各不相同
后面三种是spawn的延伸应用
 */
const cp = require('child_process')
cp.spawn('node', ['worker.js'])
cp.exec('node worker.js', (err, stdpit, stderr) => {

})
cp.execFile('worker.js', (err, stdpit, stderr) => {

})
cp.fork('./worker.js')

/*
前端使用webworker 通过onmessage() postMessage() 进行通信

子进程对象相似地 由send() 和 message事件共同实现通信

IPC即进程间通信 要求两个进程均为node

句柄
种类如下
net.Socket tcp套接字
net.Server tcp服务器
net.Native c++层面的tcp套接字或ipc管道
dgram.Socket udp套接字
dgram.Native c++层面的udp套接字
 */

/*
创建子进程、进程间通信的IPC通道实现、句柄在进程间的发送和还原、端口共用
这些技术 可以在单机上搭建Node集群 所以可以在多核CPU上 可以充分利用资源
 */
