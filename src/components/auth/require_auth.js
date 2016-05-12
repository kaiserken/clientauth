import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){
  class Authentication extends Component{

    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount(){
      if(!this.props.authenticated){
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps){
      if (!nextProps.authenticated){
        this.context.router.push('/');
      }
    }

    render(){
    
      return <ComposedComponent {...this.props} />;
    }
  }
  function mapStatetoProps(state){
    return { authenticated: state.auth.authenticated };
  }
  return connect(mapStatetoProps)(Authentication);
}

// this is a higher order component  - in another file we will use this function to wrap another component
// ie .. const ComposedComponent = Authentication(ComponentToWrap);
//<ComposedComponent/>
// this will allow us to show or hide components based on user logged in etc...
// {...this.props} want props in child component - this passes them down the chain
