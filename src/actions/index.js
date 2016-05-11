import axios from 'axios';
const ROOT_URL  = 'http://localhost:3000';

export function signinUser({ email, password }){
    // redux Thunk gives direct access to dispatch

    return function(dispatch){
      // submit email/password to server
      axios.post(`${ROOT_URL}/signin`, {email, password});
      
      // if request is good update state to indicate user is authenticated
      // save the JWT token
      // redirect to feature Router

      // if request is bad show user the error


    };

}
