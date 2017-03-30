<!--编写可复用组件-->
<!--在编写组件时，记住是否要复用组件有好处。一次性组件跟其它组件紧密耦合没关系，-->
<!--但是可复用组件应当定义一个清晰的公开接口。-->
<!--Vue 组件的 API 来自三部分 - props, events 和 slots ：-->
<!--Props 允许外部环境传递数据给组件-->
<!--Events 允许组件触发外部环境的副作用-->
<!--Slots 允许外部环境将额外的内容组合在组件中。-->
<!--使用 v-bind 和 v-on 的简写语法，模板的缩进清楚且简洁-->
<div id="app">
    <my-component
            :foo="love"
            @event="miss">
        <img slot="header" src="../../img/cat.jpg">
        <p slot="main">Hello!</p>
        <p></p>
    </my-component>
</div>

<!--子组件索引-->
<!--尽管有 props 和 events ，但是有时仍然需要在 JavaScript 中直接访问子组件。-->
<!--为此可以使用 ref 为子组件指定一个索引 ID 。-->
<!--当 ref 和 v-for 一起使用时， ref 是一个数组或对象，包含相应的子组件。-->
<!--$refs 只在组件渲染完成后才填充，并且它是非响应式的。-->
<!--它仅仅作为一个直接访问子组件的应急方案——应当避免在模版或计算属性中使用 $refs 。-->
<div id="app2">
    <!--<user-profile ref="profile"></user-profile>-->
</div>

<!--异步组件-->
<!--在大型应用程序中，我们可能需要将应用拆分为更小的模块，并且只在实际需要时才从服务器加载组件。-->
<!--为了让异步按需加载组件这件事变得简单，Vue.js 允许将组件定义为一个异步解析组件定义的工厂函数。-->
<!--Vue.js 只在组件实际需要渲染时触发工厂函数，并将缓存结果，用于将来再次渲染。-->
<!--工厂函数接收 resolve 回调函数，在从服务器接收到组件定义时调用。也可以调用 reject(reason) 表明加载失败。-->
<!--这里的 setTimeout 只是为了用于演示；怎么获取组件完全取决于你。-->
<!--比较推荐的方式是配合 Webpack 代码分割功能来使用异步组件-->

<!--组件命名约定-->
<!--当注册组件（或者 props）时，可以使用 kebab-case ，camelCase ，或 TitleCase 。-->
<!--在 HTML 模版中，请使用 kebab-case 形式：-->
<!--当使用字符串模式时，可以不受 HTML 的 case-insensitive 限制。-->
<!--这意味实际上在模版中，你可以使用 camelCase 、 TitleCase 或者 kebab-case 来引用：-->
<!--如果组件未经 slot 元素传递内容，你甚至可以在组件名后使用 / 使其自闭合：-->
<!--当然，这只在字符串模版中有效。因为自闭的自定义元素是无效的 HTML ，浏览器原生的解析器也无法识别它。-->

<!--递归组件-->
<!--组件在它的模板内可以递归地调用自己，不过，只有当它有 name 选项时才可以-->

<!--组件之间的循环引用-->
<!--我们需要给模块系统一个切入点-->

<!--内联模版-->
<!--如果子组件有 inline-template 特性，组件将把它的内容当作它的模板，而不是把它当作分发内容。这让模板更灵活。-->

<!--X-Templates-->
<!--另一种定义模版的方式是在 JavaScript 标签里使用 text/x-template 类型，并且指定一个id。-->
<script type="text/x-template" id="hello-world-template">
    <p>Hello hello hello</p>
</script>

<!--使用 v-once 的低开销静态组件-->
<!--尽管在 Vue 中渲染 HTML 很快，不过当组件中包含大量静态内容时，可以考虑使用 v-once 将渲染结果缓存起来-->
<script src="../vue.js"></script>
<script>
    Vue.component('my-component',{
        template:'<div><button @click="event" >{{foo}}</button><hr>'+
        '<header> <slot name="header"></slot> </header> <main> <slot name="main"></slot> </main> <footer> <slot name="footer">miss qinqin!</slot> </footer>'+
        '</div>'
        ,
        props:['foo'],
        methods:{
            event:function () {
                console.log('events事件');
                this.$emit('event');
            }
        },
    });
    let app = new Vue({
        el: '#app',
        data:{
            love:'love qinqin!'
        },
        methods:{
             miss:function () {
                console.log('love qinqin!');
            }
        }
    });
    let app2 = new Vue({
        el: '#app2',
    });
    //访问子组件
    var child = app2.$refs.profile;
    Vue.component('hello-world', {
        template: '#hello-world-template'
    });

</script>




















