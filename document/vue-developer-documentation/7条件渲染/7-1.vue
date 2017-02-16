<!--在 Vue.js ，我们使用 v-if "指令"实现判断功能 也可以用 v-else 添加一个 “else” 块-->
<!--v-else 元素必须紧跟在 v-if 元素或者 v-else-if的后面——否则它不能被识别。-->
<!--v-else-if，顾名思义，用作 v-if 的 else-if 块。可以链式的多次使用：-->
<div id="app">
    <h1 v-if="ok==='love qinqin'">Yes</h1>
    <h1 v-else>No</h1>
    <h1 v-if="ok===love">love qinqin</h1>

    <!--<template> 中 v-if 条件组-->
    <!--因为 v-if 是一个指令，需要将它添加到一个元素上。但是如果我们想切换多个元素呢？-->
    <!--此时我们可以把一个 <template> 元素当做包装元素，并在上面使用 v-if，最终的渲染结果不会包含它。-->
    <template v-if="ok">
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </template>
</div>

<!--使用 key 控制元素的可重用-->
<!--Vue 尝试尽可能高效的渲染元素，通常会复用已有元素而不是从头开始渲染。-->
<!--这么做除了使 Vue 更快之外还可以得到一些好处。-->
<!--下例在代码中切换 loginType 不会删除用户已经输入的内容，两个模版由于使用了相同的元素，-->
<!--<input> 会被复用，仅仅是替换了他们的 placeholder。-->
<div id="app2">
    <template v-if="loginType === 'username'">
        <label>Username</label>
        <input placeholder="Enter your username">
    </template>
    <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email address">
    </template>
    <button @click="toggle">toggle login type</button>

    <!--Vue 提供一种方式让你可以自己决定是否要复用元素。你要做的是添加一个属性 key ，key 必须带有唯一的值。-->
    <!--现在输入文本将会在每次切换时重新渲染。-->
    <br>
    <template v-if="loginType === 'username'">
        <label class="usename">Username</label>
        <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
        <label class="email">Email</label>
        <input placeholder="Enter your email address" key="email-input">
    </template>
</div>

<script src="../vue.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        data:{
            ok:'love qinqin',
            love:'love qinqin',

        }
    });
    let app2 = new Vue({
        el: '#app2',
        data:{
            loginType:'username'
        },
        methods:{
            toggle:function () {
                if (this.loginType === 'username'){
                    this.loginType = 'email'
                }else {
                    this.loginType = 'username'
                }
            }
        }
    });
</script>



















