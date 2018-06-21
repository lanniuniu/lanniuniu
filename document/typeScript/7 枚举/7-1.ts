/*
数字枚举
默认从0开始
第一个开始设置从几开始
可以每个都枚举
可以函数计算从几开始
 */
enum state1 {
    a = 1,
    b,
    c,
}

//字符串枚举
enum state2 {
    a = 'aa',
    b = 'bb',
}

//异构枚举 上面两者混合

//反向映射
enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"

//const枚举 无法改变
const enum Enum1 {
    A = 1,
    B = A * 2
}

//外部枚举 外部枚举用来描述已经存在的枚举类型的形状。


