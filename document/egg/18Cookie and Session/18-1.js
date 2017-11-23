/**
 * Created by 懒牛牛 on 2017/11/23.
 */

/*
Cookie

HTTP 请求都是无状态的，但是我们的 Web 应用通常都需要知道发起请求的人是谁。
为了解决这个问题，HTTP 协议设计了一个特殊的请求头：Cookie。
服务端可以通过响应头（set-cookie）将少量数据响应给客户端，浏览器会遵循协议将数据保存，
并在下次请求同一个服务的时候带上（浏览器也会遵循协议，只在访问符合 Cookie 指定规则的网站时带上对应的 Cookie 来保证安全性）。

通过 context.cookies，我们可以在 controller 中便捷、安全的设置和读取 Cookie。

context.cookies.set(key, value, options)

设置 Cookie 其实是通过在 HTTP 响应中设置 set-cookie 头完成的，每一个 set-cookie 都会让浏览器在 Cookie 中存一个键值对。
在设置 Cookie 值的同时，协议还支持许多参数来配置这个 Cookie 的传输、存储和权限。

maxAge (Number): 设置这个键值对在浏览器的最长保存时间。是一个从服务器当前时刻开始的毫秒数。
expires (Date): 设置这个键值对的失效时间，如果设置了 maxAge，expires 将会被覆盖。
如果 maxAge 和 expires 都没设置，Cookie 将会在浏览器的会话失效（一般是关闭浏览器时）的时候失效。
path (String): 设置键值对生效的 URL 路径，默认设置在根路径上（/），也就是当前域名下的所有 URL 都可以访问这个 Cookie。
domain (String): 设置键值对生效的域名，默认没有配置，可以配置成只在指定域名才能访问。
httpOnly (Boolean): 设置键值对是否可以被 js 访问，默认为 true，不允许被 js 访问。
secure (Boolean): 设置键值对只在 HTTPS 连接上传输，框架会帮我们判断当前是否在 HTTPS 连接上自动设置 secure 的值。

默认的配置下，Cookie 是加签不加密的，浏览器可以看到明文，js 不能访问，不能被客户端（手工）篡改。

如果想要 Cookie 在浏览器端可以被 js 访问并修改:

ctx.cookies.set(key, value, {
  httpOnly: false,
  signed: false,
});
如果想要 Cookie 在浏览器端不能被修改，不能看到明文：
ctx.cookies.set(key, value, {
  httpOnly: true, // 默认就是 true
  encrypt: true, // 加密传输
});
注意：

由于浏览器和其他客户端实现的不确定性，为了保证 Cookie 可以写入成功，建议 value 通过 base64 编码或者其他形式 encode 之后再写入。
由于浏览器对 Cookie 有长度限制限制，所以尽量不要设置太长的 Cookie。一般来说不要超过 4093 bytes。
当设置的 Cookie value 大于这个值时，框架会打印一条警告日志。
 context.cookies.get(key, options)

由于 HTTP 请求中的 Cookie 是在一个 header 中传输过来的，通过框架提供的这个方法可以快速的从整段 Cookie 中获取对应的键值对的值。
上面在设置 Cookie 的时候，我们可以设置 options.signed 和 options.encrypt 来对 Cookie 进行签名或加密，
因此对应的在获取 Cookie 的时候也要传相匹配的选项。

如果设置的时候指定为 signed，获取时未指定，则不会在获取时对取到的值做验签，导致可能被客户端篡改。
如果设置的时候指定为 encrypt，获取时未指定，则无法获取到真实的值，而是加密过后的密文。

Cookie 秘钥

由于我们在 Cookie 中需要用到加解密和验签，所以需要配置一个秘钥供加密使用。在 config/config.default.js 中

module.exports = {
  keys: 'key1,key2',
};
keys 配置成一个字符串，可以按照逗号分隔配置多个 key。Cookie 在使用这个配置进行加解密时：

加密和加签时只会使用第一个秘钥。
解密和验签时会遍历 keys 进行解密。
如果我们想要更新 Cookie 的秘钥，但是又不希望之前设置到用户浏览器上的 Cookie 失效，可以将新的秘钥配置到 keys 最前面，
等过一段时间之后再删去不需要的秘钥即可。
 */

/*
Session

Cookie 在 Web 应用中经常承担标识请求方身份的功能，所以 Web 应用在 Cookie 的基础上封装了 Session 的概念，专门用做用户身份识别。
框架内置了 Session 插件，给我们提供了 context.session 来访问或者修改当前用户 Session 。

Session 的使用方法非常直观，直接读取它或者修改它就可以了，如果要删除它，直接将它赋值为 null：

Session 的实现是基于 Cookie 的，默认配置下，用户 Session 的内容加密后直接存储在 Cookie 中的一个字段中，
用户每次请求我们网站的时候都会带上这个 Cookie，我们在服务端解密后使用。Session 的默认配置如下：
exports.session = {
  key: 'EGG_SESS',
  maxAge: 24 * 3600 * 1000, // 1 天
  httpOnly: true,
  encrypt: true,
};
可以看到这些参数除了 key 都是 Cookie 的参数，key 代表了存储 Session 的 Cookie 键值对的 key 是什么。
在默认的配置下，存放 Session 的 Cookie 将会加密存储、不可被前端 js 访问，这样可以保证用户的 Session 是安全的。

扩展存储

Session 默认存放在 Cookie 中，但是如果我们的 Session 对象过于庞大，就会带来一些额外的问题：

前面提到，浏览器通常都有限制最大的 Cookie 长度，当设置的 Session 过大时，浏览器可能拒绝保存。
Cookie 在每次请求时都会带上，当 Session 过大时，每次请求都要额外带上庞大的 Cookie 信息。
框架提供了将 Session 存储到除了 Cookie 之外的其他存储的扩展方案，
我们只需要设置 app.sessionStore 即可将 Session 存储到指定的存储中。

sessionStore 的实现我们也可以封装到插件中，例如 egg-session-redis 就提供了将 Session 存储到 redis 中的能力，
在应用层，我们只需要引入 egg-redis 和 egg-session-redis 插件即可。

注意：一旦选择了将 Session 存入到外部存储中，就意味着系统将强依赖于这个外部存储，当它挂了的时候，
我们就完全无法使用 Session 相关的功能了。因此我们更推荐大家只将必要的信息存储在 Session 中，
保持 Session 的精简并使用默认的 Cookie 存储，用户级别的缓存不要存储在 Session 中。

Session 实践

 修改用户 Session 失效时间

虽然在 Session 的配置中有一项是 maxAge，但是它只能全局设置 Session 的有效期，
我们经常可以在一些网站的登陆页上看到有 记住我 的选项框，勾选之后可以让登陆用户的 Session 有效期更长。
这种针对特定用户的 Session 有效时间设置我们可以通过 context.session.maxAge= 来实现。

 延长用户 Session 有效期

默认情况下，当用户请求没有导致 Session 被修改时，框架都不会延长 Session 的有效期，但是在有些场景下，
我们希望用户每次访问都刷新 Session 的有效时间，这样用户只有在长期未访问我们的网站的时候才会被登出。
这个功能我们可以通过 context.session.save() 来实现。

 */






