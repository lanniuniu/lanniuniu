/**
 * Created by 懒牛牛 on 2017/10/20.
 */

/*
MongoDB 使用 update() 和 save() 方法来更新集合中的文档
*/

/*
update() 方法
update() 方法用于更新已存在的文档。语法格式如下：
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)
参数说明：
query : update的查询条件，类似sql update查询内where后面的。
update : update的对象和一些更新的操作符（如$,$inc...）等，也可以理解为sql update查询内set后面的
upsert : 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
multi : 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
writeConcern :可选，抛出异常的级别。
 */

/*
save方法

save() 方法通过传入的文档来替换已有文档。
db.collection.save(
   <document>,
   {
     writeConcern: <document>
   }
)
参数说明：
document : 文档数据。
writeConcern :可选，抛出异常的级别。
 */
