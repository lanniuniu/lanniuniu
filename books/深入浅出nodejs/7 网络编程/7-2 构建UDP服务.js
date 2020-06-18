/*
UDP 用户数据包协议
一个套接字可以对应多个UDP服务

1、创建套接字
2、创建UDP服务器端
3、创建UDP客户端
4、UDP套接字事件
message
listening
close
error
 */
const dgram = require('dgram')
const server = dgram.createSocket('udp4')
