/*
buffer对象可以和字符串互相转换

1、字符串转buffer
new Buffer(str, [encoding])

2、buffer转字符串
buf.toString([encoding], [start], [end])

3、buffer对象也可以不断写入不同编码类型的字符串
buf.write(str, [offset], [length], [encoding])

4、验证buffer是否支持某一个编码类型
Buffer.isEncoding(encoding)
对于不支持的编码类型  可以使用npm上的 iconv iconv-lite
 */
