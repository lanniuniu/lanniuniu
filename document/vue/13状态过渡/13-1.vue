<head>
    <meta charset="UTF-8">
</head>
<style>
    /*
    app2
     */
    svg { display: block; }
    polygon { fill: #41B883; }
    circle {
        fill: transparent;
        stroke: #35495E;
    }
    input[type="range"] {
        display: block;
        width: 100%;
        margin-bottom: 15px;
    }

</style>
<script src="https://cdn.jsdelivr.net/npm/tween.js@16.3.4"></script>
<body>
<div id="app1">
    <input v-model.number="number" type="number" step="20">
    <p>{{ animatedNumber }}</p>
</div>

<script src="../vue.js"></script>
<script>
    /*
    所有的原始数字都被事先存储起来，可以直接转换到数字。
    做到这一步，我们就可以结合 Vue 的响应式和组件系统，
    使用第三方库来实现切换元素的过渡状态。
     */
    let app1 = new Vue({
        el: '#app1',
        data: {
            number: 0,
            animatedNumber: 0
        },
        watch: {
            number: function(newValue, oldValue) {
                let vm = this;
                function animate () {
                    if (TWEEN.update()) {
                        requestAnimationFrame(animate)
                    }
                }
                new TWEEN.Tween({ tweeningNumber: oldValue })
                    .easing(TWEEN.Easing.Quadratic.Out)
                    .to({ tweeningNumber: newValue }, 500)
                    .onUpdate(function () {
                        vm.animatedNumber = this.tweeningNumber.toFixed(0)
                    })
                    .start();
                animate()
            }
        }
    });

//    动态状态过渡
//    就像 Vue 的过渡组件一样，数据背后状态过渡会实时更新，
//    这对于原型设计十分有用。当你修改一些变量，即使是一个简单的 SVG 多边形也可实现很多难以想象的效果。

//    把过渡放到组件
//    管理太多的状态过渡会很快的增加 Vue 实例或者组件的复杂性，幸好很多的动画可以提取到专用的子组件。

//    通过vue和svg赋予新的生命
//    Vue 可以帮到你。因为 SVG 的本质是数据，我们只需要这些动物兴奋、思考或境界的样例。
//    然后 Vue 就可以辅助完成这几种状态之间的过渡动画，来制作你的欢迎页面、加载指示、以及更加带有情感的提示。
</script>
</body>
