import React from 'react';

export default class PageB extends React.PureComponent {
  // 将PureComponebt改成Component看看效果
  state = {
    items: [{ a: 1 }, { a: 2 }, { a: 3 }],
  };
  handleClick = () => {
    const { items } = this.state;
    // items[0].a = 3;
    // items.pop();
    // items.splice(items.length - 1, 1);
    this.setState({ items });
    // this.setState({ items: [...items] });
  };
  render() {
    console.log('Parent Rendering', this.state.items);
    return (
      <div>
        <ul>
          {this.state.items.map(i => (
            // <li key={i}>{i}</li>
            <li key={i.a}>{i.a}</li>
          ))}
        </ul>
        {/* <div>{this.state.item[0].a}</div> */}
        <button onClick={this.handleClick}>delete</button>
      </div>
    );
  }
}
