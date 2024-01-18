import React from 'react';
import BackgroundLogo from '../assets/logo_bg.png';
import Avatar from '../assets/avatar.png';
import { Link } from 'react-router-dom';

function Navbar({ title }) {
  const runCrashDetection = () => {
    fetch('http://localhost:5000/run-script', { method: 'POST' })
      .then(response => response.text())
      .then(data => console.log(data));
  };

  const runLiveDetection = () => {
    fetch('http://localhost:5000/run-live-detection', { method: 'POST' })
      .then(response => response.text())
      .then(data => console.log(data));
  };

  const runANPR = () => {
    fetch('http://localhost:5000/run-anpr', { method: 'POST' })
      .then(response => response.text())
      .then(data => console.log(data));
  };
  return (
    <div className='flex items-center bg-indigo-600 px-5 py-4'>
      <img src={BackgroundLogo} alt="no_logo" width={50} className='mr-2' />

      <Link to='/' className='ml-5 text-white hover:text-gray-300 transition duration-300'>
        <h1 className='font-bold text-2xl capitalize'>DASHBOARD</h1>
      </Link>

      <button onClick={runCrashDetection} className='ml-5 bg-white text-indigo-600 hover:bg-gray-300 transition duration-300 px-3 py-2 rounded'>
        <h1 className='font-bold text-2xl capitalize'>Crash Detection</h1>
      </button>

      <button onClick={runLiveDetection} className='ml-5 bg-white text-indigo-600 hover:bg-gray-300 transition duration-300 px-3 py-2 rounded'>
        <h1 className='font-bold text-2xl capitalize'>Live Detection</h1>
      </button>

      <button onClick={runANPR} className='ml-5 bg-white text-indigo-600 hover:bg-gray-300 transition duration-300 px-3 py-2 rounded'>
        <h1 className='font-bold text-2xl capitalize'>ANPR</h1>
      </button>

    </div>
  );
}

export default Navbar;
