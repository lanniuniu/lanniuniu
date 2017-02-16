<!--构造器-->
<!--每个 Vue.js 应用都是通过构造函数 Vue 创建一个 Vue 的根实例 启动的-->
<!--在实例化 Vue 时，需要传入一个选项对象，它可以包含数据、模板、挂载元素、方法、生命周期钩子等选项。
全部的选项可以在 API 文档中查看-->

<!--属性和方法-->
<!--每个 Vue 实例都会代理其 data 对象里所有的属性-->
<div id="app">
    love qinqin
</div>
<script src="../vue.js"></script>
<script>
    var data = { a: 1 };
    var vm = new Vue({
        el: '#app',
        data: data,
    });
    console.log(vm.a === data.a); // -> true
    // 设置属性也会影响到原始数据
    vm.a = 2;
    console.log(data.a); // -> 2
    // ... 反之亦然
    data.a = 3;
    console.log(vm.a); // -> 3

    console.log(vm.$data === data); // -> true
    console.log(vm.$el === document.getElementById('app')); // -> true
    console.log('----------------');
    // $watch 是一个实例方法
    vm.$watch('a', function (newVal, oldVal) {
        console.log('不能改变a的值！')
    })
</script>










