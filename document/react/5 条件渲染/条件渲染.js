/**
 * Created by 懒牛牛 on 2018/8/8.
 */

/*
封装第三个组件，传入props来判断返回某个组件，从而进行条件渲染
 */

/*
1.声明变量并使用 if 语句
2.与运算符 &&
所以能这样做，是因为在 JavaScript 中，true && expression 总是返回 expression，
而 false && expression 总是返回 false。
3.三目运算符
条件渲染的另一种方法是使用 JavaScript 的条件运算符 condition ? true : false。
 */

/*
阻止组件渲染
render() 返回null的时候，会阻止组件渲染，但组件生命周期的方法不会被影响
 */