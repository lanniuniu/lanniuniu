/**
 * Created by 懒牛牛 on 2017/2/17.
 */
let publicFunc = require('../public');
/*
Date类型

调用Date构造函数而不传参的情况下，新创建的对象自动获得当前时间
Date.parse()将时间字符串转化为毫秒数，若将字符串直接传入构造函数会默认调用此函数
Date.UTC() 传入月份减的数字来表示日期
Date.now() 返回调用该方法时的毫秒数  可用于性能优化
 */
console.log(Date.now());//若不支持，可以使用+Date.now()来获取
publicFunc.cutOff();

/*
继承的方法
toLocaleString()
toString() 以上两个在不同浏览器会有不同的返回

valueOf() 返回日期毫秒数
 */

/*
日期格式化方法

toDateString()
toTimeString()
toLocaleDateString()
toLocaleTimeString()
toUTCString()
以上方法在不同浏览器会有不同返回
 */

/*
日期/时间组件方法
 */













