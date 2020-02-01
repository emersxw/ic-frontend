import React, { useEffect, useState } from 'react';
// import React from 'react';
import axios from './base';

function AddUser() {
  const [values, setValues] = useState({
    email: '',
    use_type: '',
    password: '',
    phone: '',
    full_name: ''
  });

  async function submitData() {
    try {
      const response = await axios.post('/users', {
        email: values.email,
        user_type: values.user_type,
        password: values.password,
        phone: values.phone,
        full_name: values.full_name
      });
    } catch (erro) {
      console.log('erro');
    }
  }

  const handleClick = name => event => {
    setValues({ ...values, [name]: event.target.value });
    console.log(values);
  };

  return (
    <div>
      <h2>Add User</h2>

      <p>Email</p>
      <input name='email' type='text' onChange={handleClick('email')} />

      <p>User_Type</p>
      <input name='user_type' type='text' onChange={handleClick('user_type')} />

      <p>Password</p>
      <input name='password' type='text' onChange={handleClick('password')} />

      <p>Phone</p>
      <input name='phone' type='text' onChange={handleClick('phone')} />

      <p>Full_Name</p>
      <input name='full_name' type='text' onChange={handleClick('full_name')} />

      <button type='submint' onClick={submitData}>
        Send
      </button>
    </div>
  );
}

export default AddUser;
