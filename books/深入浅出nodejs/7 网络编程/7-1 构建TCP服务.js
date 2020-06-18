/*
TCP传输控制协议
1、OSI模型
物理层 网络物理硬件
数据链结层 网络特有的链路接口
网络层 IP
传输层 TCP/UDP
会话层 通信链接/维持会话
表示层 加/解 密
应用层 http/smtp/imap等

2、创建TCP服务器端
3、TCP服务的事件

服务器事件：listening connection close error
连接事件：data end connect drain error close timeout

4、针对小数据包的优化策略
Nagle算法
当缓冲区的数据达到一定数量或者一定时间才会发出   优化网络 但有可能延迟发送
 */
const net = require('net')
const client = net.connect({port: 8888}, () => {
    client.write()
})
