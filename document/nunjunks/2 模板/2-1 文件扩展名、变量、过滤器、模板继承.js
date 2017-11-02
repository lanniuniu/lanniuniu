/**
 * Created by 懒牛牛 on 2017/11/1.
 */

/*
文件扩展名

虽然你可以用任意扩展名来命名你的Nunjucks模版或文件，但Nunjucks社区还是推荐使用.njk。

如果你在给Nunjucks开发工具或是编辑器上的语法插件时，请记得使用.njk扩展名。
 */

/*
变量

变量会从模板上下文获取，如果你想显示一个变量可以：

{{ username }}{{ foo.bar }}{{ foo["bar"] }}
如果变量的值为 undefined 或 null 将不显示，引用到 undefined 或 null 对象也是如此
(如 foo 为 undefined，{{ foo }}, {{ foo.bar }}, {{ foo.bar.baz }} 也不显示)
 */

/*
过滤器

过滤器是一些可以执行变量的函数，通过管道操作符 (|) 调用，并可接受参数。
 */

/*
模板继承

模板继承可以达到模板复用的效果，当写一个模板的时候可以定义 "blocks"，子模板可以覆盖他，同时支持多层继承。

super
你可以通过调用super从而将父级区块中的内容渲染到子区块中。
 */


