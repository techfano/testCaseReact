import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {

  render() {
    return (
        <div>
          <header className="black">
            <div className="brand">
              Data Gate
            </div>
            <NavLink to="/page/manage"
              className="option right"
              activeClassName="selected">
                Manage
            </NavLink>
            <NavLink to="/page/request"
              className="option right"
              activeClassName="selected">
                Request
            </NavLink>
            <NavLink to="/page/review"
              className="option right"
              activeClassName="selected">
                Review
            </NavLink>
          </header>
          
        </div>
    );
  }
}
