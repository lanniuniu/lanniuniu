<!--数据绑定一个常见需求是操作元素的 class 列表和它的内联样式。-->
<!--因为它们都是属性 ，我们可以用v-bind 处理它们：只需要计算出表达式最终的字符串。-->
<!--不过，字符串拼接麻烦又易错。因此，在 v-bind 用于 class 和 style 时， Vue.js 专门增强了它。-->
<!--表达式的结果类型除了字符串之外，还可以是对象或数组。-->

<!--绑定 HTML Class-->

<!--对象语法-->
<!--我们可以传给 v-bind:class 一个对象，以动态地切换 class 。-->
<div id="app">
    <div class="static"
         v-bind:class="{ active: isActive, 'text-danger': hasError }">
    </div>
    <!--或者直接封装到一个对象到data或者计算缓存中-->
    <div class="static"
         v-bind:class="someClass">
    </div>
</div>

<!--数组语法-->
<!--我们可以把一个数组传给 v-bind:class ，以应用一个 class 列表-->
<div id="app2">
    <div :class="[activeClass, errorClass]">

    </div>
    <!--同样可以封装到data或computed-->
    <div :class="someclass">

    </div>
    <!--当有多个条件 class 时这样写有些繁琐。可以在数组语法中使用对象语法：-->
    <div :class="[{active: isActive},class2]">

    </div>
</div>

<!--用在组件上-->

<!--当你在一个定制的组件上用到 class 属性的时候，这些类将被添加到根元素上面，
这个元素上已经存在的类不会被覆盖。-->
<div id="app3">
    <loveqinqin :class="[cla1,cla2]">

    </loveqinqin>
</div>
<script src="../vue.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        data: {
            isActive:true,//属性值所对应的属性是class
            hasError:true
        },
        computed:{
            someClass:function () {
                return{
                    active: true,
                    'text-danger': true
                }

            }
        }
    });
    let app2 = new Vue({
        el: '#app2',
        data: {
            activeClass:'class1',
            errorClass:'class2',
            someclass:['class1','class2'],
            isActive:false,
            class2:'class2'
        }
    });
    Vue.component('loveqinqin',{
        template:'<p>love qinqin</p>'
    });
    let app3 = new Vue({
        el: '#app3',
        data:{
            cla1:'class1',
            cla2:'class2'
        }
    });
</script>












