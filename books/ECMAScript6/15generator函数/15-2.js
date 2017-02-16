/**
 * Created by 懒牛牛 on 2017/1/16.
 */
/**
 * Generator函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历Generator函数。
 */
function *gen() {
    yield 1;
    yield 2;
    return 'end';
    yield 3;
}
var g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
// console.log(g.return('foo'));//以上两种方式来终止generator函数
console.log(g.next());

//应用
//（1）异步操作的同步化表达
//（2）控制流管理
//（3）部署Iterator接口
//（4）作为数据结构
























