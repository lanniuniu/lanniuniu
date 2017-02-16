/**
 * Created by 懒牛牛 on 2017/2/15.
 */

// if语句
// if else 、if else if

// 迭代语句
// 迭代语句又叫循环语句，声明一组要反复执行的命令，直到满足某些条件为止。
// 循环通常用于迭代数组的值（因此而得名），或者执行重复的算术任务。

// do-while 语句
// do-while 语句是后测试循环，即退出条件在执行循环内部的代码之后计算。
// 这意味着在计算表达式之前，至少会执行循环主体一次。

// while 语句
// while 语句是前测试循环。这意味着退出条件是在执行循环内部的代码之前计算的。
// 因此，循环主体可能根本不被执行。

// for 语句
// for 语句是前测试循环，而且在进入循环之前，能够初始化变量，并定义循环后要执行的代码

// for-in 语句
// for 语句是严格的迭代语句，用于枚举对象的属性。

// 标签语句
// 有标签的语句
var iNum = 0;

outermost:
    for (var i=0; i<10; i++) {
        for (var j=0; j<10; j++) {
            if (i == 5 && j == 5) {
                break outermost;
            }
            iNum++;
        }
    }

console.log(iNum);//55

var iNum = 0;

outermost:
    for (var i=0; i<10; i++) {
        for (var j=0; j<10; j++) {
            if (i == 5 && j == 5) {
                continue outermost;
            }
            iNum++;
        }
    }

console.log(iNum);//95


// break 和 continue 语句的不同之处
// break 语句可以立即退出循环，阻止再次反复执行任何代码。
// 而 continue 语句只是退出当前循环，根据控制表达式还允许继续进行下一次循环。

// 与有标签的语句一起使用
// break 语句和 continue 语句都可以与有标签的语句联合使用，返回代码中的特定位置。




