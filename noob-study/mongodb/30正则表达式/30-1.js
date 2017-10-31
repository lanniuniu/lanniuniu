/**
 * Created by 懒牛牛 on 2017/10/31.
 */

/*
MongoDB 使用 $regex 操作符来设置匹配字符串的正则表达式。
MongoDB使用PCRE (Perl Compatible Regular Expression) 作为正则表达式语言。
不同于全文检索，我们使用正则表达式不需要做任何配置。
 */

/*
使用正则表达式
以下命令使用正则表达式查找包含 runoob 字符串的文章：
>db.posts.find({post_text:{$regex:"runoob"}})
以上查询也可以写为：
>db.posts.find({post_text:/runoob/})
 */

/*
不区分大小写的正则表达式
如果检索需要不区分大小写，我们可以设置 $options 为 $i。
以下命令将查找不区分大小写的字符串 runoob：
>db.posts.find({post_text:{$regex:"runoob",$options:"$i"}})
 */

/*
优化正则表达式查询
如果你的文档中字段设置了索引，那么使用索引相比于正则表达式匹配查找所有的数据查询速度更快。
如果正则表达式是前缀表达式，所有匹配的数据将以指定的前缀字符串为开始。例如： 如果正则表达式为 ^tut ，查询语句将查找以 tut 为开头的字符串。
这里面使用正则表达式有两点需要注意：
正则表达式中使用变量。一定要使用eval将组合的字符串进行转换，不能直接将字符串拼接后传入给表达式。否则没有报错信息，只是结果为空！实例如下：
var name=eval("/" + 变量值key +"/i");
以下是模糊查询包含title关键词, 且不区分大小写:
title:eval("/"+title+"/i")    // 等同于 title:{$regex:title,$Option:"$i"}
 */
