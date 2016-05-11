import React,  { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';


class Signin extends Component {
  handleFormSubmit({email, password}){
    // call action creator for signing in
    this.props.signinUser({ email, password });

    console.log(email, password);
  }

  render(){
    const {handleSubmit, fields: {email, password}} = this.props;

    return (
      <form onSubmit = {handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className = "form-group">
          <label>Email:</label>
          <input {...email} className = "form-control" />
        </fieldset>
        <fieldset className = "form-group">
          <label>Password:</label>
          <input {...password} className = "form-control" />
        </fieldset>
        <button action = "submit" className = "btn btn-primary">Sign In</button>
      </form>
    );
  }
}
// replaces connect function  - need to pass form fields
export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, null, actions)(Signin);
