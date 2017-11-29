/**
 * Created by 懒牛牛 on 2017/11/27.
 */

/*
WEB安全概念

Web 应用中存在很多安全风险，这些风险会被黑客利用，轻则篡改网页内容，重则窃取网站内部数据，
更为严重的则是在网页中植入恶意代码，使得用户受到侵害。

XSS 攻击：对 Web 页面注入脚本，使用 JavaScript 窃取用户信息，诱导用户操作。
CSRF 攻击：伪造用户请求向网站发起恶意请求
钓鱼攻击：利用网站的跳转链接或者图片制造钓鱼陷阱。
HTTP参数污染：利用对参数格式验证的不完善，对服务器进行参数注入攻击。
远程代码执行：用户通过浏览器提交执行命令，由于服务器端没有针对执行函数做过滤，导致在没有指定绝对路径的情况下就执行命令。

而框架本身针对 Web 端常见的安全风险内置了丰富的解决方案
在框架中内置了安全插件 egg-security， 提供了默认的安全实践。

 */

/*
开启与关闭配置

框架的安全插件是默认开启的，如果我们想关闭其中一些安全防范，直接设置该项的 enable 属性为 false 即可。

match 和 ignore

match 和 ignore 使用方法和格式与中间件通用配置一致。

如果只想开启针对某一路径，则配置 match 选项
 */

/*
安全威胁XSS的防范

XSS（cross-site scripting跨域脚本攻击）攻击是最常见的 Web 攻击，其重点是『跨域』和『客户端执行』。

XSS 攻击一般分为两类：

Reflected XSS（反射型的 XSS 攻击）
Stored XSS（存储型的 XSS 攻击）

Reflected XSS

反射型的 XSS 攻击，主要是由于服务端接收到客户端的不安全输入，在客户端触发执行从而发起 Web 攻击

防范方式

框架提供了 helper.escape() 方法对字符串进行 XSS 过滤。
网站输出的内容会提供给 JavaScript 来使用。这个时候需要使用 helper.sjs() 来进行过滤。

helper.sjs() 用于在 JavaScript（包括 onload 等 event）中输出变量，会对变量中字符进行 JavaScript ENCODE，
将所有非白名单字符转义为 \x 形式，防止 XSS 攻击，也确保在 js 中输出的正确性

还有一种情况，有时候我们需要在 JavaScript 中输出 json ，若未做转义，易被利用为 XSS 漏洞。


Stored XSS

基于存储的 XSS 攻击，是通过提交带有恶意脚本的内容存储在服务器上，当其他人看到这些内容时发起 Web 攻击
。一般提交的内容都是通过一些富文本编辑器编辑的，很容易插入危险代码。
由于是一个非常复杂的安全处理过程，对服务器处理性能一定影响，如果不是输出 HTML，请勿使用。
shtml 使用了严格的白名单机制，除了过滤掉 XSS 风险的字符串外， 在默认规则外的 tag 和 attr 都会被过滤掉。
常见的 data-xx 属性由于不在白名单中，所以都会被过滤。

所以，一定要注意 shtml 的适用场景，一般是针对来自用户的富文本输入，切忌滥用，功能既受到限制，又会影响服务端性能。
此类场景一般是论坛、评论系统等，即便是论坛等如果不支持 HTML 内容输入，也不要使用此 Helper，直接使用 escape 即可。

JSONP XSS

JSONP 的 callback 参数非常危险，他有两种风险可能导致 XSS

1、callback 参数意外截断js代码，特殊字符单引号双引号，换行符均存在风险。

2、callback 参数恶意添加标签（如 <script> ），造成 XSS 漏洞。

防御内容：

callback 函数名词最长 50 个字符限制
callback 函数名只允许 [, ], a-zA-Z0123456789_, $, .，防止一般的 XSS，utf-7 XSS等攻击。
可定义配置：

callback 默认 _callback，可以重命名。
limit - 函数名 length 限制，默认 50

其他 XSS 的防范方式

浏览器自身具有一定针对各种攻击的防范能力，他们一般是通过开启 Web 安全头生效的。框架内置了一些常见的 Web 安全头的支持。

 CSP

W3C 的 Content Security Policy，简称 CSP，主要是用来定义页面可以加载哪些资源，减少 XSS 的发生。

框架内支持 CSP 的配置，不过是默认关闭的，开启后可以有效的防止 XSS 攻击的发生。
要配置 CSP , 需要对 CSP 的 policy 策略有了解，具体细节可以参考 CSP 是什么。

 X-Download-Options:noopen

默认开启，禁用 IE 下下载框Open按钮，防止 IE 下下载文件默认被打开 XSS。

 X-Content-Type-Options:nosniff

禁用 IE8 自动嗅探 mime 功能例如 text/plain 却当成 text/html 渲染，特别当本站点 serve 的内容未必可信的时候。

 X-XSS-Protection

IE 提供的一些 XSS 检测与防范，默认开启

close 默认值false，即设置为 1; mode=bloc

 */

/*
安全威胁 CSRF 的防范

CSRF（Cross-site request forgery跨站请求伪造，
也被称为 One Click Attack 或者 Session Riding，通常缩写为 CSRF 或者 XSRF，是一种对网站的恶意利用。
CSRF 攻击会对网站发起恶意伪造的请求，严重影响网站的安全。因此框架内置了 CSRF 防范方案。

 防范方式
 Synchronizer Tokens：通过响应页面时将 token 渲染到页面上，在 form 表单提交的时候通过隐藏域提交上来。
Double Cookie Defense：将 token 设置在 Cookie 中，在提交 post 请求的时候提交 Cookie，
并通过 header 或者 body 带上 Cookie 中的 token，服务端进行对比校验。

使用方式

 同步表单的 CSRF 校验

在同步渲染页面时，在表单请求中增加一个 name 为 _csrf 的 url query，值为 ctx.csrf，
这样用户在提交这个表单的时候会将 CSRF token 提交上来：

传递 CSRF token 的字段可以在配置中改变：

AJAX 请求

在 CSRF 默认配置下，token 会被设置在 Cookie 中，在 AJAX 请求的时候，可以从 Cookie 中取到 token，
放置到 query、body 或者 header 中发送给服务端。

 Session vs Cookie 存储

默认配置下，框架会将 CSRF token 存在 Cookie 中，以方便 AJAX 请求获取到。但是所有的子域名都可以设置 Cookie，
因此当我们的应用处于无法保证所有的子域名都受控的情况下，存放在 Cookie 中可能有被 CSRF 攻击的风险。框架提供了一个配置项，
可以将 token 存放到 Session 中。

忽略 JSON 请求

在 SOP 的安全策略保护下，基本上所有的现代浏览器都不允许跨域发起 content-type 为 JSON 的请求，
因此我们可以直接放过类型的 JSON 格式的请求。

刷新 CSRF token

当 CSRF token 存储在 Cookie 中时，一旦在同一个浏览器上发生用户切换，新登陆的用户将会依旧使用旧的 token（之前用户使用的），
这会带来一定的安全风险，因此在每次用户登陆的时候都必须刷新 CSRF token。
 */

/*
安全威胁 XST 的防范

XST 的全称是 Cross-Site Tracing，客户端发 TRACE 请求至服务器，如果服务器按照标准实现了 TRACE 响应，
则在 response body 里会返回此次请求的完整头信息。通过这种方式，客户端可以获取某些敏感的头字段，例如 httpOnly 的 Cookie。

防范方式

框架已经禁止了 trace，track，options 三种危险类型请求。
 */

/*
安全威胁 钓鱼攻击 的防范
种类： url 钓鱼、图片钓鱼和 iframe 钓鱼。

服务端未对传入的跳转 url 变量进行检查和控制，可能导致可恶意构造任意一个恶意地址，诱导用户跳转到恶意网站。
由于是从可信的站点跳转出去的，用户会比较信任，所以跳转漏洞一般用于钓鱼攻击，通过转到恶意网站欺骗用户输入用户名和密码盗取用户信息，
或欺骗用户进行金钱交易； 也可能引发的 XSS 漏洞（主要是跳转常常使用 302 跳转，即设置 HTTP 响应头，Locatioin: url，
如果 url 包含了 CRLF，则可能隔断了 HTTP 响应头，使得后面部分落到了 HTTP body，从而导致 XSS 漏洞）。

防范方式

若跳转的 url 事先是可以确定的，包括 url 和参数的值，则可以在后台先配置好，url 参数只需传对应 url 的索引即可，
通过索引找到对应具体 url 再进行跳转；
若跳转的 url 事先不确定，但其输入是由后台生成的（不是用户通过参数传人），则可以先生成好跳转链接然后进行签名；
若 1 和 2 都不满足，url 事先无法确定，只能通过前端参数传入，则必须在跳转的时候对 url 进行按规则校验：
判断 url 是否在应用授权的白名单内。
框架提供了安全跳转的方法，可以通过配置白名单避免这种风险。

ctx.redirect(url) 如果不在配置的白名单内，则禁止。
ctx.unsafeRedirect(url) 一般不建议使用，明确了解可能带来的风险后使用。
安全方案覆盖了默认的ctx.redirect方法，所有的跳转均会经过安全域名的判断。

用户如果使用ctx.redirect方法，需要在应用的配置文件中做如下配置：

若用户没有配置 domainWhiteList 或者 domainWhiteList数组内为空，则默认会对所有跳转请求放行，即等同于ctx.unsafeRedirect(url)
 */

/*
图片钓鱼

如果可以允许用户向网页里插入未经验证的外链图片，这有可能出现钓鱼风险。

防范方式

框架提供了 .surl() 宏做 url 过滤。

用于在 html 标签中中要解析 url 的地方（比如 <a href=""/><img src=""/>），其他地方不允许使用。

对模板中要输出的变量，加 helper.surl($value)。
注意：在需要解析 url 的地方，surl 外面一定要加上双引号，否则就会导致XSS漏洞。

 */

/*
 iframe 钓鱼

iframe 钓鱼，通过内嵌 iframe 到被攻击的网页中，攻击者可以引导用户去点击 iframe 指向的危险网站，甚至遮盖，影响网站的正常功能，劫持用户的点击操作。

框架提供了 X-Frame-Options 这个安全头来防止 iframe 钓鱼。默认值为 SAMEORIGIN，只允许同域把本页面当作 iframe 嵌入。

当需要嵌入一些可信的第三方网页时，可以关闭这个配置。
 */

/*
安全威胁HPP防范

Http Parameter Pollution（HPP)，即 HTTP 参数污染攻击。在HTTP协议中是允许同样名称的参数出现多次，而由于应用的实现不规范，
攻击者通过传播参数的时候传输 key 相同而 value 不同的参数，从而达到绕过某些防护的后果。

HPP 可能导致的安全威胁有：

绕过防护和参数校验。
产生逻辑漏洞和报错，影响应用代码执行。

如何防范

框架本身会在客户端传输 key 相同而 value 不同的参数时，强制使用第一个参数，因此不会导致 hpp 攻击。
 */

/*
中间人攻击与 HTTP / HTTPS

HTTP 是网络应用广泛使用的协议，负责 Web 内容的请求和获取。然而，内容请求和获取时会经过许多中间人，主要是网络环节，
充当内容入口的浏览器、路由器厂商、WIFI提供商、通信运营商，如果使用了代理、翻墙软件则会引入更多中间人。
由于 HTTP 请求的路径、参数默认情况下均是明文的，因此这些中间人可以对 HTTP 请求进行监控、劫持、阻挡。

在没有 HTTPS 时，运营商可在用户发起请求时直接跳转到某个广告，或者直接改变搜索结果插入自家的广告。如果劫持代码出现了 BUG ，
则直接让用户无法使用，出现白屏。

数据泄露、请求劫持、内容篡改等等问题，核心原因就在于 HTTP 是全裸式的明文请求，域名、路径和参数都被中间人们看得一清二楚。
HTTPS 做的就是给请求加密，让其对用户更加安全。对于自身而言除了保障用户利益外，还可避免本属于自己的流量被挟持，以保护自身利益。

尽管 HTTPS 并非绝对安全，掌握根证书的机构、掌握加密算法的组织同样可以进行中间人形式的攻击。
不过HTTPS是现行架构下最安全的解决方案，并且它大幅增加了中间人攻击的成本。

对于 HTTPS 来讲，还有一点要注意的是 HTTP 严格传输安全（HSTS），如果不使用 HSTS，当用户在浏览器中输入网址时没有加 HTTPS，浏览器会默认使用 HTTP 访问

框架提供了 hsts Strict-Transport-Security 这个头的默认开启。让 HTTPS 站点不跳转到 HTTP，如果站点支持 HTTPS，请一定要开启。

如果我们的Web 站点是 http 站点，需要关闭这个头。配置如下：

maxAge 默认一年 365 * 24 * 3600。
includeSubdomains 默认 false, 可以添加子域名，保证所有子域名都使用 HTTPS 访问。
 */

/*
其他安全工具

 ctx.isSafeDomain(domain)

是否为安全域名。安全域名在配置中配置，见 ctx.redirect 部分。

 app.injectCsrf(str)

这个函数提供了模板预处理－自动插入 CSRF key 的能力，可以自动在所有的 form 标签中插入 CSRF 隐藏域，用户就不需要手动写了。

 app.injectNonce(str)

这个函数提供了模板预处理－自动插入 nonce 的能力，如果网站开启了 CSP 安全头，并且想使用 CSP 2.0 nonce 特性，可以使用这个函数。参考 CSP 是什么。

这个函数会扫描模板中的 script 标签，并自动加上 nonce 头。

 app.injectHijackingDefense(str)

对于没有开启 HTTPS 的网站，这个函数可以有限的防止运营商劫持。
 */




