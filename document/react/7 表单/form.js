/**
 * Created by 懒牛牛 on 2018/8/8.
 */

/*
受控组件
设置监听器，模拟双向绑定
 */
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

/*
input 和 textarea 同理
<input type="text">, <textarea>,
和 <select> 都十分类似 - 他们都通过传入一个value属性来实现对组件的控制。
 */

/*
文件上传
由于value值是只读的，所以它是非受控组件
 */

/*
多个输入的解决方法
当你有处理多个受控的input元素时，
你可以通过给每个元素添加一个name属性，来让处理函数根据 event.target.name的值来选择做什么。
 */
function handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  // 使用ES6当中的计算属性名语法来更新与给定输入名称相对应的状态键
  this.setState({
    [name]: value
  });
}

/*
受控组件的替代方法 —— 非受控组件
使用受控组件很繁琐，因为每一个变化都可能加上事情处理，所以也可以使用代替技术 非受控组件
 */


