import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR }  from './types';
const ROOT_URL  = 'http://localhost:3000';

export function signinUser({ email, password }){
    // redux Thunk gives direct access to dispatch

    return function(dispatch){
      // submit email/password to server
      axios.post(`${ROOT_URL}/signin`, {email, password})
      .then(response => {
        console.log(response);
        // if request is good update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // save the JWT token
        localStorage.setItem("token", response.data.token);
        // redirect to feature Router
        browserHistory.push('/feature');
      })
      .catch(()=> {
        // if request is bad show user the error
        dispatch(authError("Bad login Info"));
      });
    };
}

export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
