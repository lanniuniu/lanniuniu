/**
 * Created by 懒牛牛 on 2017/10/25.
 */

let mongodbClient = require('mongodb').MongoClient;
let test = 'mongodb://localhost:27017/test';

let deleteData = function (db, callback) {
    let info = db.collection("info");
    let condition = {"name":"lanniuniu"};
    info.remove(condition,function (err, result) {
        if (err){
            console.log('err:'+err);
            return;
        }
        callback(result);
    })
};

mongodbClient.connect(test,function (err, db) {
    console.log(`连接成功`);
    deleteData(db,function (result) {
        console.log(result);
        db.close();
    })
});
