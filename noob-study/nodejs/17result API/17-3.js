/**
 * Created by 懒牛牛 on 2017/2/9.
 */
// 显示用户详情 http get

var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:id', function (req, res) {//访问http://127.0.0.1:8081/1就可以查询到id为1的用户数据
    // 首先我们读取已存在的用户
    fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var user = data["user" + req.params.id];
        console.log( user );
        res.end( JSON.stringify(user));
    });
});

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});











