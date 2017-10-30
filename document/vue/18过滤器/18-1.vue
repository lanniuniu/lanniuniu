<head>
    <meta charset="UTF-8">
</head>
<body>
<div id="app1">
    <p>{{word|noNumber}}</p>
</div>
<script src="../vue.js"></script>
<script>
    /*
    Vue.js 允许你自定义过滤器，可被用作一些常见的文本格式化。过滤器可以用在两个地方：mustache 插值和 v-bind 表达式
     (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符指示：

     <!-- in mustaches -->
{{ message | capitalize }}
<!-- in v-bind -->
<div v-bind:id="rawId | formatId"></div>
过滤器函数总接收表达式的值 (之前的操作链的结果) 作为第一个参数。在这个例子中，capitalize 过滤器函数将会收到 message 的值作为第一个参数。

过滤器可以串联

过滤器是 JavaScript 函数，因此可以接收参数


     */
    let app1 = new Vue({
        el: '#app1',
        data:{
            word:'l1o3v1e4',
        },
        filters:{
            noNumber(value){
                let array = [...value];
                let newArray = array.filter((value)=>{
                    return isNaN(value);
                }).map((value)=>{
                    return value.toUpperCase();
                });
                return newArray.join('');
            },
        },
    });
</script>
</body>