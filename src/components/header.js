import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  renderLinks(){
    if (this.props.authenticated){
      return (
        <li className = "nav-item">
          <Link to="/signout" className = "nav-link">Sign Out</Link>
        </li>
      );
    } else {
      return (
        <li className = "nav-item">
          <Link to="/signin" className = "nav-link">Sign In</Link>
        </li>
      );
    }
  }
  render(){
    return (
      <nav className = "navbar navbar-light">
        <Link to = '/' className = 'navbar-brand'>Redux Auth</Link>
        <ul className = "nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }

}
function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated
  };
}
export default connect(mapStateToProps)(Header);
