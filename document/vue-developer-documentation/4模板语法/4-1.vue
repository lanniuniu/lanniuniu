<!--插值-->
<!--#文本-->
<!--数据绑定最常见的形式就是使用 “Mustache” 语法（双大括号）的文本插值：-->
<div id="app">
    <span>Message: {{ msg }}</span>

    <!--通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。-->
    <!--但请留心这会影响到该节点上所有的数据绑定：-->
    <span v-once>This will never change: {{ msg }}</span>

    <!--双大括号会将数据解释为纯文本，而非 HTML 。为了输出真正的 HTML ，你需要使用 v-html 指令：-->
    <div v-html="rawHtml"></div>

    <!--#属性-->
    <!--Mustache 不能在 HTML 属性中使用，应使用 v-bind 指令-->
    <div v-bind:id="dynamicId">属性值绑定</div>

    <!--使用 JavaScript 表达式-->
    <!--迄今为止，在我们的模板中，我们一直都只绑定简单的属性键值。-->
    <!--但实际上，对于所有的数据绑定， Vue.js 都提供了完全的 JavaScript 表达式支持。-->
    {{ number - 1 }}
    {{ ok ? 'YES' : 'NO' }}
    {{ message.split('').reverse().join('') }}
    <div v-bind:id="'list-' + id"></div>

    <!--指令-->
    <!--指令（Directives）是带有 v- 前缀的特殊属性。-->
    <!--指令属性的值预期是单一 JavaScript 表达式（除了 v-for，之后再讨论）。-->
    <!--指令的职责就是当其表达式的值改变时相应地将某些行为应用到 DOM 上。-->
    <p v-if="seen">Now you see me</p>

    <!--参数-->
    <!--一些指令能接受一个“参数”，在指令后以冒号指明。例如， v-bind 指令被用来响应地更新 HTML 属性：-->
    <a v-bind:href="url"></a>
    <!--在这里 href 是参数，告知 v-bind 指令将该元素的 href 属性与表达式 url 的值绑定。-->
    <!--另一个例子是 v-on 指令，它用于监听 DOM 事件：-->
    <a v-on:click="doSomething"></a>

    <!--修饰符-->
    <!--修饰符（Modifiers）是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
    例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：-->
    <form v-on:submit.prevent="onSubmit"></form>
</div>
<script src="../vue.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        data: {
            dynamicId: 'shuxing',
            msg: 'love qinqin',
            rawHtml:'<li>miss</li>',
            id: 1,
            number: 521,
            ok:true,
            message: 'love qinqin',
            seen:true,
        }
    });
</script>


