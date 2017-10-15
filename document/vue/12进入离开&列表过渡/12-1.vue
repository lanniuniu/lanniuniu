<head>
    <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
</head>
<style>
    /* app1 */
    .love-enter-active, .love-leave-active{
        transition: opacity .5s
    }
    .love-enter, .love-leave-to {
        opacity: 0
    }

    /* app2 */
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
<body>
    <div id="app1">
        <button @click="show = !show">Toggle</button>
        <transition name="love">
            <p v-if="show">{{word[0]}}</p>
        </transition>
    </div>
    <div id="app2">
        <button @click="show = !show">Toggle</button>
        <transition name="bounce">
            <p v-if="show">{{word[1]}}</p>
        </transition>
    </div>
    <div id="app3">
        <div id="example-3">
            <button @click="show = !show">
                Toggle
            </button>
            <transition
                    name="custom-classes-transition"
                    enter-active-class="animated tada"
                    leave-active-class="animated bounceOutRight"
            >
                <p v-if="show">{{word}}</p>
            </transition>
        </div>
    </div>

    <div id="app4">
        <div id="example-4">
            <button @click="show = !show">
                Toggle
            </button>
            <transition
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:leave="leave"
                    v-bind:css="false"
            >
                <p v-if="show">
                    {{word}}
                </p>
            </transition>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
    <script src="../vue.js"></script>
    <script>
//        Vue 提供了 transition 的封装组件，在下列情形中，
//        可以给任何元素和组件添加 entering/leaving 过渡
//        条件渲染 (使用 v-if)
//            条件展示 (使用 v-show)
//        动态组件
//        组件根节点

//过渡的类名
//在进入和离开的过渡中，会有6个class的切换
//v-enter v-enter-active v-enter-to v-leave v-leave-acive v-leave-to “v”表示的是transition的name
        let app1 = new Vue({
            el: '#app1',
            data:{
                show: true,
                word: ['love','daidai'],
            },
        });

//        css动画
//CSS 动画用法同 CSS 过渡，区别是在动画中 v-enter 类名在节点插入 DOM 后不会立即删除，而是在 animationend 事件触发时删除。
//v-enter-active v-leave-active
        let app2 = new Vue({
            el: '#app2',
            data: {
                show: true,
                word: ['love','daidai'],
            },
        });

//        自定义过渡的类名
//enter-class
//enter-active-class
//enter-to-class (2.1.8+)
//leave-class
//leave-active-class
//leave-to-class (2.1.8+)
//他们的优先级高于普通的类名，这对于 Vue 的过渡系统和其他第三方 CSS 动画库，如 Animate.css 结合使用十分有用。
        let app3 = new Vue({
            el: '#app3',
            data: {
                show: true,
                word: '1314',
            },
        });

//        同时使用过渡和动画
//        使用type特性并设置animation和transtion来明确声明vue监听的类型

//        显性的过渡持续时间
//        <transition :duration="1000">...</transition>
//你也可以定制进入和移出的持续时间：
//<transition :duration="{ enter: 500, leave: 800 }">...</transition>

//        JavaScript钩子
//        可以在属性中声明的钩子
//        <transition
//v-on:before-enter="beforeEnter"
//v-on:enter="enter"
//v-on:after-enter="afterEnter"
//v-on:enter-cancelled="enterCancelled"
//v-on:before-leave="beforeLeave"
//v-on:leave="leave"
//v-on:after-leave="afterLeave"
//v-on:leave-cancelled="leaveCancelled"
//    >
//    <!-- ... -->
//    </transition>

        let app4 = new Vue({
            el: '#app4',
            data: {
                word: '!',
                show: true
            },
            methods: {
                beforeEnter: function (el) {
                    el.style.opacity = 0;
                    el.style.transformOrigin = 'left';
                },
                enter: function (el, done) {
                    Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 });
                    Velocity(el, { fontSize: '1em' }, { complete: done });
                },
                leave: function (el, done) {
                    Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 });
                    Velocity(el, { rotateZ: '100deg' }, { loop: 2 });
                    Velocity(el, {
                        rotateZ: '45deg',
                        translateY: '30px',
                        translateX: '30px',
                        opacity: 0
                    }, { complete: done });
                }
            }
        });
    </script>
</body>

