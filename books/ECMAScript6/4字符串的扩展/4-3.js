/**
 * Created by 懒牛牛 on 2017/1/6.
 */
/**
 * repeat()
 * repeat方法返回一个新字符串，表示将原字符串重复n次
 * 参数如果是小数，会被“向下取整”。
 * 但是，如果参数是0到-1之间的小数，则等同于0，这是因为会先进行取整运算。
 * 0到-1之间的小数，取整以后等于-0，repeat视同为0。
 * 参数NAN会视同为0
 * 如果参数为字符串，会先转为数字
 */
console.log('x'.repeat(3.9));
console.log('x'.repeat(-0.1));//""
console.log('x'.repeat('4'));

