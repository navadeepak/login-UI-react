import React from 'react';
import Form from './Form';
import './Login.css'

function Login({ handleLoginSubmit }) {
  return (
    <div className='Login'>
      <h1>Login</h1>
    <Form onSubmit={handleLoginSubmit}>
      <label >Email:</label>
      <input type="email" id="email" required/>
      <label >Password:</label>
      <input type="password" id="password" required/>
    </Form>
    </div>
  );
}
export default Login;