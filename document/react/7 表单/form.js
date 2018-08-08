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

