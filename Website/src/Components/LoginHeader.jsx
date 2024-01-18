import React from 'react'
import BackgroundDesign from '../assets/background_design.png'
import BackgroundLogo from '../assets/logo_bg.png'
function LoginHeader() {
  return (
    <div className='flex w-full'>
        <img src={BackgroundDesign} alt="no_design" width={400} height={400}/>
        <img src={BackgroundLogo} alt="no_logo"  className='ml-auto mr-5 mt-5' width={150} height={60}/>

        </div>
  )
}

export default LoginHeader