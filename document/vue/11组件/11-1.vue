<!--组件（Component）是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。-->
<!--在较高层面上，组件是自定义元素， Vue.js 的编译器为它添加特殊功能。-->
<!--在有些情况下，组件也可以是原生 HTML 元素的形式，以 js 特性扩展。-->

<!--注册-->
<!--全局注册-->
<!--要注册一个全局组件，你可以使用 Vue.component(tagName, options)。-->
<!--对于自定义标签名，Vue.js 不强制要求遵循 W3C规则 （小写，并且包含一个短杠），尽管遵循这个规则比较好。-->
<!--组件在注册之后，便可以在父实例的模块中以自定义元素的形式使用。要确保在初始化根实例 之前 注册了组件-->

<!--局部注册-->
<!--不必在全局注册每个组件。通过使用组件实例选项注册，可以使组件仅在另一个实例/组件的作用域中可用：-->
<!--这种封装也适用于其它可注册的 Vue 功能，如指令。-->
<div id="app">
    <love-qinqin></love-qinqin>
</div>

<!--DOM 模版解析说明-->
<!--当使用 DOM 作为模版时（例如，将 el 选项挂载到一个已存在的元素上）, 你会受到 HTML 的一些限制，因为 Vue 只有在浏览器解析和标准化 HTML 后才能获取模版内容。尤其像这些元素 <ul> ， <ol>， <table> ， <select> 限制了能被它包裹的元素， <option> 只能出现在其它元素内部。-->
<!--在自定义组件中使用这些受限制的元素时会导致一些问题-->
<!--变通的方案是使用特殊的 is 属性-->

<!--data 必须是函数-->
<!--使用组件时，大多数可以传入到 Vue 构造器中的选项可以在注册组件时使用，有一个例外： data 必须是函数。-->
<div id="app2">
    <love-qinqin></love-qinqin>
    <love-qinqin></love-qinqin>
    <love-qinqin></love-qinqin>
</div>

<!--构成组件-->
<!--组件意味着协同工作，通常父子组件会是这样的关系：组件 A 在它的模版中使用了组件 B 。-->
<!--它们之间必然需要相互通信：父组件要给子组件传递数据，子组件需要将它内部发生的事情告知给父组件。-->
<!--然而，在一个良好定义的接口中尽可能将父子组件解耦是很重要的。-->
<!--这保证了每个组件可以在相对隔离的环境中书写和理解，也大幅提高了组件的可维护性和可重用性。-->
<!--在 Vue.js 中，父子组件的关系可以总结为 props down, events up 。-->
<!--父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息。-->



<script src="../vue.js"></script>
<script>
//    var loveqinqin = {
//        template:'<p>love qinqin</p>'
//    };
    let app = new Vue({
        el: '#app',
        components : {
            'love-qinqin': {
                template:'<p>love qinqin</p>'
            }
        }
    });
    let app2 = new Vue({
        el: '#app2',
        components: {
            'love-qinqin':{
                template: '<button @click="counter += 1">{{counter}}</button>',
                data:function () {
                    return {
                        counter:0
                    }
                }
            }
        }
    });
</script>









