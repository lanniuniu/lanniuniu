/**
 * Created by 懒牛牛 on 2017/10/20.
 */

/*
文档的数据结构和JSON基本一样。
所有存储在集合中的数据都是BSON格式。
BSON是一种类json的一种二进制形式的存储格式,简称Binary JSON。

 */

/*
插入文档
MongoDB 使用 insert() 或 save() 方法向集合中插入文档，语法如下：
db.COLLECTION_NAME.insert(document)
document可以是一个变量

插入文档你也可以使用 db.col.save(document) 命令。如果不指定 _id 字段 save() 方法类似于 insert() 方法。
如果指定 _id 字段，则会更新该 _id 的数据。
 */



