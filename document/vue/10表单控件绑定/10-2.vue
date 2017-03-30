<!--绑定 value-->
<!--对于单选按钮，勾选框及选择列表选项， v-model 绑定的 value 通常是静态字符串（对于勾选框是逻辑值）-->
<!--但是有时我们想绑定 value 到 Vue 实例的一个动态属性上，这时可以用 v-bind 实现，-->
<!--并且这个属性的值可以不是字符串。-->
<div id="app">
    <!-- 当选中时，`picked` 为字符串 "a" -->
    <input type="radio" v-model="picked" value="a">{{picked}}
    <!-- `toggle` 为 true 或 false -->
    <input type="checkbox" v-model="toggle">{{toggle}}<br>
    <!-- 当选中时，`selected` 为字符串 "abc" -->
    <select v-model="selected">
        <option value="abc">ABC</option>
    </select>{{selected}}
</div>

<!--复选框-->
<div id="app2">
    <input
            type="checkbox"
            v-model="toggle"
            v-bind:true-value="a"
            v-bind:false-value="b"
    >{{toggle}}<br>

    <!--单选按钮-->
    <input type="radio" v-model="pick" v-bind:value="a">{{pick}}
</div>
<script src="../vue.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        data:{
            picked:'',
            toggle:'',
            selected:[]
        }
    });
    let app2 = new Vue({
        el: '#app2',
        data: {
            toggle:'',
            a:'miss',
            b:'love',
            pick:''
        }
    });

</script>

















