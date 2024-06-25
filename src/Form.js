import React, { useState } from 'react';
import './Form.css'

function Form({ onSubmit, title, children }) {
  const [formData, setFormData] = useState({email: '',password: '',confirmPassword: ''});
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    console.log(setFormData);
  };
  return (
    <div className="form-container">
      <form className='common-form' onSubmit={handleSubmit}>
        {children}
        <button className='submit' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
