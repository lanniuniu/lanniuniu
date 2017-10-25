/**
 * Created by 懒牛牛 on 2017/10/25.
 */

/*
数据库操作( CURD )
与 MySQL 不同的是 MongoDB 会自动创建数据库和集合，所以使用前我们不需要手动去创建。
 */
let mongoClient = require('mongodb').MongoClient;//连接数据库
let db_test = 'mongodb://localhost:27017/test';//连接test数据库

let insertData = function (db,callback) {
    //连接到集合info
    let info = db.collection('HOK');
    //插入数据
    let data = [//域的单词名写错了
        {
            "name":"诸葛亮",
            "posstion":"中单法师",
        },
        {
            "name":"扁鹊",
            "posstion":"中单法师",
        },
        {
            "name":"狄仁杰",
            "posstion":"边路adc",
        },
        {
            "name":"百里守约",
            "posstion":"边路adc",
        },
        {
            "name":"哪吒",
            "posstion":"边路战士",
        },
        {
            "name":"雅典娜",
            "posstion":"边路战士",
        },
        {
            "name":"刘备",
            "posstion":"打野战士",
        },
        {
            "name":"铠",
            "posstion":"打野战士",
        },
        {
            "name":"牛魔",
            "posstion":"辅助",
        },
        {
            "name":"白起",
            "posstion":"辅助",
        },
        ];

    info.insert(data, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
};

mongoClient.connect(db_test, function(err, db) {
    console.log("连接成功！");
    insertData(db, function(result) {
        console.log(result);
        db.close();
    });
});




