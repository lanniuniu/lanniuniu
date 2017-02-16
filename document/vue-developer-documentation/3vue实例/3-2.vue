<!--实例的生命周期-->

<!--每个 Vue 实例在被创建之前都要经过一系列的初始化过程。-->
<!--例如，实例需要配置数据观测(data observer)、编译模版、挂载实例到 DOM ，-->
<!--然后在数据变化时更新 DOM 。在这个过程中，实例也会调用一些 生命周期钩子 ，-->
<!--这就给我们提供了执行自定义逻辑的机会。-->
<!--created、mounted、 updated 、destroyed-->
<div id="app">
    <p>{{message}}</p>
</div>
<script src="../vue.js"></script>
<script>
    let app = new Vue({
        el: "#app",
        data:{
            message:''
        },
        created:function () {
            this.$data.message = 'love qinqin'
        },
        mounted:function () {
            console.log('mounted是安装好');
        },
        updated:function () {
            console.log('已经更新啦')
        },
        destroyed:function () {
            console.log('已经销毁啦')
        }
    });
</script>