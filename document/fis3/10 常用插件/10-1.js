/**
 * Created by 懒牛牛 on 2017/11/8.
 */

/*
parser插件

fis-parser-babel-5.x
支持 es6、es7 或者 jsx 编译成 es5

fis3-parser-typescript

支持 typescript、es6 或者 jsx 编译成 js。速度相比 babel 略快，但是 es7 跟进较慢。

fis-parser-less-2.x

支持 less 编译成 css

fis-parser-node-sass

支持 sass/scss 编译成 css。

fis-parser-jdists

一款强大的代码块预处理工具。比如加上如下配置，在 debug 注释中的代码，在正式环境下自动移除。

 */

/*
preprocessor 插件

fis3-preprocessor-js-require-css

允许你在 js 中直接 require css 文件。

fis3-preprocessor-js-require-file

允许你在 js 中直接 require 文件。比如图片，json, 其他静态文件。
require 部分将会替换成部署后的 url。 同时还支持，如果文件小于 20K 直接替换成 base64 字符串。

fis3-preprocessor-autoprefixer

自动给 css 属性添加前缀，让标准的 css3 支持更多的浏览器.
 */

/*
optimizer 插件

fis-optimizer-uglify-js

压缩 js 代码。

fis-optimizer-clean-css

压缩 css 代码。

fis-optimizer-png-compressor

压缩 png 图片。

fis-optimizer-smarty-xss

smarty xss 修复插件。 fis3-smarty 中已默认配置好。

fis-optimizer-html-compress

smarty html 代码压缩插件。 fis3-smarty 中已默认配置好。

jello-optimizer-velocity-xss

velocity 模板 xss 修复插件。
 */

/*

package 插件

fis3-packager-map

在 fis3 中自带了， 默认的打包插件

fis3-packager-deps-pack

支持包含依赖的打包插件

fis3-postpackager-loader

静态资源前端加载器，纯前端项目必备插件。自动加载页面中用到的资源，同时还能按页面级别的All In One 打包。
 */

/*
deploy 插件

fis3-deploy-local-deliver

已自带 fis3 中。用来将文件产出到本地

fis3-deploy-http-push

将产出文件通过 http post 到目标机器。

fis3-deploy-tar

将产出文件，打包成 tar 文件。

fis3-deploy-zip

将产出文件，打包成 zip 文件。

fis3-deploy-encoding

将产出的文件做编码处理。

fis3-deploy-replace

将产出的文件，做文本替换。

fis3-deploy-skip-packed

将产出的文件过滤掉已被打包的。


 */

/*

fis3-hook-commonjs

[强烈推荐] CommonJs 模块化支持插件。

fis3-hook-amd

AMD 模块化支持插件。
fis3-hook-cmd

CMD 模块化支持插件。
fis3-hook-system

System 模块化支持插件。
fis3-hook-node_modules

支持 npm 组件的插件，npm 包中的模块，直接通过包名就能 require 到。
fis.hook('node_modules');
fis3-hook-relative

支持产出为相对路径。
 */

