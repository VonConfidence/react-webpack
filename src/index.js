import React from 'react';
import ReactDOM from 'react-dom';

import NavLink from './pages/nav';
import PageA from './pages/page_a';
import PageB from './pages/page_b';
import PageC from './pages/page_c';
import StyledComponentsContainer from './styled-components-demo/container';

import { BrowserRouter as Router, Route, } from 'react-router-dom';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.instance = '点击按钮123';
    this.state = {
      a: 1,
    };
  }

  handleClick({ target, }) {
    console.log(target.dataset);
    console.log('this = ' + this);
  }
  render() {
    return (
      <div>
        <button data-a={'hello react'}
          onClick={this.handleClick}
        >
          {this.instance}
        </button>
        <Router>
          <div>
            <NavLink />
            <Route component={PageA}
              exact
              path="/"
            />
            <Route component={PageB}
              path="/b"
            />
            <Route component={PageC}
              path="/c"
            />
            <Route component={StyledComponentsContainer}
              path="/style"
            />
          </div>
        </Router>
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
