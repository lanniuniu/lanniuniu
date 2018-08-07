/**
 * Created by 懒牛牛 on 2018/8/7.
 */

/*
为一个类添加局部状态 state 私有
 */

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {data: new Date()}
  }
  
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  tick() {
    this.setState({date: new Date()}) // 设置状态
  }
  
  componentDidMount() {// 生命周期钩子
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
}

/*
生命周期
挂载和卸载
 */

/*
正确地使用状态
1.使用setState() 重新渲染组件，除此之外，构造函数是唯一可以初始化state的地方
2.状态更新可能是异步的
React 可以将多个setState() 调用合并成一个调用来提高性能。
这时候就需要使用第二种用法，传入函数
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
3.状态更新合并
 */

/*
数据自顶向下流动
单项数据流
 */

