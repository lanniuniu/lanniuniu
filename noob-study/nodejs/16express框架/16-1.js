/**
 * Created by 懒牛牛 on 2017/2/8.
 */
// Express 简介(Express官网： http://expressjs.com/
//             Express4.x API：http://expressjs.com/zh-cn/4x/api.html)
// Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，
// 和丰富的 HTTP 工具。
// 使用 Express 可以快速地搭建一个完整功能的网站。
// Express 框架核心特性：
// 可以设置中间件来响应 HTTP 请求。
// 定义了路由表用于执行不同的 HTTP 请求动作。
// 可以通过向模板传递参数来动态渲染 HTML 页面。

// 安装 Express
// 安装 Express 并将其保存到依赖列表中：
// $ npm install express --save
// 以上命令会将 Express 框架安装在当前目录的 node_modules 目录中，
// node_modules 目录下会自动创建 express 目录。
// 以下几个重要的模块是需要与 express 框架一起安装的：
    // body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
    // cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
    // multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。
// $ npm install body-parser --save
// $ npm install cookie-parser --save
// $ npm install multer --save

// 第一个 Express 框架实例
// 接下来我们使用 Express 框架来输出 "Hello World"。
// 以下实例中我们引入了 express 模块，并在客户端发起请求后，响应 "Hello World" 字符串。
//express_demo.js 文件
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);

});














