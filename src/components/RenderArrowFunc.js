import React from 'react';

export default class RenderArrowFunc extends React.PureComponent {
  handleClick = () => {
    console.log('arrow button click');
  };

  /*
  shouldComponentUpdate() {
    return false;
  }
  */

  render() {
    console.log('PureComponent RenderArrowFunc cmp rerender');
    return (
      <div>
        <RenderArrowChildren on={() => this.handleClick()} />
      </div>
    );
  }
}
