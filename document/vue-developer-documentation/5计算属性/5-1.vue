<!--计算属性-->

<!--在模板中绑定表达式是非常便利的，但是它们实际上只用于简单的操作。-->
<!--在模板中放入太多的逻辑会让模板过重且难以维护。-->
<div id="app">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>

<!--计算缓存 vs Methods-->
<!--你可能已经注意到我们可以通过调用表达式中的method来达到同样的效果-->
<!--我们为什么需要缓存？假设我们有一个重要的计算属性 A ，这个计算属性需要一个巨大的数组遍历和做大量的计算。-->
<!--然后我们可能有其他的计算属性依赖于 A 。-->
<!--如果没有缓存，我们将不可避免的多次执行 A 的 getter ！如果你不希望有缓存，请用 method 替代。-->
<div id="app2">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage() }}"</p>
</div>

<!--计算属性 vs Watched Property-->

<!--Vue.js 提供了一个方法 $watch ，它用于观察 Vue 实例上的数据变动。-->
<!--当一些数据需要根据其它数据变化时， $watch 很诱人 —— 特别是如果你来自 AngularJS 。-->
<!--不过，通常更好的办法是使用计算属性而不是一个命令式的 $watch 回调。-->
<div id="app3">
    <div id="demo">{{ fullName }}</div>
</div>

<!--计算 setter-->
<!--计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：-->
<div id="app4">
    <p>{{firstName}},{{lastName}}=>{{fullName}}</p>
</div>

<script src="../vue.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        data:{
            message : 'love qinqin'
        },
        computed: {//computed 计算缓存
            reversedMessage :function () {
                return this.message.split('').reverse().join('')
            }
        }
    });
    let app2 = new Vue({
        el: '#app2',
        data:{
            message : 'miss qinqin'
        },
        methods : {//方法，与缓存比较
            reversedMessage :function () {
                return this.message.split('').reverse().join('')
            }
        }
    });
    let app3 = new Vue({
        el: '#demo',
        data: {
            firstName: 'Foo',
            lastName: 'Bar',
            fullName: 'Foo Bar'
        },
        watch: {//watch更加繁琐
            firstName: function (val) {
                this.fullName = val + ' ' + this.lastName
            },
            lastName: function (val) {
                this.fullName = this.firstName + ' ' + val
            }
        }
//        computed: {//计算缓存
//            fullName: function () {
//                return this.firstName + ' ' + this.lastName
//            }
//        }
    });
    let app4 = new Vue({
        el:'#app4',
        data:{
            firstName:'love',
            lastName:'qinqin'
        },
        computed:{
            fullName:{
                //默认的get
                get:function () {
                    return this.firstName + ' ' + this.lastName;
                },
                //可添加的set
                set:function (value) {
                    let names = value.split(' ');
                    this.firstName = names[0];
                    this.lastName = names[names.length - 1];
                }
            }
        }
    });
</script>















