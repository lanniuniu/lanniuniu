/**
 * Created by 懒牛牛 on 2017/1/6.
 */
/**
 * EventEmitter综合实例
 */
//监听器函数1
var listen1 = function () {
    console.log('监听器1')
};
//监听器函数2
var listen2 = function () {
    console.log('监听器2')
};
//实例化EventEmitter类为myEventEmitter对象
var events = require("events");
var myEventEmitter = new events.EventEmitter();
//为myEventEmitter对象绑定connection事件，处理函数为监听器1
myEventEmitter.addListener("connection",listen1);

// 绑定 connection 事件，处理函数为 listener2
myEventEmitter.on("connection",listen2);

//计算connect事件监听器个数
var eventCount = require('events').EventEmitter.listenerCount(myEventEmitter,'connection');
console.log(`当前个数为${eventCount}`);

//移除listen1绑定的监听函数listen1
myEventEmitter.removeListener('connection',listen1);
console.log('listen1不在受监听');

//触发连接事件connection
myEventEmitter.emit('connection');

//计算connect事件监听器个数
var eventCount = require('events').EventEmitter.listenerCount(myEventEmitter,'connection');
console.log(`当前个数为${eventCount}`);

console.log('程序结束');



