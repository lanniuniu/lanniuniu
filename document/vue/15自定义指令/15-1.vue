<head>
    <meta charset="UTF-8">
</head>
<script src="../vue.js"></script>
<body>
<div id="app1">
    <input type="text" v-focus>
</div>
<div id="app2">
    <div v-demo="{color: 'white', text: 'hello!' }"></div>
</div>
<script>
//    简介
//    除了默认设置的核心指令 (v-model 和 v-show)，Vue 也允许注册自定义指令。
//    注册全局自定义指令
    Vue.directive('focus',{
        // 当绑定元素插入到 DOM 中。
        inserted: function (el) {
            // 聚焦元素
            el.focus()
        }
    });
    let app1 = new Vue({
        el: '#app1',
    });

//也可以注册局部指令，组件中接受一个 directives 的选项：
//directives: {
//    focus: {
//        // 指令的定义---
//        inserted: function (el) {}
//    }
//}
//    然后就可以使用啦

//钩子函数
//    bind 绑定时发生 只调用一次
//    unbind 解绑时发生 只调用一次
//    inserted 被绑定元素插入父节点时调用
//    update 所在组件的 VNode 更新时调用，但是可能发生在其孩子的 VNode 更新之前。
//    componentUpdated 所在组件的 VNode 及其孩子的 VNode 全部更新时调用。

//    钩子函数的参数
//el：指令所绑定的元素，可以用来直接操作 DOM 。
//binding：一个对象，包含以下属性：
//name：指令名，不包括 v- 前缀。
//value：指令的绑定值，例如：v-my-directive="1 + 1", value 的值是 2。
//oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
//expression：绑定值的字符串形式。例如 v-my-directive="1 + 1" ，expression 的值是 "1 + 1"。
//arg：传给指令的参数。例如 v-my-directive:foo，arg 的值是 "foo"。
//modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。
//vnode：Vue 编译生成的虚拟节点，查阅 VNode API 了解更多详情。
//oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

//    函数简写
//大多数情况下，我们可能想在 bind 和 update 钩子上做重复动作，并且不想关心其它的钩子函数。
//    Vue.directive('color-swatch', function (el, binding) {
//        el.style.backgroundColor = binding.value
//    })

//    对象字面量
//如果指令需要多个值，可以传入一个 JavaScript 对象字面量。
//记住，指令函数能够接受所有合法类型的 JavaScript 表达式。
Vue.directive('demo', function (el, binding) {
    console.log(binding.value.color) // => "white"
    console.log(binding.value.text)  // => "hello!"
});
    let app2 = new Vue({
        el: '#app2',
    });
</script>
</body>