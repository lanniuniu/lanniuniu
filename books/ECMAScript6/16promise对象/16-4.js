/**
 * Created by 懒牛牛 on 2017/1/17.
 */
/**
 * 应用
 */
//1.加载图片
const preloadImage = function (path) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload  = resolve;
        image.onerror = reject;
        image.src = path;
    });
};

//2.Generator函数与Promise的结合
function getFoo () {
    return new Promise(function (resolve, reject){
        resolve('foo');
    });
}

var g = function* () {
    try {
        var foo = yield getFoo();
        console.log(foo);
    } catch (e) {
        console.log(e);
    }
};

function run (generator) {
    var it = generator();

    function go(result) {
        if (result.done) return result.value;

        return result.value.then(function (value) {
            return go(it.next(value));
        }, function (error) {
            return go(it.throw(error));
        });
    }

    go(it.next());
}

run(g);

















