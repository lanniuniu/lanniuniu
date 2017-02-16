<!--修饰符-->

<!--.lazy-->
<!--在默认情况下， v-model 在 input 事件中同步输入框的值与数据 (除了 上述 IME 部分)-->
<!--，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步-->
<div id="app">
    <!-- 在 "change" 而不是 "input" 事件中更新 -->
    <input v-model.lazy="msg">{{msg}}<br>

    <!--.number-->
    <!--如果想自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值），
    可以添加一个修饰符 number 给 v-model 来处理输入值-->
    <input v-model.number="age" type="number">{{age}}<br>

    <!--.trim-->
    <!--如果要自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入：-->
    <input v-model.trim="msg">{{msg}}
</div>
<script src="../vue.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        data:{
            msg:'',
            age:'520',
            msg:''
        }
    });
</script>














