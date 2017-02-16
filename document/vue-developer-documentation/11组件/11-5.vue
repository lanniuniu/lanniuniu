<!--动态组件-->

<!--多个组件可以使用同一个挂载点，然后动态地在它们之间切换。使用保留的 <component> 元素，-->
<!--动态地绑定到它的 is 特性：-->
<div id="app">
    <component :is="currentView"></component>
</div>

<!--keep-alive-->
<!--如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive 指令参数：-->
<!--<keep-alive>-->
    <!--<component :is="currentView">-->
         <!--非活动组件将被缓存！ -->
    <!--</component>-->
<!--</keep-alive>-->
<script src="../vue.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        data: {
            currentView: 'home'
        },
        components: {
            home: {
                template:'<p>love qinqin</p> '
            },
            posts: { /* ... */ },
            archive: { /* ... */ }
        }
    });
</script>















