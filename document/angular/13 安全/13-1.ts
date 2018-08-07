/*
防范跨站脚本(XSS)攻击
为了防范 XSS 攻击，你必须阻止恶意代码进入 DOM。比如，如果某个攻击者能骗你把 <script> 标签插入到 DOM，
就可以在你的网站上运行任何代码。 除了 <script>，攻击者还可以使用很多 DOM 元素和属性来执行代码，
比如 <img onerror="...">、<a href="javascript:...">。 如果攻击者所控制的数据混进了 DOM，
就会导致安全漏洞。

1.永远不要根据用户的输入和原始模板动态生成模板源码
2.无害化处理与安全环境
<p class="e2e-inner-html-bound" [innerHTML]="htmlSnippet"></p>
3.避免直接使用 DOM API
浏览器内置的 DOM API 不会自动针对安全漏洞进行防护。
要避免直接与 DOM 交互，只要可能，就尽量使用 Angular 模板。
4.内容安全策略
5.服务器端 XSS 保护
 */

/*
信任安全值
 */

/*
HTTP级别漏洞
1.跨站请求伪造（XSRF）
2.跨站脚本包含(XSS)
也叫json漏洞
 */