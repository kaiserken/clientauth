import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component{
  componentWillMount(){
    this.props.fetchMessage();
  }
  render(){
    return (
      <div>You are now authorized and this is a feature. {this.props.message}</div>
    );

  }
}
function mapStatetoProps(state){
  return {message: state.auth.message};
}

export default connect(mapStatetoProps, actions)(Feature);
