<!--绑定内联样式-->

<!--对象语法-->

<!--v-bind:style 的对象语法十分直观——看着非常像 CSS ，其实它是一个 JavaScript 对象。-->
<!--CSS 属性名可以用驼峰式(或短横分隔 待观察)命名-->
<div id="app">
    <p :style="{fontSize: sizes,backgroundColor:color}">love qinqin</p>
    <!--同样也可以封装到data或计算缓存-->
    <p :style="someStyle">love qinqin</p>
</div>

<!--数组语法-->
<!--v-bind:style 的数组语法可以将多个样式对象应用到一个元素上：-->
<div id="app2">
    <p :style="[size,color]">
        love qinqin
    </p>
</div>
<script src="../vue.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        data:{
            sizes:'30px',
            color:'#aaaaaa',
            someStyle:{
                fontSize:'18px',
                backgroundColor: 'red'
            },
        },
    });
    let app2 = new Vue({
        el: '#app2',
        data: {
            size:{
                fontSize:'50px'
            },
            color:{
                backgroundColor:'#dddddd'
            }
        }
    });
</script>

















