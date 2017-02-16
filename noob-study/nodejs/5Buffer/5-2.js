/**
 * Created by 懒牛牛 on 2017/1/10.
 */
/*
 缓冲区合并
 Buffer.concat(list[, totalLength])
 list - 用于合并的 Buffer 对象数组列表。
 totalLength - 指定合并后Buffer对象的总长度。
 */
let buff1 = new Buffer('liupeng');
let buff2 = new Buffer('dashuaibi');
let buff3 = Buffer.concat([buff1,buff2]);
console.log(`合并后的buffer为 ${buff3.toString()}`);

/*
 缓存区比较
 buf.compare(otherBuffer);
 otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
 返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
 =1不包含
 =-1包含
 =0相同
 */
console.log(buff2.compare(buff3));
console.log('-------------');

/*
 拷贝缓冲区
 buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
 targetBuffer - 要拷贝的 Buffer 对象。
 targetStart - 数字, 可选, 默认: 0
 sourceStart - 数字, 可选, 默认: 0
 sourceEnd - 数字, 可选, 默认: buffer.length
 无返回值
 */
var buff4 = new Buffer(5);//创建buffer时要申明类型
buff3.copy(buff4);
console.log(buff4.toString());//liupe

/**
 * 缓冲区裁剪
 * buf.slice([start[, end]])
 * start - 数字, 可选, 默认: 0
 * end - 数字, 可选, 默认: buffer.length
 * 返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。
 */
let buff5 = buff3.slice(2,3);
console.log(buff5.toString());

/**
 * 缓冲区长度
 * buf.length;
 * 返回 Buffer 对象所占据的内存长度。
 */
console.log(buff5.length);

//buffer还有众多的方法，可以查询相关手册
//常见方法：http://www.runoob.com/nodejs/nodejs-buffer.html














