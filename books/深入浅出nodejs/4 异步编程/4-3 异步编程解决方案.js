/*
1、事件发布/订阅模式
常用于业务逻辑解耦
http请求是典型的事件发布/订阅模式
 */
// 订阅
emitter.on('event1', function (message) {
    console.log(message)
})
// 发布
emitter.emit('event1', 'i am a message')
