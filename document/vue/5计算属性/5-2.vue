<!--观察 Watchers-->

<!--虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的 watcher 。-->
<!--这是为什么 Vue 提供一个更通用的方法通过 watch 选项，来响应数据的变化。-->
<!--当你想要在数据变化响应时，执行异步操作或开销较大的操作，这是很有用的。-->

<div id="watch-example">
    <p>
        Ask a yes/no question:
        <input v-model="question">
    </p>
    <p>{{ answer }}</p>
</div>
<script src="../vue.js"></script>
<script src="https://unpkg.com/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://unpkg.com/lodash@4.13.1/lodash.min.js"></script>
<script>
    var watchExampleVM = new Vue({
        el: '#watch-example',
        data: {
            question: '',
            answer: 'I cannot give you an answer until you ask a question!'
        },
        watch: {
            // 如果 question 发生改变，这个函数就会运行
            question: function (newQuestion) {
                this.answer = 'Waiting for you to stop typing...'
                this.getAnswer()
            }
        },
        methods: {
            // _.debounce 是一个通过 lodash 限制操作频率的函数。
            // 在这个例子中，我们希望限制访问yesno.wtf/api的频率
            // ajax请求直到用户输入完毕才会发出
            // 学习更多关于 _.debounce function (and its cousin
            // _.throttle), 参考: https://lodash.com/docs#debounce
            getAnswer: _.debounce(
                function () {
                    if (this.question.indexOf('?') === -1) {
                        this.answer = 'Questions usually contain a question mark. ;-)'
                        return
                    }
                    this.answer = 'Thinking...'
                    var vm = this
                    axios.get('https://yesno.wtf/api')
                        .then(function (response) {
                            vm.answer = _.capitalize(response.data.answer)
                        })
                        .catch(function (error) {
                            vm.answer = 'Error! Could not reach the API. ' + error
                        })
                },
                // 这是我们为用户停止输入等待的毫秒数
                500
            )
        }
    })
</script>








