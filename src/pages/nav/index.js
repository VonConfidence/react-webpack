import React from 'react';
import {NavLink,} from 'react-router-dom';

export default class NavBar extends React.PureComponent {
  render() {
    return (
      <div>
        <NavLink exact
          to="/"
        >
          PageA
        </NavLink>
        <NavLink exact
          to="/b"
        >
          PageB
        </NavLink>
        <NavLink exact
          to="/c"
        >
          PageC
        </NavLink>
      </div>
    );
  }
}