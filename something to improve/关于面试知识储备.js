/*
一、前端工程化
前端工程化不单单包括前端的模块化、组件化、自动化，还包括前端性能优化，前端目录规划，前端规范化，自动化测试，发布等等一系列知识。

静态资源管理系统 = 资源表 + 资源加载框架

前端性能优化
1、请求数量：
合并脚本和样式表
CSS Sprites: 使用background-position来调整背景图像的位置
拆分初始化负载：初始化时加载必要的javaScript,其余的JavaScript稍后再加载；避免给用户带来响应停顿的印象。
划分主域: 利用浏览器对同一url的并行请求加载数限制，划分资源的主从域后，可大大提升总体的加载完成时间

2、请求带宽
开启GZIP：服务器开启GZIP压缩（非图片、wps、音乐等），压缩等级越大约占CPU资源
精简js：压缩js
移除重复脚本
图像优化

3、缓存利用
使用CDN
使用外部JS和CSS
添加Expires、配置ETag: 服务器添加Expires头、配置ETag能有效的利用浏览器的缓存能力来改善页面的性能，能在后续的页面中有效避免很多不必要的Http请求
减少DNS查找：将所有的内容资源都放在同一个域(Domain)下面，这样访问整个网站就只需要进行一次DNS查找。这和划分主域相驳，所以采用折衷方案——2-4个域
使用 静态资源管理系统 = 资源表 + 资源加载框架 。实现永久开启缓存，缓存更新

4、页面结构
将样式表放在顶部
将脚本放在底部
尽早刷新文档的输出


二、前端设计模式

三、前端安全性问题

四、跨域问题处理

五、前端数据加密

六、http相关问题
http和https的区别

http常见响应码
1XX：信息类 2XX：成功类 3XX：重定向 4XX：客户端错误 5XX：服务器错误

http2.0
基于SPDY协议，在不改动http语义、方法、状态码、URI及首部字段的情况下，大幅提高web性能
1、二进制传输：在应用层（http2.0）和传输层（TCP UDP）增加二进制分帧层，并使用二进制传输
2、多路复用：使用雪碧图、使用多个域名优化网站性能的时代已经过去了，使用http2.0，多路复用可以在一个TCP连接中存在多个流，
    及可以同时发送多个请求
3、header压缩
4、服务器push
5、更安全
七、webpack相关
webpack plugin和loader


八、状态管理器相关

九、vue相关
vuex原理
vue router原理
vue 双向绑定原理
十、nodejs相关
module.export export. 区别
十一、es6相关
1、判断是否为数组、对象
  instanceof类型判断 isArray()可以判断数组 Object.keys()判断是否为空对象 for in
2、== 和 === 的区别
==先进行类型转化，再比较值的大小 而 === 会直接比较
十二、算法

十三、模块化

十四、其他
1、自动化测试
2、mock数据
3、pwa
4、nginx
5、小程序
6、敏捷开发
7、v8的gc
8、技术困难、项目难点、及解决方式
9、HR面 团队架构、团队文化、职业的发展前景和晋升机制
10、多做一些前端编程题，应对面试。不经常做题，TM在面试的时候，贼紧张
 */
