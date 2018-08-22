/*
在大多数情况下，我们推荐使用 受控组件 来实现表单。 在受控组件中，表单数据由 React 组件处理。
如果让表单数据由 DOM 处理时，替代方案为使用非受控组件。
 */

/*
在表单DOM中，添加ref 函数
 */
<label>
  Name:
  <input
    defaultValue="Bob"
    type="text"
    ref={(input) => this.input = input} />
</label>

/*
默认值
defaultValue
 */