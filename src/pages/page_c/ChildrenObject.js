import React from 'react';

export default class ChildrenObject extends React.PureComponent {
  render() {
    console.log('ChildrenObject Render', this.props.obj);
    return <div>PageC</div>;
  }
}
