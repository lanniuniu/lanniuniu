/**
 * Created by 懒牛牛 on 2017/2/5.
 */
/**
 * 我们要为路由提供请求的URL和其他需要的GET及POST参数，随后路由需要根据这些数据来执行相应的代码。
 * 因此，我们需要查看HTTP请求，从中提取出请求的URL以及GET/POST参数。
 */

//服务器
let http = require("http");
let url = require("url");

function start() {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        // route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
exports.start = start;






























