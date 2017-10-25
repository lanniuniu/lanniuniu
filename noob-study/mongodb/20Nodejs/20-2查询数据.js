/**
 * Created by 懒牛牛 on 2017/10/25.
 */

let mongoClient = require('mongodb').MongoClient;
let HOK = 'mongodb://localhost:27017/test';

let selectData = function (db,callback) {
    let collection = db.collection('HOK');
    let condition = {"posstion":"中单法师"};//域的单词名写错了
    collection.find(condition).toArray(function (err,result) {
        if(err){
            console.log('err:'+err);
            return;
        }
        callback(result);
    });
};

mongoClient.connect(HOK,function (err, db) {
    console.log('连接成功');
    selectData(db,function (result) {
        console.log(result);
        db.close();
    });
});