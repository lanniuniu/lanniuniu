<!--自定义事件events-->
<!--我们知道，父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，应该怎样做？那就是自定义事件！-->

<!--使用 v-on 绑定自定义事件-->
<!--每个 Vue 实例都实现了事件接口(Events interface)，即：-->
<!--使用 $on(eventName) 监听事件-->
<!--使用 $emit(eventName) 触发事件-->
<!--另外，父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件。-->
<div id="app">
    <p>{{total}}</p>
    <love-qinqin @miss="allCount"></love-qinqin>
    <love-qinqin @miss="allCount"></love-qinqin>
</div>

<!--给组件绑定原生事件-->
<!--有时候，你可能想在某个组件的根元素上监听一个原生事件。可以使用 .native 修饰 v-on 。-->

<!--使用自定义事件的表单输入组件(***)-->
<!--自定义事件也可以用来创建自定义的表单输入组件，使用 v-model 来进行数据双向绑定。-->
<!--要让组件的 v-model 生效，它必须：-->
<!--接受一个 value 属性-->
<!--在有新的 value 时触发 input 事件-->
<div id="app2">
    <currency-input v-model="price"></currency-input>
</div>

<!--非父子组件通信-->
<!--有时候非父子关系的组件也需要通信。-->


<script src="../vue.js"></script>
<script>
    Vue.component('love-qinqin',{
        template:'<button @click="count">{{counter}}</button>',
        data:function () {
            return {
                counter:0
            }
        },
        methods:{
            count:function () {
                this.counter += 1;
                this.$emit('miss');
            }
        }
    });
    let app = new Vue({
        el: '#app',
        data: {
            total: 0
        },
        methods:{
            allCount:function () {
                this.total += 1;
            }
        }
    });
    let app2 = new Vue({
        el: '#app2',
        components:{
            'currency-input':{
                template:' <span>$ <input ref="input" :value="value" ' +
                '@:input="updateValue($event.target.value)" ></span>',
                props: ['value'],
                methods: {
                    // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
                    updateValue: function (value) {
                        var formattedValue = value
                        // 删除两侧的空格符
                            .trim()
                            // 保留 2 小数位
                            .slice(0, value.indexOf('.') + 3)
                        // 如果值不统一，手动覆盖以保持一致
                        if (formattedValue !== value) {
                            this.$refs.input.value = formattedValue
                        }
                        // 通过 input 事件发出数值
                        this.$emit('input', Number(formattedValue))
                    }
                }
            }
        }
    });
//    let bus = new Vue({
//        el: '#bus'
//    });
////     触发组件 A 中的事件
//    bus.$emit('love-qinqin', 1);
//    // 在组件 B 创建的钩子中监听事件
//    bus.$on('love-qinqin', function (id) {
//        console.log(111);
//    })
</script>


















