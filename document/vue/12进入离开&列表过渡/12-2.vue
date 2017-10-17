<head>
    <meta charset="UTF-8">
</head>
<style>
    /*app2*/
    .love-enter-active,.love-leave-active{
        transition: opacity .5s
    }
    .love-enter,.love-leave-to{
        opacity: 0;
    }

    /*app3*/
    .daidai-enter-active, .daidai-leave-active {
        transition: opacity .3s ease;
    }
    .daidai-enter, .daidai-leave-to
        /* .component-fade-leave-active for below version 2.1.8 */ {
        opacity: 0;
    }
</style>
<body>
<div id="app1">
    <transition>
        <button :key="docState" @click="changeState">
            {{buttonMessage}}
        </button>
    </transition>
</div>
<div id="app2" style="margin-top: 20px">
    <transition mode="out-in" name="love">
        <button @click="changeState">
            {{buttonMessage}}
        </button>
    </transition>
</div>
<div id="app3" style="margin-top: 20px">
    <input type="radio" value="a" name="A" id="A" v-model="view"><label for="A">A</label>
    <input type="radio" value="b" name="A" id="B" v-model="view"><label for="B">B</label>
    <transition name="daidai" mode="out-in">
        <component :is="views"></component>
    </transition>
</div>
<script src="../vue.js"></script>
<script>
//    初始渲染的过渡
//    可以通过 appear 特性设置节点的在初始渲染的过渡 也可以自定义css类名
//    <transition
//    appear
//    appear-class="custom-appear-class"
//    appear-to-class="custom-appear-to-class" (2.1.8+)
//    appear-active-class="custom-appear-active-class"
//        >
//        </transition>
//    自定义钩子
//    <transition
//appear
//v-on:before-appear="customBeforeAppearHook"
//v-on:appear="customAppearHook"
//v-on:after-appear="customAfterAppearHook"
//v-on:appear-cancelled="customAppearCancelledHook"
//    >
//    <!-- ... -->
//    </transition>

//    多个元素的过渡
//当有相同标签名的元素切换时，需要通过 key 特性设置唯一的值来标记以让 Vue 区分它们，否则 Vue 为了效率只会替换相同标签内部的内容。
    let app1 = new Vue({
        el: '#app1',
        data:{
            docState: 'saved',
        },
        computed:{
            buttonMessage(){
                switch (this.docState) {
                    case 'saved': return 'Edit';
                    case 'edited': return 'Save';
                    case 'editing': return 'Cancel';
                }
            },
        },
        methods:{
            changeState(){
                switch (this.docState) {
                    case 'saved': this.docState = 'edited';return;
                    case 'edited': this.docState = 'editing';return;
                    case 'editing': this.docState = 'saved';return;
                }
            },
        }
    });

//    过渡模式
//同步渲染 - 当一个过渡进入时，另一个过渡离开。这是 <transition> 的默认行为 - 进入和离开同时发生。
//    Vue 提供了可选的过渡模式：
//in-out：新元素先过渡进入(transition in)，过渡完成之后，当前元素过渡离开(transition out)。
//out-in：当前元素先过渡离开(transition out)，过渡完成之后，新元素过渡进入(transition in)。

    let app2 = new Vue({
        el: '#app2',
        data:{
            buttonMessage: 'on',
        },
        methods:{
            changeState(){
                if(this.buttonMessage === 'on'){
                    this.buttonMessage = 'off';
                }else {
                    this.buttonMessage = 'on';
                }
            },
        },
    });

    let app3 = new Vue({
        el: '#app3',
        data:{
            view: 'a',
            views: 'v-a',
        },
        computed:{
            views(){
                let input = document.querySelectorAll('#app3')[0].querySelectorAll('input:checked');
                switch (input[0].value){
                    case 'A':
                        return 'v-a';
                        break;
                    case 'B':
                        return 'v-b';
                        break;
                }
            },
        },
        components: {
            'v-a': {
                template: '<div>love</div>'
            },
            'v-b': {
                template: '<div>daidai</div>'
            }
        },
        watch:{
            view(value){
                switch (value){
                    case 'a':
                        this.views = 'v-a';
                        break;
                    case 'b':
                        this.views = 'v-b';
                        break;
                }
            },
        },

    });
</script>
</body>