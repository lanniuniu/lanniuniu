<head>
    <meta charset="UTF-8">
</head>
<script src="../vue.js"></script>
<body>
<div>

</div>
<script>
//    混合 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。
//    混合对象可以包含任意组件选项。以组件使用混合对象时，所有混合对象的选项将被混入该组件本身的选项。
// 定义一个混合对象
let myMixin = {
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
        }
    }
};
// 定义一个使用混合对象的组件
let Component = Vue.extend({
    mixins: [myMixin]
});
let component = new Component() // => "hello from mixin!"

//    选项合并
//当组件和混合对象含有同名选项时，这些选项将以恰当的方式混合。
//比如，同名钩子函数将混合为一个数组，因此都将被调用。另外，混合对象的 钩子将在组件自身钩子 之前 调用
//值为对象的选项，例如 methods, components 和 directives，将被混合为同一个对象。
//两个对象键名冲突时，取组件对象的键值对。

//    全局混合
//也可以全局注册混合对象。注意使用！ 一旦使用全局混合对象，将会影响到 所有 之后创建的 Vue 实例。
//使用恰当时，可以为自定义对象注入处理逻辑。
//    谨慎使用全局混合对象，因为会影响到每个单独创建的 Vue 实例 (包括第三方模板)。
//大多数情况下，只应当应用于自定义选项，就像上面示例一样。也可以将其用作 Plugins 以避免产生重复应用
//Vue.mixin({});

    自定义选项合并策略
自定义选项将使用默认策略，即简单地覆盖已有值。
如果想让自定义选项以自定义逻辑合并，可以向 Vue.config.optionMergeStrategies 添加一个函数

</script>
</body>