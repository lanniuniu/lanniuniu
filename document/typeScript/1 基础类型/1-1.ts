// 布尔值
let isLikeFootball: boolean = false;

// 数值
let number1: number = 520;
let number2: number = 0x1010;//二进制数值 还支持es6所支持的0x 0b 0o

// 字符串
let string1: string = '1';

// 数组
// 方法一：元素类型+[]
let array1: string[] = ['1','2','string'];
// 方法二：使用数组泛型 Array<元素类型>
let array2: Array<number> = [1,2,3];

// 元组
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
let tuple1: [number, string] = [1, '2'];
// 当访问超过定义的值时，会使用联合类型替代。即所定义的number或string
tuple1[3] = '不能是所定义之外的类型';
console.log(tuple1[3]); // '不能是所定义之外的类型'

// 枚举
enum color {red, green, blue}
let enum1 = color.red;
console.log(enum1); // 0
// 默认情况下，从0开始为元素编号 也可以手动的指定成员的数值。
console.log(color[2]); // blue
enum ball {football=2, basketball}
let enum2: string = ball[2];
console.log(enum2); // football

// any 任何类型
let any1: any = 4;

// void any的相反 没有任何类型 只能为undefined null
let void1: void = null;

// null 和 undefined
// 默认情况下null和undefined是所有类型的子类型。可以把 null和undefined赋值给number类型的变量
let string2: string = null;
console.log(string2);
// BUT,当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。

// never 类型表示的是那些永不存在的值的类型。当指定为函数时，绝对执行不完所有code

// 类型断言
// 形式一：尖括号语法
let any2: any = '2313';
let any2Length: number = (<string>any2).length;
// 形式二: as
let any2Length2: number = (any2 as string).length;
console.log(any2Length + any2Length2);




