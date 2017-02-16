/**
 * Created by 懒牛牛 on 2017/1/6.
 */
/**
 * 模板字符串
 * 模板字符串（template string）是增强版的字符串，用反引号（`）标识。
 * 它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量,用${}来引入变量。
 * 如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。
 * 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。
 */
// 普通字符串
console.log(`In JavaScript '\n' is a line-feed.`);

// 多行字符串
console.log(`string text line 1
string text line 2`);

// 字符串中嵌入变量
var name = "Bob", time = "today";
console.log(`hello ${name},how are you ${time}`);

//可以使用trim()方法来去掉换行
console.log(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`.trim());

//大括号内部可以放入任意的JavaScript表达式，可以进行运算，以及引用对象属性。
var x = 1;
var y = 2;

console.log(`${x} + ${y} = ${x + y}`);
console.log(`${x} + ${y * 2} = ${x + y * 2}`);

var obj = {x: 1, y: 2};
console.log(`${obj.x + obj.y}`);

//模板字符串之中还能调用函数。
function hello() {
    return 'hello world';
}
console.log(`lanniuniu ${hello()}`);

//由于模板字符串的大括号内部，就是执行JavaScript代码，因此如果大括号内部是一个字符串，将会原样输出。
console.log(`Hello ${'World'}`);

//模板字符串可以嵌套

var template = `
<ul>
  <% for(var i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;
console.log(template);
