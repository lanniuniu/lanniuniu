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
 */
