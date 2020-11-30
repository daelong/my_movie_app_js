import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  // 이렇게 해줌으로써 class App은 react component가 됨, React.Component에는 많은 것들을 가지고 있다. state도 포함
  //이건 함수가 아니라 return을 가지고 있지 않다. 대신 render함수를 가질수 있다.
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    //component가 처음으로 올라갔을때 render 후 실행됨
    console.log("Component rendered");
  }
  componentDidUpdate() {
    //component가 업데이트 되고 나서 render 후 실행됨
    console.log("I just updated");
  }
  componentWillUnmount() {
    //unmounting에 있는것으로 component가 죽고 나서 render 후 실행됨
    console.log("Good bye, cruel world");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is a {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
