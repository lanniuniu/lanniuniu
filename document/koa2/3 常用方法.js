/**
 * Created by 懒牛牛 on 2017/11/1.
 */

/*
app.listen()
用于启动一个服务的快捷方法
app.listen 是 http.createServer 的简单包装
 */

/*
app.callback()
返回一个可被 http.createServer() 接受的程序实例，也可以将这个返回函数挂载在一个 Connect/Express 应用中。
 */

/*
app.use()
将给定的 function 当做中间件加载到应用中
 */

/*
app.keys=
设置一个签名 Cookie 的密钥。这些参数会被传递给 KeyGrip 如果你想自己生成一个实例，也可以这样：

app.keys = ['im a newer secret', 'i like turtle'];
app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
注意，签名密钥只在配置项 signed 参数为真时才会生效：

this.cookies.set('name', 'tobi', { signed: true });
 */
