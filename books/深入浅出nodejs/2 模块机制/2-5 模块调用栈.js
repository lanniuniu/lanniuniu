/*
1、各个模块的作用和互相调用
文件模块：为普通的js调用c/c++扩展模块
JavaScript核心模块：封装内建模块和桥接 负责文件模块的调用 功能模块
c/c++内建模块：最底层的模块 提供api给JavaScript核心模块和第三方JavaScript文件模块的调用
c/c++扩展模块

2、核心模块包括：JavaScript核心模块、c/c++内建模块
文件模块包括：JavaScript普通模块和c/c++扩展
 */
