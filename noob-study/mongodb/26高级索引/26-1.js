/**
 * Created by 懒牛牛 on 2017/10/30.
 */

/*
索引数组字段
三个值建立单独的索引。
使用以下命令创建数组索引：
>db.users.ensureIndex({"tags":1})
创建索引后，我们可以这样检索集合的 tags 字段：
>db.users.find({tags:"cricket"})
 */

/*
索引子文档字段
>db.users.ensureIndex({"address.city":1,"address.state":1,"address.pincode":1})


>db.users.find({"address.city":"Los Angeles"})
 */


//索引限制

/*
额外开销
每个索引占据一定的存储空间，在进行插入，更新和删除操作时也需要对索引进行操作。所以，如果你很少对集合进行读取操作，建议不使用索引。
 */

/*
内存(RAM)使用
由于索引是存储在内存(RAM)中,你应该确保该索引的大小不超过内存的限制。
如果索引的大小大于内存的限制，MongoDB会删除一些索引，这将导致性能下降。
 */

/*
查询限制
索引不能被以下的查询使用：
正则表达式及非操作符，如 $nin, $not, 等。
算术运算符，如 $mod, 等。
$where 子句
所以，检测你的语句是否使用索引是一个好的习惯，可以用explain来查看。
 */

/*
索引键限制
从2.6版本开始，如果现有的索引字段的值超过索引键的限制，MongoDB中不会创建索引。
 */

/*
插入文档超过索引键限制
如果文档的索引字段值超过了索引键的限制，MongoDB不会将任何文档转换成索引的集合。
 */

/*
最大范围
集合中索引不能超过64个
索引名的长度不能超过128个字符
一个复合索引最多可以有31个字段
 */

