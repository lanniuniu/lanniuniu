<!--过滤器-->
<!--Vue.js 允许你自定义过滤器，可被用作一些常见的文本格式化。
过滤器可以用在两个地方：mustache 插值和 v-bind 表达式。
过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符指示：-->
<div id="app">
    {{ message | loveqinqin }}
    <!--<div v-bind:id="rawId | formatId"></div>-->
</div>


<!--缩写-->

<!--v- 前缀在模板中是作为一个标示 Vue 特殊属性的明显标识。-->
<!--当你使用 Vue.js 为现有的标记添加动态行为时，它会很有用，但对于一些经常使用的指令来说有点繁琐。-->
<!--同时，当搭建 Vue.js 管理所有模板的 SPA 时，v- 前缀也变得没那么重要了。-->
<!--。因此，Vue.js 为两个最为常用的指令提供了特别的缩写：v-bind :   和   v-on @-->
<div id="app2">
    <p><a :href="loveQinqin" target="_blank">love qinqin</a></p>
    <button @click="missQinqin">miss qinqin</button>
</div>
<script src="../vue.js"></script>
<script>
    let app = new Vue({
        el:'#app',
        filters: {
            loveqinqin: function (value) {
                if (!value) return '';
                value = value.toString();
                return value.charAt(0).toUpperCase() + value.slice(1);
            }
        },
        data:{
            message:'hello'
        }
    });
    let app2 = new Vue({
        el: '#app2',
        data: {
            loveQinqin: 'http://music.163.com/#/m/song?id=27646205&userid=121207386'
        },
        methods: {
            missQinqin:function () {
                alert('miss qinqin');
            }
        }
    });
</script>







