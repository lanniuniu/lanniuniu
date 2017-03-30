<!--处理用户输入-->
<!--为了让用户和你的应用进行互动，
我们可以用 v-on 指令绑定一个监听事件用于调用我们 Vue 实例中定义的方法：-->
<div id="app">
    <p>{{message}}</p>
    <button v-on:click="changeColor">点我</button>
</div>

<!--Vue 也提供了 v-model 指令，它使得在表单输入和应用状态中做双向数据绑定变得非常轻巧。-->
<div id="app2">
    <p>{{message}}</p>
    <input type="text" v-model="message">
</div>
<script src="../vue.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        data: {
            message: 'miss qinqin!'
        },
        methods:{
            changeColor: function () {
                console.log(this);
                this.$el.style.color = 'red';
            }
        }
    });
    let app2 = new Vue({
        el: '#app2',
        data: {
            message:''
        }
    });
</script>


