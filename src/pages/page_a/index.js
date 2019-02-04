import React from 'react';
import PureChildren from './PureChildren';

export default class PageA extends React.Component {
  state = {
    a: 1,
  };

  handleClickPageA = () => {
    this.setState(prevState => {
      console.log(this.state === prevState); // true
      return { a: prevState.a + 1 };
    });
  };

  // 箭头函数传参形式: 子元素会渲染 onMinus={() => this.handleMinus()}
  // handleMinus() {
  //   this.setState(prevState => ({ a: prevState.a - 1 }));
  // }

  // 非箭头函数传参形式: 子元素不会渲染 onMinus={this.handleMinus}
  handleMinus = () => {
    this.setState(prevState => ({ a: prevState.a - 1 }));
  };

  handle1() {}
  handle2 = () => {};

  render() {
    console.log('PageA render');

    return (
      <div>
        <button type="button" onClick={this.handleClickPageA}>
          Change Parent State {this.state.a} ++
        </button>
        {/* <PureChildren onMinus={() => this.handleMinus()} /> */}
        {/* <PureChildren onMinus={this.handleMinus} text="no-arrow" /> */}

        <PureChildren myfunc={this.handle1} text="handle1 no-arrow" />
        <PureChildren myfunc={() => this.handle1} text="handle1 with-arrow" />

        <PureChildren myfunc={this.handle2} text="handle2 no-arrow" />
        <PureChildren myfunc={() => this.handle2} text="handle2 with-arrow" />
      </div>
    );
  }
}
