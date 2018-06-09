import React from 'react';

export default class PageA extends React.Component {
  state = {
    b: '2',
  }
  render() {
    return (
      <div>
        PageB
      </div>
    );
  }
}