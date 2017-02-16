/**
 * Created by 懒牛牛 on 2017/2/5.
 */
//入口文件
let server = require("./9-1.js");
let router = require("./router.js");

server.start(router.route);