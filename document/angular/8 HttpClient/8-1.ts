/*
 HttpClient 带来的其它优点包括：可测试性、强类型的请求和响应对象、发起请求与接收响应时的拦截器支持，
 以及更好的、基于可观察（Observable）对象的 API 以及流式错误处理机制。
 */

/*
错误处理
import { catchError, retry } from 'rxjs/operators'; //错误处理和重新订阅
1.retry(times几次)
2.通过在 .subscribe() 中添加第二个回调函数，进行一些错误处理
 */

/*
发起请求
1.添加请求头
2.发起post delete put请求
 */

/*
高级用法
1.配置请求
httpOptions.headers =
  httpOptions.headers.set('Authorization', 'my-new-auth-token');
2.URL 参数
  { params: new HttpParams().set('name', term) }
3.请求的防抖
4.拦截请求和响应
5.监听进度事件
 创建一个把 reportProgress 选项设置为 true 的 HttpRequest 实例，以开启进度跟踪事件
 把这个请求对象传给 HttpClient.request() 方法，它返回一个 HttpEvents 的 Observable
 return this.http.request(req).pipe(
  map(event => this.getEventMessage(event, file)),
  tap(message => this.showProgress(message)),
  last(), // return last (completed) message to caller
  catchError(this.handleError(file))
);
 */

/*
安全：XSRF防护
配置自定义 cookie/header 名称
如果你的后端服务中对 XSRF 令牌的 cookie 或 头使用了不一样的名字，
就要使用 HttpClientXsrfModule.withConfig() 来覆盖掉默认值。


 */