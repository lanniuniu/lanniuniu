/*
1、Node为官方称谓
2、Node和chrome的架构非常相似
chrome多一个html-webkit布局引擎，但都是用v8作为JavaScript的引擎
v8-中间层-磁盘等
3、Node特点
    异步I/O
    事件与回调函数
    单线程 采用web worker一样的思路——子线程
    跨平台 平台层架构libuv

 单线程弱点： 无法利用多核CPU 错误会引起整个应用退出 大量计算占用CPU导致无法继续调用异步I/O
4、应用场景
    I/O密集型：利用事件循环的处理能力
    CPU密集型业务也不赖：编写c/c++扩展 子线程
    分布式应用：数据库集群
 */
