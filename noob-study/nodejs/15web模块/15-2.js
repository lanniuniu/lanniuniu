/**
 * Created by 懒牛牛 on 2017/2/8.
 */
// 使用 Node 创建 Web 客户端
// Node 创建 Web 客户端需要引入 http 模块，创建 client.js 文件
// 用于请求的选项

var http = require('http');
//用于请求的数据
var options = {
    host: 'localhost',
    port: '8080',
    path: '/index.htm'
};

// 处理响应的回调函数
var callback = function(response){
    // 不断更新数据
    var body = '';
    response.on('data', function(data) {
        body += data;
    });
    response.on('error', function (err) {
        console.log(err);
    });
    response.on('end', function() {
        // 数据接收完成
        console.log(body);
    });
};
// 向服务端发送请求
var req = http.request(options, callback);
req.end();























