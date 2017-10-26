/**
 * Created by 懒牛牛 on 2017/10/26.
 */

/*
MongoDB 引用有两种：
手动引用（Manual References）
DBRefs

考虑这样的一个场景，我们在不同的集合中 (address_home, address_office, address_mailing, 等)存储不同的地址（住址，办公室地址，邮件地址等）。
这样，我们在调用不同地址时，也需要指定集合，一个文档从多个集合引用文档，我们应该使用 DBRefs。
 */

/*
DBRefs

使用 DBRefs
DBRef的形式：
{ $ref : , $id : , $db :  }
三个字段表示的意义为：
$ref：集合名称
$id：引用的id
$db:数据库名称，可选参数
 */
