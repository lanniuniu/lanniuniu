/**
 * Created by 懒牛牛 on 2017/1/18.
 */
/**
 * 1.JavaScript 语言对异步编程的实现，就是回调函数。
     * 所谓回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数。
 * 2.Promise 避免回调函数的反复嵌套 采用 Promise，进行链式调用 然后用then调用，但代码冗余，语意不清
 * 3.generator函数  Generator函数可以暂停执行和恢复执行，这是它能封装异步任务的根本原因。
     * 并且，函数体内外的数据交换（next（）函数可以实现对generator函数的内外交换）和错误处理机制（函数内部署错误处理代码捕获外部的错误）。
     * Generator 函数的流程管理 Thunk函数现在可以用于Generator函数的自动流程管理。
 * 4.co模块 用于generator的自动执行
 * 5.async函数
    * async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已
    * 语法（1）async函数返回一个Promise对象。
 * （2）只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。
 * （3）正常情况下，await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象
 * （4）如果await后面的异步操作出错，那么等同于async函数返回的Promise对象被reject。
 *
 * for await...of
 * 前面介绍过，for...of循环用于遍历同步的 Iterator 接口。新引入的for await...of循环，则是用于遍历异步的 Iterator 接口。
 * 异步Generator函数  返回一个异步遍历器对象。
 */





















