/*
1、模块结构
性能相关部分用C++实现 node_buffer 非性能部分用JS buffer slowBuffer

2、buffer对象
类似数组 用于处理字符串  元素为16进制的两位数

3、内存分配
c++层面申请内存 js层面分配内存

4、slab 动态内存管理机制
它试一块申请好的固定大小的内存区域
状态：full partial empty
每个slab大小只有8K
小对象小于等于8K 大对象大于8K
 */
