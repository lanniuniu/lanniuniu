/*
本质上来讲，JSX 只是为 React.createElement(component, props, ...children) 方法提供的语法糖。
 */

/*
指定 React 元素类型
1.大写开头表示react组件
2.React 必须声明
 */

/*
点表示法
使用对象的点表示法来引入或者到处多个组件
 */
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
/*
首字母大写
当元素类型以小写字母开头时，它表示一个内置的组件（浏览器的标签），如 <div> 或 <span>，并将字符串 ‘div’ 或 ‘span’ 传 递给 React.createElement。
以大写字母开头的类型，如 <Foo /> 编译为 React.createElement(Foo)，并它正对应于你在 JavaScript 文件中定义或导入的组件。
 */

/*
在运行时选择类型
不能使用表达式来作为 React 元素的标签。
如果你的确想通过表达式来确定 React 元素的类型，请先将其赋值给大写开头的变量。
 */

/*
属性
1.使用JavaScript表达式
传递任何 {} 包裹的 JavaScript 表达式作为一个属性值
也可以使用{} 表示一段JSX代码
2.字符串常量
可以使用字符串常量作为属性值传递 这时候 该值会被解析为HTML非转义字符串
以下代码一个意思
<MyComponent message="&lt;3" />
<MyComponent message={'<3'} />
3.默认为true
4.扩展属性
如果已经有了props对象，并且向在JSX中使用，使用扩展运算符

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}
 */

/*
子代
1.字符串常量
props.children 就是该字符串常量
2.JSX
通过子代嵌入更多的 JSX 元素，这对于嵌套显示组件非常有用
3.JavaScript表达式
以将任何 {} 包裹的 JavaScript 表达式作为子代传递。
4.布尔值、Null 和 Undefined 被忽略
 */
