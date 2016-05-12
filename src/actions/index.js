import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE }  from './types';
const ROOT_URL  = 'http://localhost:3000';

export function signoutUser(){

  localStorage.removeItem('token');

  return { type: UNAUTH_USER};
}
export function signupUser({ email, password }){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signup`, {email, password})
    .then(response => {
      console.log(response);
      // if request is good update state to indicate user is authenticated
      dispatch({ type: AUTH_USER });
      // save the JWT token
      localStorage.setItem("token", response.data.token);
      // redirect to feature Router
      browserHistory.push('/feature');
    })
    .catch((response)=> {
      // if request is bad show user the error
      dispatch(authError(response.data.error));
    });
  };
}

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

export function fetchMessage(){
  return function(dispatch){
    axios.get(ROOT_URL, {
      headers: {authorization: localStorage.getItem('token')}
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  };
}
