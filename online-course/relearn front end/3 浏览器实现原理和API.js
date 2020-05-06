/*
1、尽可能流式进行上一步输出 DNS、http、DOM、css计算、渲染合成、绘制到页面
2、http put delete head（只返回请求头） connect（用于https websocket）
301永久转移 302暂时转移 304 前提是本地有缓存 通过request告诉服务端 服务端通过时间或tag 发现没得更新 就返回304
3、request header
    connection 连接方式 如果是keep-alive，且服务端支持，则复用连接
    if-modified-since 上次访问时的更改时间，如果服务端认为没更新，则放回304
    if-none-match 上次访问时使用的etag
response header
    via 服务端的请求链路
    server 服务端软件类型
4、DOM渲染过程：字符流 —— 词token —— DOM树 —— 带样式的DOM树 - 位图 - 合成层 - 显示到屏幕
5、node 前后父子 增删改查
    查询 getElement 性能高于 querySelector
6、range API 拥有更高性能 用于底层框架、富文本编辑
7、DOM的命名空间 ？？？作用
8、CSSOM API css相关 和 CSSOM View API 浏览器相关
 */
