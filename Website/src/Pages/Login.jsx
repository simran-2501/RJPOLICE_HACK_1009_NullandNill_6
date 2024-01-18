import React from 'react'
import LoginForm from '../Components/LoginForm'
import LoginHeader from '../Components/LoginHeader'

function Login() {
  return (
    <div className='bg-gray-300 h-[100vh]'>
        <LoginHeader/>
        <LoginForm/>
    </div>
  )
}

export default Login