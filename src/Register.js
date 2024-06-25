import React from 'react';
import Form from './Form';
import './Register.css'

function Register({ handleRegisterSubmit }) {
  return (
    <div className='Register'>
      <h1>Register</h1>
    <Form onSubmit={handleRegisterSubmit}>
      <label >Email:</label>
      <input type="email" id="email" required/>
      <label >Password:</label>
      <input type="password" id="password" required/>
      <label >Confirm Password:</label>
      <input type="password" id="confirmPassword" required/>
    </Form>
    </div>
  );
}

export default Register;