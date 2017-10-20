/**
 * Created by 懒牛牛 on 2017/10/20.
 */

/*
MongoDB remove()函数是用来移除集合中的数据。
MongoDB数据更新可以使用update()函数。在执行remove()函数前先执行find()命令来判断执行的条件是否正确，这是一个比较好的习惯。
 */

/*
语法
remove() 方法的基本语法格式如下所示：
db.collection.remove(
   <query>,
   <justOne>
)

参数说明：
query :（可选）删除的文档的条件。
justOne : （可选）如果设为 true 或 1，则只删除一个文档。
writeConcern :（可选）抛出异常的级别。

db.col.remove({})删除所有

 */
