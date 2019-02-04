import React from 'react';

export default class PureChildren extends React.PureComponent {
  render() {
    console.log(`${this.props.text} PureChildren Render`);
    return <div>PureChildren {this.props.text}</div>;
  }
}
