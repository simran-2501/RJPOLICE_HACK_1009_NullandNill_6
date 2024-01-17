import React from 'react'
import BackgroundLogo from '../assets/logo_bg.png'
import Avatar from '../assets/avatar.png'

import { Link } from 'react-router-dom';

function Navbar({ title }) {
  const headerLinks = [
    { title: 'DASHBOARD', path: '/' },
    { title: 'Object Detection', path: '/objectdetection' },
    { title: 'Person Detection', path: '/persondetection' },
    { title: 'Vehicle Detection', path: '/vehicledetection' },
    { title: 'Number Plate Detection', path: '/numberplatedetection' },
  ];

  return (
    <div className='flex items-center bg-indigo-600 px-5'>
      <img src={BackgroundLogo} alt="no_logo" width={50} className='mr-2' />
      {headerLinks.map(({ title, path }, index) => (
        <Link key={index} to={path} className='ml-5 text-white hover:text-gray-300 transition duration-300'>
          <h1 className='font-bold text-2xl capitalize'>{title}</h1>
        </Link>
      ))}
      <img src={Avatar} alt="no_avatar" className='ml-auto' />
    </div>
  );
}



export default Navbar