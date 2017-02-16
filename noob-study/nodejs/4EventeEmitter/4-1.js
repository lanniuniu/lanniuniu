/**
 * Created by 懒牛牛 on 2017/1/6.
 */
/**
 * EventEmitter 类
 * events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。
 * 你可以通过require("events");来访问该模块。
 */

//其原理是 events 对象注册了事件 myEvent 的一个监听器，
// 然后我们通过 setTimeout 在 1000 毫秒以后向 events 对象发送事件myEvent ，此时会调用myEvent的监听器
var eventEmitters = require('events').EventEmitter;
var events = new eventEmitters();
events.on('myEvent',function () {
    console.log('myEvent事件触发')
});
setTimeout(function () {
    events.emit('myEvent');
},1000);

//EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。
// 对于每个事件，EventEmitter 支持 若干个事件监听器。
// 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
events.on('myEvent',function () {
    console.log('myEvent事件触发2');
});//events为myevent注册了两个监听器，他们一次执行

//EventEmitter 提供了多个属性，如on，emit等等