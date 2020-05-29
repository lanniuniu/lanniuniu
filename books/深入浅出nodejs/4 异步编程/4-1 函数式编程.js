/*
1、高阶函数
把函数当成输入或输出的函数
给JS带来极大的灵活性

2、偏函数用法
创建一个调用一个 部分参数或变量已经预置的 函数
 */

/**
 * 偏函数
 * @param type
 * @returns {function(*=): boolean}
 */
const isType = type => {
    return function (obj) {
        return toString.call(obj) === `[object${type}]`
    }
}
