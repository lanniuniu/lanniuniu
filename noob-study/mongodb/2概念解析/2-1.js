/**
 * Created by 懒牛牛 on 2017/10/18.
 */

/*
MongoDB中的一些概念
document 数据记录行/文档
field 数据字段/域
index 索引
primary key 主键,MongoDB自动将_id字段设置为主键

|id|user_name|email|age|
|1 |Mark     |1111 | 12|
|2 |zhenji   |22222| 11|

=>
{
    "_id":ObjectId(""),
    "age":12,
    "email":"1111",
    "user_name":"Mark"
}
{
"_id":ObjectId(""),
    "age":1,
    "email":"22222",
    "user_name":"zhenji"}
 */

/*
数据库
"show dbs" 命令可以显示所有数据的列表。
执行 "db" 命令可以显示当前数据库对象或集合。
运行"use"命令，可以连接到一个指定的数据库。

一些数据库名是保留的，可以直接访问这些有特殊作用的数据库。
admin： 从权限的角度来看，这是"root"数据库。要是将一个用户添加到这个数据库，这个用户自动继承所有数据库的权限。一些特定的服务器端命令也只能从这个数据库运行，比如列出所有的数据库或者关闭服务器。
local: 这个数据永远不会被复制，可以用来存储限于本地单台服务器的任意集合
config: 当Mongo用于分片设置时，config数据库在内部使用，用于保存分片的相关信息。

 */

/*
文档
文档
文档是一组键值(key-value)对(即BSON)。MongoDB 的文档不需要设置相同的字段，并且相同的字段不需要相同的数据类型，
这与关系型数据库有很大的区别，也是 MongoDB 非常突出的特点。
 */

/*
集合
集合就是 MongoDB 文档组，
集合存在于数据库中，集合没有固定的结构，这意味着你在对集合可以插入不同格式和类型的数据，但通常情况下我们插入集合的数据都会有一定的关联性。
{"site":"www.baidu.com"}
{"site":"www.google.com","name":"Google"}
{"site":"www.runoob.com","name":"菜鸟教程","num":5}
 */

/*
capped collections
Capped collections 就是固定大小的集合。
它有很高的性能以及队列过期的特性(过期按照插入的顺序).
Capped collections是高性能自动的维护对象的插入顺序。它非常适合类似记录日志的功能
和标准的collection不同，你必须要显式的创建一个capped collection， 指定一个collection的大小，单位是字节。
collection的数据存储空间值提前分配的。
要注意的是指定的存储大小包含了数据库的头信息。

在capped collection中，你能添加新的对象。
能进行更新，然而，对象不会增加存储空间。如果增加，更新就会失败 。
数据库不允许进行删除。使用drop()方法删除collection所有的行。
注意: 删除之后，你必须显式的重新创建这个collection。
在32bit机器中，capped collection最大存储为1e9( 1X109)个字节。
 */
