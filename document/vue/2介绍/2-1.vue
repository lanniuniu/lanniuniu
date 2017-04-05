<!--/**-->
<!--* Vue.js（读音 /vjuː/, viewsview） 是一套构建用户界面的 渐进式框架。-->
<!--* 与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。-->
<!--* Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。-->
<!--* 另一方面，Vue 完全有能力驱动采用单文件组件和 Vue 生态系统支持的库开发的复杂单页应用。-->
<!--* Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。-->
<!--*/-->

<!--声明式渲染-->
<div id="app">
    <p v-bind:title="time">{{ message }}</p>
</div>

<!--条件和循环-->
<div id="app2">
    <p v-if="seen" v-for="list in lists">{{list}}</p>
</div>

<script src="../vue.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!',
            time: '你进入时间为' + new Date()
        }
    });

    let app2 = new Vue({
        el: '#app2',
        data: {
            seen: true,
            lists:[
                0,1,2,3
            ]
        }
    });

</script>