// 布尔值
var isLikeFootball = false;
// 数值
var number1 = 520;
var number2 = 0x1010; //二进制数值 还支持es6所支持的0x 0b 0o
// 字符串
var string1 = '1';
// 数组
// 方法一：元素类型+[]
var array1 = ['1', '2', 'string'];
// 方法二：使用数组泛型 Array<元素类型>
var array2 = [1, 2, 3];
// 元组
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
var tuple1 = [1, '2'];
// 当访问超过定义的值时，会使用联合类型替代。即所定义的number或string
tuple1[3] = '不能是所定义之外的类型';
console.log(tuple1[3]); // '不能是所定义之外的类型'
// 枚举
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
var enum1 = color.red;
console.log(enum1); // 0
// 默认情况下，从0开始为元素编号 也可以手动的指定成员的数值。
console.log(color[2]); // blue
var ball;
(function (ball) {
    ball[ball["football"] = 2] = "football";
    ball[ball["basketball"] = 3] = "basketball";
})(ball || (ball = {}));
var enum2 = ball[2];
console.log(enum2); // football
// any 任何类型
var any1 = 4;
// void any的相反 没有任何类型 只能为undefined null
var void1 = null;
// null 和 undefined
// 默认情况下null和undefined是所有类型的子类型。可以把 null和undefined赋值给number类型的变量
var string2 = null;
console.log(string2);
// BUT,当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
// never 类型表示的是那些永不存在的值的类型。当指定为函数时，绝对执行不完所有code
// 类型断言
// 形式一：尖括号语法
var any2 = '2313';
var any2Length = any2.length;
// 形式二: as
var any2Length2 = any2.length;
console.log(any2Length + any2Length2);
