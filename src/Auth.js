import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './Auth.css'

function AuthContainer() {
  const [LoginForm, setLoginform] = useState(true);
  const handleLoginSubmit = (formData) => {
    console.log('Login:', formData);
  };
  const handleRegisterSubmit = (formData) => {
    console.log('Register:', formData);
  };
  const toggleForm = () => setLoginform(!LoginForm);

  return (
    <div className="auth-container">
      {LoginForm ? (<Login handleLoginSubmit={handleLoginSubmit} />) : (<Register handleRegisterSubmit={handleRegisterSubmit} />)}
      <p>
        {LoginForm ? 
        (<p className='msgAuth'>Don't have an account?{' '}<button className='authButton' onClick={toggleForm}>Register</button></p>): 
        (<p className='msgAuth'>Already have an account?{' '}<button className='authButton' onClick={toggleForm}>Login</button></p>)
        }
      </p>
    </div>
  );
}

export default AuthContainer;
