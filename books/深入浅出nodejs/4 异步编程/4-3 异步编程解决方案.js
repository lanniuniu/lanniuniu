/*
1、事件发布/订阅模式
常用于业务逻辑解耦
http请求是典型的事件发布/订阅模式
继承events模块、利用事件队列解决雪崩问题（once）、第三方的eventProxy
 */
// 订阅
emitter.on('event1', function (message) {
    console.log(message)
})
// 发布
emitter.emit('event1', 'i am a message')

/*
2、Promise/Deferred 模式
模型分类：Promise/A、Promise/B、Promise/D
实际运用时可以使用成熟的promise库

3、流程控制库
尾触发和Next
async
step
wind
 */
