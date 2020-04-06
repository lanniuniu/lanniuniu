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

 */
