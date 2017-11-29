/**
 * Created by 懒牛牛 on 2017/11/28.
 */

/*
默认语言
内置 egg-i18n

默认语言是 en-US。假设我们想修改默认语言为简体中文
// config/config.default.js
exports.i18n = {
  defaultLocale: 'zh-CN',
};
 */

/*
切换语言

我们可以通过下面几种方式修改应用的当前语言（修改后会记录到 locale 这个 Cookie），下次请求直接用设定好的语言。

优先级从高到低：

query: /?locale=en-US
cookie: locale=zh-TW
header: Accept-Language: zh-CN,zh;q=0.5
 */

/*
编写 I18n 多语言文件

多种语言的配置是独立的，统一存放在 config/locales/*.js 下。
不仅对于应用目录生效，在框架，插件的 config/locales 目录下同样生效。

注意单词拼写，是 locales 不是 locals。
 */

/*
获取多语言文本

我们可以使用 __ (Alias: gettext) 函数获取 locales 文件夹下面的多语言文本。

注意: __ 是两个下划线
如果文本中含有 %s，%j 等 format 函数，可以按照 util.format() 类似的方式调用：

# Controller 中使用

# View 中使用

 */



