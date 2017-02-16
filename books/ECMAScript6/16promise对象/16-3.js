/**
 * Created by 懒牛牛 on 2017/1/17.
 */
/**
 * Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
 * 立即执行。
 */
var p = Promise.reject('出错了');
p.then(null,function (s) {
    console.log(s);
});
//Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。
const thenable = {
    then(resolve,reject){
        "use strict";
        reject('又错了');
    }
};
Promise.reject(thenable)
    .catch(
        e=>{
            "use strict";
            console.log(e===thenable)
        }
    );





















