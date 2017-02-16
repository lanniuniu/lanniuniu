/**
 * Created by 懒牛牛 on 2017/1/13.
 */
// Proxy.revocable方法返回一个可取消的 Proxy 实例。
//Proxy.revocable的一个使用场景是，目标对象不允许直接访问，必须通过代理访问，一旦访问结束，就收回代理权，不允许再次访问。
let {proxy,revoke} = Proxy.revocable({},{});
proxy.foo = 111;
console.log(proxy.foo);
revoke();
// console.log(proxy.foo);//报错

//在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。





















