/**
 * Created by 懒牛牛 on 2017/10/25.
 */

let mongodbClient = require('mongodb').MongoClient;
let test = 'mongodb://localhost:27017/test';//test数据库

let updateData = function (db, callback) {
    let HOK = db.collection("HOK");//选择HOK集合
    let condition = {"name":"白起"};
    let newData = {"name":"白起","position":"辅助"};
    HOK.update(condition,newData,function (err, result) {
        if (err){
            console.log('err:'+err);
            return
        }
        callback(result);
    });
};

mongodbClient.connect(test,function (err, db) {
    console.log(`连接成功`);
    updateData(db,function (result) {
        console.log(result);
        db.close();
    })
});