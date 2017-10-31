/**
 * Created by 懒牛牛 on 2017/10/31.
 */

/*
全文检索对每一个词建立一个索引，指明该词在文章中出现的次数和位置，当用户查询时，检索程序就根据事先建立的索引进行查找，
并将查找的结果反馈给用户的检索方式。
这个过程类似于通过字典中的检索字表查字的过程。(暂不支持中文)
 */

/*
启用全文检索
MongoDB 在 2.6 版本以后是默认开启全文检索的，如果你使用之前的版本，你需要使用以下代码来启用全文检索:
>db.adminCommand({setParameter:true,textSearchEnabled:true})
或者使用命令：
mongod --setParameter textSearchEnabled=true
 */

/*
创建全文索引
{
   "post_text": "enjoy the mongodb articles on Runoob",
   "tags": [
      "mongodb",
      "runoob"
   ]
}

>db.posts.ensureIndex({post_text:"text"})
 */

/*
使用全文索引
使用全文索引
现在我们已经对 post_text 建立了全文索引，我们可以搜索文章中的关键词 runoob：
>db.posts.find({$text:{$search:"runoob"}})
 */

/*
删除全文索引
删除已存在的全文索引，可以使用 find 命令查找索引名：
>db.posts.getIndexes()
通过以上命令获取索引名，本例的索引名为post_text_text，执行以下命令来删除索引：
>db.posts.dropIndex("post_text_text")
 */


