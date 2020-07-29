/*
1、请求方法 get put post delete
2、路径解析
3、查询字符串
4、cookies
    path: cookie影响到的路径
    Expires Max-Age
    HttpOnly 设置浏览器不允许通过脚本document.cookie 去更改cookie  而浏览器对这块的实现是 无法看见document.cookie 但在http请求中 发送cookie到服务端
    secure 当值为true时 http无效 https有效
5、cookie的性能影响
因为每次http请求会带上cookie 所以会有性能影响
    为静态页面设置不同的域名 不使用根域名
    减少DNS查询

6、session
7、缓存
Etag Expires

8、Basic认证
当客户端与服务器端进行请求时 允许通过用户名 密码 实现的一种身份认证方式
Authorization 报文中的字段 由认证方式和加密值构成 base64编码
 */
