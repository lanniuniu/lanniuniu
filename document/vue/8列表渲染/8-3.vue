<!--数组更新检测-->
<!--变异方法-->
<!--Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新。这些方法如下：-->
    <!--push() 向数组的末尾添加一个或多个元素，并返回新的长度。-->
    <!--pop() 删除并返回数组的最后一个元素。-->
    <!--shift() 把数组的第一个元素从其中删除，并返回第一个元素的值。-->
    <!--unshift() 向数组的开头添加一个或更多元素，并返回新的长度。-->
    <!--splice() 向/从数组中添加/删除项目，然后返回被删除的项目。-->
    <!--sort() 对数组的元素进行排序-->
    <!--reverse() 颠倒数组中元素的顺序。-->

<!--重塑数组-->
<!--变异方法(mutation method)，顾名思义，会改变被这些方法调用的原始数组。-->
<!--相比之下，也有非变异(non-mutating method)方法，例如：-->
<!--filter()返回数组中的满足回调函数中指定的条件的元素array1.filter(callbackfn[, thisArg]),-->
<!--concat()连接两个或更多的数组，并返回结果 ,-->
<!--slice()从某个已有的数组返回选定的元素 。-->
<!--这些不会改变原始数组，但总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组-->

<!--注意事项-->
<!--由于 JavaScript 的限制， Vue 不能检测以下变动的数组：-->
<!--当你利用索引直接设置一个项时，例如： vm.items[indexOfItem] = newValue-->
<!--当你修改数组的长度时，例如： vm.items.length = newLength-->

<!--为了避免第一种情况，以下两种方式将达到像 vm.items[indexOfItem] = newValue 的效果， -->
<!--同时也将触发状态更新：-->
<!--// Vue.set-->
<!--Vue.set(example1.items, indexOfItem, newValue)-->
<!--// Array.prototype.splice`-->
<!--example1.items.splice(indexOfItem, 1, newValue)-->
<!--避免第二种情况，使用 splice：-->
<!--example1.items.splice(newLength)-->

<!--有时，我们想要显示一个数组的过滤或排序副本，而不实际改变或重置原始数据。-->
<!--在这种情况下，可以创建返回过滤或排序数组的计算属性。-->
<div id="app">
    <li v-for="n in evenNumbers">{{ n }}</li>
</div>

<!--或者，你也可以在计算属性不适用的情况下 (例如，在嵌套 v-for 循环中) 使用 method 方法：-->
<div id="app2">
    <li v-for="n in even(numbers)">{{ n }}</li>
</div>
<script src="../vue.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        data:{
            numbers:[0,1,2,3,4,5]
        },
        computed:{
            evenNumbers:function () {
                return this.numbers.filter(function (number) {
                    return number<=3;
                });
            }
        }
    });
    let app2 = new Vue({
        el: '#app2',
        data: {
            numbers: [0,1,2,3,4,5]
        },
        methods:{
            even:function () {
                return this.numbers.filter(function (number) {
                    return number<=3;
                });
            }
        }
    });
</script>












