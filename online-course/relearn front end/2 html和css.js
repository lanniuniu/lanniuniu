/*
1、语义
应用场景：自然语言表达能力的补充、文章标题摘要、适合机器阅读的整体结构
attr: 缩写
hr：表示故事走向的转变和话题的转变
引述标签：blockquote段落级引述内容 q行内的引述内容 cite作品名
time
figure figcaption: 与主文章有关的图像
dfn：用来包裹被定义的名词
pre: 不用浏览器处理
code

2、css规则——分为@规则和普通规则
@规则：
    @charset: 提示css文件使用的字符编码方式
    @import
    @media
    @page: 分页媒体访问网页时的表现设置
    @counter-style: 产生一种用于定义列表项的表现的数据
    @keyframes
    @font-face
    @support: 检查环境的特性
    @namespaces
    @viewport
普通规则

css变量
定义 -- 配合上var函数
    :root {
        --name-color: red;
    }
    p {
        color: var(--name-color);
    }

计算型函数
calc() 基本的表达式计算 支持不同单位的混合运算
max() min() clamp() 给定范围 超出范围取范围值
toggle() 规则选中多于一个元素时生效 来回切换效果

3、元信息类标签
base: 废弃标签，给所有的url加相对地址 用js代替它
meta: 一组键值对标签，表示通用的信息元 name content
    定义编码 charset的meta
    定义http请求 http-equiv
    定义移动端页面 viewport  可以设置 width height device-width device-height initial-scale minimum-scale maximum-scale user-scalable

meta标签还有很多各种各样的属性，可以提供丰富的功能

4、选择器
命名空间的类型选择器?
属性选择器 四种 [att] [attr=val] [attr~=val1 val2 val3]多种值匹配 [attr|=val]开头匹配
伪类选择器：树结构关系、链接与行为、逻辑（:not）
复杂选择器连接：空格（后代） >(子) ~（后继） +（直接后继）||（列选择）
伪元素：::after ::before ::first-line ::first-letter

5、链接标签 a link area
注意：不显示 需要插件或者搜索引擎识别
link：超链接类（rss订阅、pre、next、作者、帮助、版权、搜索）、外部资源链接类（icon、stylesheet、预处理、）
area：区域型链接 实现区域性触发链接 和map、img 配合使用 有圆形、矩形、多边形

6、替换型元素
srcset 根据屏幕条件选取图片的能力
picture元素也可以

<picture>
    img
    source 支持媒体查询 picture video audio 都可以使用他来指定源
</picture>

video
track 字幕

audio
iframe sandbox 防止安全问题

7、
 */
