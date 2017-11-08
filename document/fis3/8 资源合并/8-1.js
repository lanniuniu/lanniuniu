/**
 * Created by 懒牛牛 on 2017/11/8.
 */

/*
packTo

命中目标文件，设置 packTo 即能完成简单的合并操作。
合并的列表中，被依赖的文件会自动提前。但是并不是所有的资源都严格的指定了依赖，所以有时候需要控制顺序。可以通过配置 packOrder 来控制，packOrder 越小越在前面。

fis3-packager-map

packTo 其实用的就是这个插件，fis3 内部其实就是把 packTo 转成了这个插件的配置。
以下配置完全等价于上面 packTo 的配置

fis3-packager-deps-pack

deps-pack 是在 map 的基础上再扩展了用法，可以快速的命中目标文件的依赖

fis3-postpackager-loader

其实它并不是专门做打包的，而是做资源加载的插件。只是他能提供另一种更简单的打包方式。
他以页面为单位，分析当前页面用到的所有资源，将所有 js 合并成一个 js，所有的 css 合并成一个 css.
 */

