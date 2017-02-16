/**
 * Created by 懒牛牛 on 2017/1/12.
 */
/**
 * WeakSet
 * WeakSet结构与Set类似，也是不重复的值的集合
 * 区别：
 * 首先，WeakSet的成员只能是对象，而不能是其他类型的值。
 * WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，
 * 也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，
 * 不考虑该对象还存在于WeakSet之中。这个特点意味着，无法引用WeakSet的成员，因此WeakSet是不可遍历的。
 */

//WeakSet.prototype.add(value)：向WeakSet实例添加一个新成员。
// WeakSet.prototype.delete(value)：清除WeakSet实例的指定成员。
// WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在WeakSet实例之中。
var ws = new WeakSet();
var obj = {};
// ws.add(window);
ws.add(obj);
// console.log(ws.has(window));
console.log(ws.has(obj));
ws.delete(obj);
console.log(ws.has(obj));

// WeakSet没有size属性，没有办法遍历它的成员。
//WeakSet的一个用处，是储存DOM节点，而不用担心这些节点从文档移除时，会引发内存泄漏。
//WeakSet对实例的引用，不会被计入内存回收机制，所以删除实例的时候，不用考虑WeakSet，也不会出现内存泄漏。



















