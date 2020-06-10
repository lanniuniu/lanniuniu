/*
1、查看内存使用情况
process.memoryUsage() 查看进程的内存使用情况
进程的内存分为 rss swap交换区 fileSystem文件系统
rss进程常驻内存 heapTotal堆的总申请内存 heapUsed堆的已使用内存

os.totalmem() os.freemem() 查看系统的内存占用

2、堆外内存
Node中的内存使用并非都是通过V8进行分配 将不是通过V8分配的内存成为堆外内存
利用好堆外内存可以突破内存限制的问题
 */
