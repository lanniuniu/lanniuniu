/**
 * Created by 懒牛牛 on 2017/1/5.
 */
/**
 * 函数参数的解构赋值
 * @param x
 * @param y
 * @returns {*}
 */
function add([q, z]){
    return q + z;
}
add([1, 2]); // 3

//函数参数的解构赋值同样可以使用默认值
function move({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}
//如果解构赋值不严格等于undefined（或者像这样[]），默认值不会生效
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]
