<!--监听事件-->
<!--可以用 v-on 指令监听 DOM 事件来触发一些 JavaScript 代码。-->

<!--方法事件处理器-->
<!--许多事件处理的逻辑都很复杂，所以直接把 JavaScript 代码写在 v-on 指令中是不可行的。-->
<!--因此 v-on 可以接收一个定义的方法来调用。-->

<!--内联处理器方法-->
<!--除了直接绑定到一个方法，也可以用内联 JavaScript 语句，即方法传参-->

<!--有时也需要在内联语句处理器中访问原生 DOM 事件。可以用特殊变量 $event 把它传入方法：-->
<div id="app">
    <button v-on:click="warn('Form cannot be submitted yet.', $event)">Submit</button>
</div>

<!--事件修饰符-->
<!--在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在 methods 中轻松实现这点，但更好的方式是：methods 只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。-->
<!--为了解决这个问题， Vue.js 为 v-on 提供了 事件修饰符。通过由点(.)表示的指令后缀来调用修饰符。-->
<!--.stop-->
<!--.prevent-->
<!--.capture-->
<!--.self-->
<!--.once-->
<div id="app2">
    <!-- 阻止单击事件冒泡 -->
    <a v-on:click.stop="doThis" href="https://baidu.com">love qinqin</a>
    <!-- 提交事件不再重载页面 -->
    <form v-on:submit.prevent="onSubmit">
        <input type="text">
        <input type="submit" value="submit">
    </form>
    <!-- 修饰符可以串联  -->
    <a v-on:click.stop.prevent="doThat" href="https://baidu.com">love qinqin</a>
    <!-- 只有修饰符 -->
    <form v-on:submit.prevent></form>
    <!-- 添加事件侦听器时使用事件捕获模式 -->
    <div v-on:click.capture="doThis">love qinqin</div>
    <!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
    <div v-on:click.self="doThat">love qinqin</div>
    <!-- 点击事件将只会触发一次 -->
    <a v-on:click.once="doThis">love qinqin</a>
</div>

<!--按键修饰符-->
<!--在监听键盘事件时，我们经常需要监测常见的键值。 Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：-->
<!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
<!--<input v-on:keyup.13="submit">-->
<!--记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：-->
<!--全部的按键别名：-->
    <!--.enter-->
    <!--.tab-->
    <!--.delete (捕获 “删除” 和 “退格” 键)-->
    <!--.esc-->
    <!--.space-->
    <!--.up-->
    <!--.down-->
    <!--.left-->
    <!--.right-->
<div id="app3">
    <button @keyup.enter="love">loveqq</button>
    <!--<button @keyup.112="love">loveqq</button>-->
</div>
<!--可以通过全局 config.keyCodes 对象自定义按键修饰符别名：-->
<!--// 可以使用 v-on:keyup.f1-->
<!--Vue.config.keyCodes.f1 = 112-->

<!--可以用如下修饰符开启鼠标或键盘事件监听，使在按键按下时发生响应。-->
<!--.ctrl-->
<!--.alt-->
<!--.shift-->
<!--.meta-->
<div id="app4">
    <button @keyup.ctrl.67="love">loveqq</button>
    <br>
    <!-- Ctrl + Click -->
    <button @click.ctrl="love">loveqq</button>
</div>

<!--为什么在 HTML 中监听事件?-->
<!--你可能注意到这种事件监听的方式违背了关注点分离（separation of concern）传统理念。-->
<!--不必担心，因为所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上，-->
<!--它不会导致任何维护上的困难。实际上，使用 v-on 有几个好处：-->
    <!--扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法。-->
    <!--因为你无须在 JavaScript 里手动绑定事件，你的 ViewModel 代码可以是非常纯粹的逻辑，-->
    <!--和 DOM 完全解耦，更易于测试。-->
    <!--当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何自己清理它们。-->
<script src="../vue.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        methods:{
            warn:function (message, event) {
                // 现在我们可以访问原生事件对象
                if (event) event.preventDefault();
                alert(message);
            }
        }
    });
    let app2 = new Vue({
        el: '#app2',
        methods:{
            doThis:function () {
                console.log('doThis');
            },
            doThat:function () {
                console.log('doThat');
            }
        }
    });
//    Vue.config.keyCodes.a = 112;
    let app3 = new Vue({
        el: '#app3',
        methods:{
            love:function () {
                console.log(`love qinqin!`)
            }
        }
    });
    let app4 = new Vue({
        el: '#app4',
        methods:{
            love:function () {
                console.log(`love qinqin!`)
            }
        }
    });
</script>



















