<!--key-->
<!--当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用 “就地复用” 策略。-->
<!--如果数据项的顺序被改变，Vue将不是移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，-->
<!--并且确保它在特定索引下显示已被渲染过的每个元素。这个类似 Vue 1.x 的 track-by="$index" 。-->
<!--这个默认的模式是有效的，但是只适用于不依赖子组件状态或临时 DOM 状态（例如：表单输入值）的列表渲染输出。-->
<!--为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，-->
<!--你需要为每项提供一个唯一 key 属性。理想的 key 值是每项都有唯一 id。-->
<!--这个特殊的属性相当于 Vue 1.x 的 track-by ，但它的工作方式类似于一个属性，-->
<!--所以你需要用 v-bind 来绑定动态值（在这里使用简写）-->
<!--建议尽可能使用 v-for 来提供 动态的动态key ，除非迭代 DOM 内容足够简单，或者你是故意要依赖于默认行为来获得性能提升。-->
<!--因为它是 Vue 识别节点的一个通用机制， key 并不特别与 v-for 关联，-->
<!--key 还具有其他用途，我们将在后面的指南中看到其他用途。-->
<div id="app">
    <div v-for="item in items" :key="item.id">
        {{item.id}}.love qinqin!{{item.message}}
    </div>
</div>
<script src="../vue.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        data:{
            items:[
                {'id':0,message:'miss'},
                {'id':1,message:'miss'}
            ]
        }
    });
</script>



















