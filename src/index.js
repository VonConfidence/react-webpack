import React, {} from 'react';
import ReactDOM from 'react-dom';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.instance = '点击按钮';
    this.state = {
      a: 1,
    };
  }

  handleClick({ target,}) {
    console.log(target.dataset);
    console.log('this = ' + this);
  }
  render() {
    return (
      <div>
        <button
          data-a={'hello react'}
          onClick={this.handleClick}
        >
          {this.instance}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// function Hello() {
//   console.log('hello Webpack')
//   const h2 = document.createElement('h2')
//   const textNode = document.createTextNode('Hello Webpack');
//   h2.appendChild(textNode)
//   document.body.appendChild(h2)
// }

// Hello();

