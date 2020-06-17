/*
1、buffer中文字在UTF-8下 占3个字节   如果buffer对象的读取有长度限制 那么中文字符会有可能被截断 就会出现乱码
2、setEncoding() 设置可读流的编码方法 治标不治本  只适合某些编码方式
 string_decoder()
3、正确的buffer拼接
使用一个数组来存储所有buffer片段 记录下总长度
调用buffer.concat()合并为buffer对象
 */
