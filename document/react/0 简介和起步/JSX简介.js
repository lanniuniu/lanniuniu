/**
 * Created by 懒牛牛 on 2018/8/4.
 */

/*
 JSX， 一种 JavaScript 的语法扩展。
 推荐在 React 中使用 JSX 来描述用户界面。
 JSX 乍看起来可能比较像是模版语言，但事实上它完全是在 JavaScript 内部实现的。
 */

/*
JSX使用表达式
表达式要写在大括号里面{}
JSX的外面加小括号()
 */

/*
JSX 本身其实也是一种表达式
可以在for if等语句中使用，也可以作为参数、返回值
 */

/*
JSX属性
使用引号来定义以字符串为值的属性,也可以使用分号
两者不能嵌套使用
 */
const elementA = (<div tabIndex="0">12</div>);
const elementB = (<div tabIndex={0}>12</div>);

/*
JSX潜逃
如果 JSX 标签是闭合式的，那么你需要在结尾处用 />, 就好像 XML/HTML 一样：
JSX标签可以嵌套
 */

/*
JSX防注入攻击
可以放请使用用户输入
 */

/*
JSX 代表 Objects
Babel 转译器会把 JSX 转换成一个名为 React.createElement() 的方法调用。
 */

