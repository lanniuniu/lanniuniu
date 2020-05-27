/*
1、定时器 setTimeout setInterval()
延时不精确  因为不确定事件循环的当前循环的占用情况

2、process.nextTick() 更为高效的立即异步执行

3、setImmediate() 和 process.nextTick() 很相似
但是process.nextTick() 属于idle观察者 setImmediate()属于check观察者
而在每一轮事件循环中  idle观察者 先于 I/O观察者 先于check观察者

 */
