/**
 * Created by 懒牛牛 on 2017/2/17.
 */
let publicFunc = require('../public');

/*
RegExp类型

字面量形式定义正则表达式
let expression = / pattern/flags
标志：g i m三个匹配模式
g：全局模式 应用所有的字符串
i: 不区分大小写
m：多行模式

模式中所有元字符需要转义 (){}[]\^$|?*+.

构造函数定义正则，由于传入的字符串，故需要双重转义，等于字面量形式的一次转义
 */

/*
RegExp实例属性
global：boolean 是否设置g
ignoreCase：boolean 是否设置i
lastIndex:number 表示开始搜索下一个匹配项的字符位置，从0算起
multiline：boolean 是否设置m
source：正则的字符串表示，但是字面量形式返回，只是加上了""
 */

/*
RegExp实例方法
exec() 返回数组，包括索引（index）和匹配的内容(input)还有匹配结果
 */
let text1 = "mom and dad and baby";
let pattern1 = /mom( and dad( and baby)?)?/gi;
let res1 = pattern1.exec(text1);
console.log(res1);
publicFunc.cutOff();

/*
test() 接受一个字符串参数 返回boolean 表示是否匹配
toString() toLocaleString() 返回正则的字面量形式
valueOf() 返回本身
 */

/*
RegExp构造函数属性
长属性名  短属性名
input    $_
lastMatch $&
lastParen $+
leftContext $`
rightContext $'
multiline $*
若不支持短属性名，用["$_"]这样来解决

$RegExp.$1-$9,存储捕获组
 */
let text2 = 'love qinqin!';
let pattern2 =/(.)in/g;
if (pattern2.test(text2)){
    console.log(RegExp['$_']);
    console.log(RegExp['$&']);
    console.log(RegExp['$1']);
}

/*
模式的局限性
 */
















