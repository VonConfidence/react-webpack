import React from 'react';
import ChildrenObject from './ChildrenObject';
// const obj = {};
export default class PageC extends React.Component {
  static obj = {};

  state = {
    c: '3',
  };

  handleClick = () => {
    this.setState({
      c: '4',
    });
  };

  render() {
    // const obj = {}; // 对象放在这里, 每一次渲染都是一个新对象, 所以会造成ChildrenObject 的重新渲染
    return (
      <div>
        <button onClick={this.handleClick}>PageC {this.state.c}</button>
        <ChildrenObject obj={PageC.obj} />
      </div>
    );
  }
}
