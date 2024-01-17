import React from 'react'

function OtpForm() {
  return (
    <div className='bg-white p-10 text-center w-fit rounded-lg m-auto shadow-md'>
    <h1 className='font-bold text-xl'>VERIFICATION</h1>
    <p className='mt-4'>You will get a <span className='font-bold'>OTP</span> via mail</p>
    <p className='mt-4 font-bold text-red-500'>INVALID OTP</p>
   
    <div className='mt-16'>
    <input type="password" placeholder='Enter OTP' className='bg-gray-300 w-96 text-center text-xl placeholder-black px-5 py-5 outline-none rounded-3xl'/>
    </div>
    <button className='mt-10 bg-indigo-600 text-white font-bold py-5 px-16'>VERIFY</button>
    <p className='mt-4'>Didn&apos;t receive the verification OTP  ? </p>
    <p className='text-indigo-600 font-bold'>Resend again</p>
        </div>
  )
}

export default OtpForm