/**
 * Created by 懒牛牛 on 2017/3/19.
 */

/**
 * 选择器函数
 * @param selector
 * @param context
 * @returns {*}
 */
function $$(selector, context) {
    context = context || document;
    let elements = context.querySelectorAll(selector);
    // console.log(context);
    return Array.prototype.slice.call(elements);
}





