/**
 * Created by 懒牛牛 on 2017/1/5.
 */

/**
 * 默认值
 * 解构赋值允许指定默认值。
 * 如果解构赋值不严格等于undefined（或者像这样[]），默认值不会生效
 */
var [x = 1] = [undefined];
x // 1

var [z = 1] = [];
z//1

var [y = 1] = [null];
y // null


