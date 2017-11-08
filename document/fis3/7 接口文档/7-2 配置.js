/**
 * Created by 懒牛牛 on 2017/11/8.
 */

/*
FIS3 配置设计了一套类似 css 的规则，而就如同 css 一样，有 !important 也有 @media，那么就在这篇文档中揭露我们的类 css 配置；
默认情况下，配置文件写到 fis-conf.js文件中，此文件放到项目的根目录下，或说有此文件的目录被看做是项目根目录
 */

/*
是否启用插件

规则覆盖
 */

/*
fis.match()
important

fis.match() 的第三个参数就是设置 !important 的，那么设置了这个属性后，后面的规则就无法覆盖了。

::package

fis.match('::package', {
   packager: fis.plugin('map')
});
表示当 packager 阶段所有的文件都分配某些属性

::image

所有被标注为图片的文件添加 hash
fis.match('::image', {
  useHash: true
});

::text

所有被标注为文本的文件去除 hash
fis.match('::text', {
  useHash: false
});

:js

匹配模板中的内联 js，支持 isHtmlLike 的所有模板
压缩 index.html 内联的 js
fis.match('index.html:js', {
  optimizer: fis.plugin('uglify-js')
});

压缩 index.tpl 内联的 js
fis.match('index.tpl:js', {
  optimizer: fis.plugin('uglify-js')
})

:css

匹配模板中内联 css，支持 isHtmlLike 的所有模板
压缩 index.html 内联的 css
fis.match('index.html:css', {
  optimizer: fis.plugin('clean-css')
});

// 压缩 index.tpl 内联的 css
fis.match('index.tpl:css', {
  optimizer: fis.plugin('clean-css')
})
 */





