<!--用组件构建（应用）-->
<!--组件系统是 Vue.js 另一个重要概念，因为它提供了一种抽象，让我们可以用独立可复用的小组件来构建大型应用。-->
<!--如果我们考虑到这点，几乎任意类型的应用的界面都可以抽象为一个组件树-->
<div id="app">
    <qinqin></qinqin>
</div>
<script src="../vue.js"></script>
<script>
    //先注册组件再new Vue
    //关于组件的部分在11章详细学习
    Vue.component('qinqin', {
        template: '<b>love,qinqin</b>'
    });
    let app = new Vue({
        el: '#app',
        data:{
        }
    });
</script>