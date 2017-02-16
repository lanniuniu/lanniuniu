<!--使用 Slot 分发内容-->
<!--在使用组件时，常常要像这样组合它们：-->
<!--&lt;!&ndash;<app>&ndash;&gt;-->
    <!--&lt;!&ndash;<app-header></app-header>&ndash;&gt;-->
    <!--&lt;!&ndash;<app-footer></app-footer>&ndash;&gt;-->
<!--&lt;!&ndash;</app>&ndash;&gt;-->
<!--注意两点：-->
<!--app 组件不知道它的挂载点会有什么内容。挂载点的内容是由app的父组件决定的。-->
<!--app组件很可能有它自己的模版。为了让组件可以组合，我们需要一种方式来混合父组件的内容与子组件自己的模板。-->
<!--这个过程被称为 内容分发 (或 “transclusion” 如果你熟悉 Angular)。-->
<!--Vue.js 实现了一个内容分发 API ，参照了当前 Web 组件规范草案，使用特殊的 slot 元素作为原始内容的插槽。-->

<!--编译作用域-->
<!--在深入内容分发 API 之前，我们先明确内容的编译作用域。假定模板为：-->
<!--<child-component>-->
    <!--{{ message }}-->
<!--</child-component>-->
<!--message 应该绑定到父组件的数据，还是绑定到子组件的数据？答案是父组件。组件作用域简单地说是：-->
<!--父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译。-->
<!--一个常见错误是试图在父组件模板内将一个指令绑定到子组件的属性/方法：-->

<!--单个 Slot-->
<!--除非子组件模板包含至少一个 <slot> 插口，否则父组件的内容将会被丢弃。-->
<!--当子组件模板只有一个没有属性的 slot 时，父组件整个内容片段将插入到 slot 所在的 DOM 位置，并替换掉 slot 标签本身。-->
<!--最初在 <slot> 标签中的任何内容都被视为备用内容。-->
<!--备用内容在子组件的作用域内编译，并且只有在宿主元素为空，且没有要插入的内容时才显示备用内容-->
<div id="app">
    <father>
    </father>
</div>

<!--具名 Slot-->
<!--<slot> 元素可以用一个特殊的属性 name 来配置如何分发内容。-->
<!--多个 slot 可以有不同的名字。具名 slot 将匹配内容片段中有对应 slot 特性的元素。-->
<!--仍然可以有一个匿名 slot ，它是默认 slot ，作为找不到匹配的内容片段的备用插槽。-->
<!--如果没有默认的 slot ，这些找不到匹配的内容片段将被抛弃。-->
<div id="app2">
    <father2></father2>
</div>
<div id="app3">
    <father3></father3>
</div>
<!--作用域插槽-->
<!--作用域插槽是一种特殊类型的插槽，用作使用一个（能够传递数据到）可重用模板替换已渲染元素。-->
<!--在子组件中，只需将数据传递到插槽，就像你将 prop 传递给组件一样-->
<!--作用域插槽更具代表性的用例是列表组件，允许组件自定义应该如何渲染列表每一项：-->
<!--在父级中，具有特殊属性 scope 的 <template> 元素(该template元素不会呈现在dom中)，表示它是作用域插槽的模板。-->
<!--scope 的值对应一个临时变量名，此变量接收从子组件中传递的 prop 对象：-->
<script src="../vue.js"></script>
<script>
    Vue.component('father',{
        template:'<div>' + '<h1>我是父组件的标题</h1>'+ '<son>' +
            '<p>这是一些初始内容</p>'+//分发内容
            '<p>这是更多的初始内容</p>'+//分发内容，若没有显示该默认插槽内容
        '</son>'+
        '</div>'
    });
    Vue.component('son',{
        template:'<div>' +'<h2>我是子组件的标题</h2>'+ '<slot>'+
        '只有在没有要分发的内容时才会显示。'+
        '</slot>'+
        '</div>'
    });
    let app = new Vue({
        el:'#app'
    });

    Vue.component('son2',{
        template:'<div class="container"> <header> <slot name="header"></slot> </header> <main> <slot></slot> </main> <footer> <slot name="footer"></slot> </footer> </div>'
    });
    Vue.component('father2',{
        template:'<son2><h1 slot="header">这里可能是一个页面标题</h1> <p>主要内容的一个段落。</p> <p>另一个主要段落。</p> <p slot="footer">这里有一些联系信息</p></son2>'
    });
    let app2 = new Vue({
        el: '#app2'
    });

    Vue.component('son3',{
        template:'<div class="child"> <slot text="hello from child"></slot> </div>'
    });
    Vue.component('father3',{
        template:'<div class="parent"> <son3> <template scope="props"> <span>hello from parent</span> <span>{{ props.text }}</span> </template> </son3> </div>'
    });
    let app3 = new Vue({
        el: '#app3'
    });
</script>











