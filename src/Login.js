import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import axios from './base';

import { State } from './Store';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [state, setState] = useContext(State);

  async function submitData() {
    setState({
      ...state,
      loading: true
    });
    try {
      const response = await axios.post('/auth', {
        email: values.email,
        password: values.password
      });

      console.log(response);

      setState({
        ...state,
        token: response.data.token,
        loading: false
      });

      localStorage.token = response.data.token;
      // localStorage.token = null;
    } catch (error) {
      console.log(error.response);
      console.log('oopps');
    }
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    console.log(values);
  };

  return (
    <div>
      <h2>Login</h2>
      <input name='email' type='text' onChange={handleChange('email')} />
      <input name='password' type='text' onChange={handleChange('password')} />
      <button type='submit' onClick={submitData}>
        Send
      </button>
    </div>
  );
}

export default Login;

// const InputWrapper = styled.div`
//   border: 1px solid red;
//   display: flex;
//   flex-direction: column;
//   margin: 10px;
//   padding: 10px;
// `;

// const Input = styled.input`
//   height: 20px;
//   font-size: 16px;
//   margin-top: 10px;
// `;

// function NewProduct() {
//   const [values, setValues] = useState({
//     product_name: '',
//     product_type: '',
//     price: '',
//     size: '',
//     product_description: '',
//     product_image: '',
//   });

//   const handleChange = name => event => {
//     setValues({ ...values, [name]: event.target.value });
//   };

//   async function handleSubmit(event) {
//     event.preventDefault();

//     //
//     console.log('submter dados');

//     const response = await fetch('http://localhost:5000/product', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(values),
//     });

//     const data = await response.json();

//     console.log('====================================');
//     console.log(data);
//     console.log('====================================');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <InputWrapper>
//         <label htmlFor='product-name'>Nome do produto</label>
//         <Input
//           required
//           id='product-name'
//           type='text'
//           value={values.product_name}
//           onChange={handleChange('product_name')}
//         />
//       </InputWrapper>
//       <InputWrapper>
//         <label htmlFor='product-type'>Tipo</label>
//         <Input
//           required
//           id='product-type'
//           type='text'
//           value={values.product_type}
//           onChange={handleChange('product_type')}
//         />
//       </InputWrapper>
//       <InputWrapper>
//         <label htmlFor='price'>preco</label>
//         <Input
//           required
//           id='price'
//           type='text'
//           value={values.price}
//           onChange={handleChange('price')}
//         />
//       </InputWrapper>
//       <InputWrapper>
//         <label htmlFor='size'>tamanho</label>
//         <Input
//           required
//           id='size'
//           type='text'
//           value={values.size}
//           onChange={handleChange('size')}
//         />
//       </InputWrapper>
//       <InputWrapper>
//         <label htmlFor='product_description'>descrição</label>
//         <Input
//           required
//           id='product_description'
//           type='text'
//           value={values.product_description}
//           onChange={handleChange('product_description')}
//         />
//       </InputWrapper>
//       <InputWrapper>
//         <label htmlFor='product_image'>url da image</label>
//         <Input
//           required
//           id='product_image'
//           type='text'
//           value={values.product_image}
//           onChange={handleChange('product_image')}
//         />
//       </InputWrapper>

//       <button type='submit'>Savar produto</button>
//     </form>
//   );
// }
