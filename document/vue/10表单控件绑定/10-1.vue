<!--基础用法-->

<!--你可以用 v-model 指令在表单控件元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。-->
<!--尽管有些神奇，但 v-model 本质上不过是语法糖，它负责监听用户的输入事件以更新数据，并特别处理一些极端的例子。-->
<!--v-model 并不关心表单控件初始化所生成的值。因为它会选择 Vue 实例数据来作为具体的值。-->
<!--对于需要输入法编辑器的语言（中文、日文、韩文等），要注意的是，-->
<!--在 IME 字母组合窗口输入时 v-model 并不会更新。如果你想在此期间满足更新需求，请使用 input 事件。-->
<div id="app">
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>

    <!--多行文本-->
    <span>Multiline message is:</span>
    <p style="white-space: pre">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
</div>

<!--复选框-->
<!--单个勾选框，逻辑值：-->
<div id="app2">
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label><br>

    <!--多个勾选框，绑定到同一个数组：-->
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span><br>
</div>

<!--单选按钮-->
<div id="app3">
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
</div>

<!--选择列表-->
<div id="app4">
    <!--单选列表:-->
    <select v-model="selected">
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span><br><br>

    <!--多选列表（绑定到一个数组）-->
    <select v-model="selectedA" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <br>
    <span>Selected: {{ selectedA }}</span>
</div>

<!--动态选项-->

<div id="app5">
    <select v-model="selected">
        <option v-for="option in options" :value="option.value">
            {{ option.text }}
        </option>
    </select>
    <span>Selected: {{ selected }}</span>
</div>
<script src="../vue.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        data:{
            message:''
        }
    });
    let app2 = new Vue({
        el: '#app2',
        data:{
            checked:'true',
            checkedNames:['Jack','Mike']//[]来表示model
        }
    });
    let app3 = new Vue({
        el: '#app3',
        data:{
            picked:''
        }
    });
    let app4 = new Vue({
        el: '#app4',
        data:{
            selected:'',
            selectedA:[]
        }
    });
    let app5 = new Vue({
        el:'#app5',
        data:{
            selected: 'A',
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ]
        }
    });
</script>















