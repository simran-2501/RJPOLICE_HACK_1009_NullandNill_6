import React, { useState } from 'react';
import { getDatabase, ref, get } from "firebase/database";
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const db = getDatabase();
    const adminRef = ref(db, 'admin');

    try {
      const snapshot = await get(adminRef);
      if (snapshot.exists()) {
        const adminData = snapshot.val();
        if (adminData.username === email && adminData.password === password) {
          navigate('/'); 
        } else {
          setError('Invalid username or password');
        }
      } else {
        setError('No admin data found');
      }
    } catch (error) {
      setError('Failed to fetch admin data');
      console.error(error);
    }
  };

  return (
    <form className='bg-white p-10 text-center w-fit rounded-lg m-auto shadow-md' onSubmit={handleSubmit}>
      <h1 className='font-bold text-xl'>LOGIN AS AN ADMIN</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className='mt-16'>
        <input
          type="email"
          placeholder='Enter Email Address'
          className='bg-gray-300 w-96 placeholder-black px-5 py-5 outline-none rounded-3xl'
          value={email}
          onChange={handleEmailChange}
          />
          </div>
          <div className='my-16'>
          <input
                 type="password"
                 placeholder='Enter Password'
                 className='bg-gray-300 w-96 placeholder-black px-5 py-5 outline-none rounded-3xl'
                 value={password}
                 onChange={handlePasswordChange}
               />
          </div>
          <button
               type="submit"
               className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
             >
          Sign In
          </button>
          </form>
          );
          }
          
          export default LoginForm;