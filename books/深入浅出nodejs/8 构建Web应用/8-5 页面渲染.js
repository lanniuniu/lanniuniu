/*
内容响应 和 页面渲染
1、内容响应
响应报头中content-* 十分重要  客户端会根据这些内容 进行内容的解析
MIME：Multipurpose Internet Mail Extensions
content-type 里面含有MIME的值  浏览器会根据这个字段来决定采用不同的渲染方式

附件下载
Content-Disposition 根据这个值来判断是否下载 当为内容查看 inline 当为附件下载 attachment

JSON

响应跳转 header location url 响应码320

2、视图渲染
模板：ASP PHP JSP
模板语言 包含模板语言的模板文件 拥有动态数据的数据对象 模板引擎

模板引擎: 语法分解、处理表达式、生成待执行的语句、与数据一起执行，生成最终的字符串
 */

/**
 * 模板函数
 * @param str
 * @param data
 * @returns {*}
 */
const render = (str, data) => {
    // JSP ASP模板语言
    const JSPREG = /<%=([\s\S]+?)%>/g
    let tpl = str.replace(JSPREG, (match, code) => {
        console.log(match)
        return `' + obj.${code}+ '`
    })
    console.log(tpl)
    tpl = `var tpl = '${tpl}'\nreturn tpl;`
    console.log(tpl)
    const complied = new Function('obj', tpl) // 变量名为函数名 最后一个参数为函数内容 其他为参数 构造函数所有入参都为字符串
    return complied(data)
}
const tpl = `love <%=username%>.`
console.log(render(tpl, {username: 'qinqin'}))

/*
优秀的模板引擎远不止这些，可以改善
with的应用

模板安全 xss漏洞
模板逻辑
集成文件系统 综合缓存和文件读取
子模板
布局视图
模板性能 优化执行表达式

以上均为 MVC模型下的页面渲染
现在都用MVVM
 */

