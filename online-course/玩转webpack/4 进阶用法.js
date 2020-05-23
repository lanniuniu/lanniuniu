/*
1、清理构建目录
rm -rf ./dist 或者 使用clean-webpack-plugin

2、postcss添加前缀
autoprefixer自动补齐css前缀 postcss-loader autoprefixer

3、适配 px rem
px2rem-loader lib-flexible

4、资源内联
html：raw-loader
js：raw-loader

5、多页面打包
好处：多页面之间解耦 SEO友好
方法：指定entry 可以指定死 也可以动态获取某个目录

6、使用source map定位到源码
多种类型 按需设置
使用 devtool 设置

7、公共资源分离
基础库分离：html-webpack-externals-plugin
splitChunksPlugin
 */
