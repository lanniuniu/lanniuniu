<!--v-for-->
<!--我们用 v-for 指令根据一组数组的选项列表进行渲染。-->
<!--v-for 指令需要以 item in items 形式的特殊语法， items 是源数据数组并且 item 是数组元素迭代的别名。-->
<!--在 v-for 块中，我们拥有对父作用域属性的完全访问权限。 v-for 还支持一个可选的第二个参数为当前项的索引。-->
<div id="app">
    <ul>
        <li v-for="(item,index) of items">
            {{ parentMessage }} - {{ index }} - {{ item }}
        </li>
        <li v-for="(item,index) of loves">
            {{ parentMessage }} - {{ index }} - {{ item.miss }}
        </li>
    </ul>
</div>

<!--Template v-for-->
<!--如同 v-if 模板，你也可以用带有 v-for 的 <template> 标签来渲染多个元素块。-->

<!--对象 v-for-->
<!--你也可以用 v-for 通过一个对象的属性来迭代。-->
<!--你也可以提供第二个的参数为键名：-->
<!--第三个参数为索引：-->
<div id="app2">
    <ul class="demo">
        <li v-for="(value, key, index) in object">
            {{ index }}. {{ key }} : {{ value }}
        </li>
    </ul>
</div>

<!--范围 v-for-->
<!--v-for 也可以取整数。在这种情况下，它将重复多次模板。-->
<div id="app3">
    <span v-for="n in 10">{{ n }}</span>
</div>

<!--在自定义组件里，你可以像任何普通元素一样用 v-for 。但是，-->
<!--他不能自动传递数据到组件里，因为组件有自己独立的作用域。为了传递迭代数据到组件里，我们要用 props -->
<div id="app4">
    <input
            v-model="newTodoText"
            v-on:keyup.enter="addNewTodo"
            placeholder="Add a todo"
    >
    <ul>
        <li
                is="todo-item"
                v-for="(todo, index) in todos"
                v-bind:title="todo"
                v-on:remove="todos.splice(index, 1)"
        ></li>
    </ul>
</div>

<!--简单点-->
<div id="app5">
    <ul>
        <love-qinqin is="love-qinqin" v-for="item of items" :title="item"></love-qinqin>
    </ul>
</div>

<!--v-for with v-if-->
<!--当它们共存于同一节点上时，v-for具有比v-if更高的优先级。 -->
<!--这意味着v-if将分别在循环的每次迭代上运行。 当你只想要渲染某些部分项的节点时非常有用-->
<!--如果相反地，你的意图是按条件跳过循环的执行，你可以将v-if放在一个包装元素（或<template>）里面。 例如：-->

<div id="app6">
    <ul>
        <li v-for="item of items" v-if="item" ></li>
    </ul>
</div>
<script src="../vue.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        data:{
            parentMessage:'love',
            items:[
                'qinqin','qinqin'
            ],
            loves:[
                {miss:'qinqin'},
                {miss:'qinqin'}

            ]
        }
    });
    let app2 = new Vue({
        el: '#app2',
        data: {
            object: {
                firstName: 'John',
                lastName: 'Doe',
                age: 30
            }
        }
    });
    let app3 = new Vue({
        el: '#app3',
    });
    Vue.component('todo-item', {
        template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',//"\"反斜杠的意思是无缝连接空格符和换行符
        props: ['title']
    });
    let app4 = new Vue({
        el: '#app4',
        data: {
            newTodoText: '',
            todos: [
                'love qinqin',
                'miss qinqin',
            ]
        },
        methods: {
            addNewTodo: function () {
                console.log(this);
                this.todos.push(this.newTodoText);
                this.newTodoText = '';
            }
        }
    });
    Vue.component('love-qinqin',{
        template:'<li>{{title}}</li>',
        props:['title']
    });
    let app5 = new Vue({
        el: '#app5',
        data:{
            items:['love','miss']
        }
    });
    let app6 = new Vue({
        el: '#app6',
        data:{
            items:[
                'love qinqin',
                'miss qinqin'
            ]
        },
        methods:{
            isComplete:(x)=>{
                if(typeof x ==='string'){
                    return true
                }
                return false;
            }
        }
    });
</script>














