import React from "react";
import styled from "styled-components";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.updateCountWithValue = this.updateCountWithValue.bind(this);
  }

  updateCountWithValue(value) {
    let count = this.state.count;
    count += value;
    this.setState({
      count: count,
    });
  }

  render() {
    return (
      <Wrapper>
        <div>
          <h1>{this.state.count}</h1>
          <div>
            <Child
              updateCount={this.updateCountWithValue}
              value={1}
              symbol={"+"}
            />
            <Child
              updateCount={this.updateCountWithValue}
              value={-1}
              symbol={"-"}
            />
          </div>
        </div>
      </Wrapper>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <ButtonWrap>
        <button onClick={() => this.props.updateCount(this.props.value)}>
          {this.props.symbol}
        </button>
      </ButtonWrap>
    );
  }
}
const Wrapper = styled.div`
  background-color: black;
  color: silver;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    font-size: 50px;
  }
  div {
    div {
      display: flex;
      margin: 0px 8px;
    }
  }
`;
const ButtonWrap = styled.div`
  button {
    padding: 15px 20px;
    font-size: larger;
    background: linear-gradient(purple, blue);
    border-radius: 10px;
    box-shadow: 0px 2px 4px silver;
    color: silver;
    font-weight: 600;
    cursor: pointer;
    &:active {
      box-shadow: 0px 1px 1px silver;
      padding: 12px 20px;
    }
  }
`;
export default Counter;
