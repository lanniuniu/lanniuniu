<head>
    <meta charset="UTF-8">
</head>
<style>
    /*app1*/
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to
        /* .list-leave-active for below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }

    /*app2*/
    .flip-list-move {
        transition: transform 1s;
    }

    /*app3*/
    .list-complete-item {
        transition: all 1s;
        display: inline-block;
        margin-right: 10px;
    }
    .list-complete-enter, .list-complete-leave-to
        /* .list-complete-leave-active for below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
    .list-complete-leave-active {
        position: absolute;
    }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<body>
<div id="app1">
    <button @click="add">add</button>
    <button @click="remove">remove</button>
    <transition-group name="list" tag="p">
        <span v-for="item in items" :key="item" class="list-item">
            {{item}}
        </span>
    </transition-group>
</div>
<div id="app2">
    <button @click="shuffle">Shuffle</button>
    <transition-group name="flip-list" tag="ul">
        <li v-for="item in items" :key="item">
            {{ item }}
        </li>
    </transition-group>
</div>
<div id="app3">
    <button v-on:click="shuffle">Shuffle</button>
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <transition-group name="list-complete" tag="p">
    <span
            v-for="item in items"
            v-bind:key="item"
            class="list-complete-item"
    >
      {{ item }}
    </span>
    </transition-group>
</div>
<div id="app4">
    <input v-model="query">
    <transition-group
            name="staggered-fade"
            tag="ul"
            v-bind:css="false"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
    >
        <li
                v-for="(item, index) in computedList"
                v-bind:key="item.msg"
                v-bind:data-index="index"
        >{{ item.msg }}</li>
    </transition-group>
</div>
<div id="app5">
    Fade In: <input type="range" v-model="fadeInDuration" min="0" v-bind:max="maxFadeDuration">
    Fade Out: <input type="range" v-model="fadeOutDuration" min="0" v-bind:max="maxFadeDuration">
    <transition
            v-bind:css="false"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
    >
        <p v-if="show">hello</p>
    </transition>
    <button
            v-if="stop"
            v-on:click="stop = false; show = false"
    >Start animating</button>
    <button
            v-else
            v-on:click="stop = true"
    >Stop it!</button>
</div>
<script src="../vue.js"></script>
<script>
//    渲染整个列表 使用 transition-group组件
//    特点：
//    不同于 <transition>，它会以一个真实元素呈现：默认为一个 <span>。你也可以通过 tag 特性更换为其他元素。
//内部元素 总是需要 提供唯一的 key 属性值
//这个例子有个问题，当添加和移除元素的时候，周围的元素会瞬间移动到他们的新布局的位置，而不是平滑的过渡，app2会解决这个问题
    let app1 = new Vue({
        el: '#app1',
        data: {
            items: [1,2,3,4,5,6,7,8,9],
            nextNum: 10,
        },
        methods: {
            randomIndex(){
                return Math.floor(Math.random()*this.items.length);
            },
            add(){
                this.items.splice(this.randomIndex(),0,this.nextNum++);
            },
            remove(){
                this.items.splice(this.randomIndex(),1)
            },
        },
    });

//<transition-group> 组件还有一个特殊之处。不仅可以进入和离开动画，还可以改变定位。
//要使用这个新功能只需了解新增的 v-move 特性，它会在元素的改变定位的过程中应用。像之前的类名一样，
//可以通过 name 属性来自定义前缀，也可以通过 move-class 属性手动设置。
//v-move 对于设置过渡的切换时机和过渡曲线非常有用
    let app2 = new Vue({
        el: '#app2',
        data:{
            items: [1,2,3,4,5,6,7,8,9]
        },
        methods:{
            shuffle(){
                this.items = _.shuffle(this.items)
            }
        },
    });

    //app1和app2结合
    let app3 = new Vue({
        el: '#app3',
        data: {
            items: [1,2,3,4,5,6,7,8,9],
            nextNum: 10,
        },
        methods: {
            randomIndex: function () {
                return Math.floor(Math.random() * this.items.length)
            },
            add: function () {
                this.items.splice(this.randomIndex(), 0, this.nextNum++)
            },
            remove: function () {
                this.items.splice(this.randomIndex(), 1)
            },
            shuffle: function () {
                this.items = _.shuffle(this.items)
            }
        }
    });

//    列表的交错过渡
//通过 data 属性与 JavaScript 通信 ，就可以实现列表的交错过渡：
    let app4 = new Vue({
        el: '#app4',
        data: {
            query: '',
            list: [
                { msg: 'Bruce Lee' },
                { msg: 'Jackie Chan' },
                { msg: 'Chuck Norris' },
                { msg: 'Jet Li' },
                { msg: 'Kung Fury' }
            ],
        },
        computed: {
            computedList: function () {
                let vm = this;
                return this.list.filter(function (item) {
                    return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
                })
            }
        },
        methods: {
            beforeEnter: function (el) {
                el.style.opacity = 0
                el.style.height = 0
            },
            enter: function (el, done) {
                let delay = el.dataset.index * 150
                setTimeout(function () {
                    Velocity(
                        el,
                        {opacity: 1, height: '1.6em'},
                        {complete: done}
                    )
                }, delay)
            },
            leave: function (el, done) {
                let delay = el.dataset.index * 150
                setTimeout(function () {
                    Velocity(
                        el,
                        {opacity: 0, height: 0},
                        {complete: done}
                    )
                }, delay)
            },
        }
    });

//过渡可以通过 Vue 的组件系统实现复用。要创建一个可复用过渡组件，
//你需要做的就是将 <transition> 或者 <transition-group> 作为根组件，然后将任何子组件放置在其中就可以了。

//    动态过渡
//在 Vue 中即使是过渡也是数据驱动的！动态过渡最基本的例子是通过 name 特性来绑定动态值。
//    当你想用 Vue 的过渡系统来定义的 CSS 过渡/动画 在不同过渡间切换会非常有用。
//所有的过渡特性都是动态绑定。它不仅是简单的特性，通过事件的钩子函数方法，可以在获取到相应上下文数据。
//这意味着，可以根据组件的状态通过 JavaScript 过渡设置不同的过渡效果。
    let app5 = new Vue({
        el: '#app5',
        data: {
            show: true,
            fadeInDuration: 1000,
            fadeOutDuration: 1000,
            maxFadeDuration: 1500,
            stop: true,
        },
        mounted: function () {
            this.show = false;
        },
        methods: {
            beforeEnter: function (el) {
                el.style.opacity = 0;
            },
            enter: function (el, done) {
                let vm = this;
                Velocity(el,
                    {opacity: 1},
                    {
                        duration: this.fadeInDuration,
                        complete: function () {
                            done();
                            if (!vm.stop) vm.show = false;
                        }
                    }
                )
            },
            leave: function (el, done) {
                let vm = this;
                Velocity(el,
                    {opacity: 0},
                    {
                        duration: this.fadeOutDuration,
                        complete: function () {
                            done();
                            vm.show = true;
                        }
                    }
                )
            }
        }
    });
</script>
</body>
