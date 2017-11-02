/**
 * Created by 懒牛牛 on 2017/11/1.
 */

let koa = require("koa");
let app = new koa();
app.use(function *() {
    this.body = '臭呆呆';
});
app.listen(3000);

