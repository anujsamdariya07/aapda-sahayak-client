import { BadgeHelp, BellRing, CircleUserRound, LogIn, LogOut, Settings, UserRound } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  
  return (
    <div className='h-[10%] bg-[#FF8225] text-white sticky font-mono font-bold p-4 z-50'>
      <div className='flex justify-between items-center'>
        <Link to={'/'}>
          <div className='text-4xl flex gap-1.5'>
            <h1>Aapda</h1>
            <h1>Sahayak</h1>
          </div>
        </Link>

        {isLoggedIn ? (
          <div className='flex gap-4 justify-center items-center'>
            <div className='flex gap-1'>
              <div className='indicator'>
                <span className='indicator-item badge badge-secondary bg-[#173B45] text-[#F8EDED]'>
                  4
                </span>
                <div className='dropdown dropdown-hover'>
                  <div
                    tabIndex={0}
                    role='button'
                    className='btn m-1 bg-[#FF8225] hover:bg-[#FF8225] border-none text-white hover:text-white'
                  >
                    <BellRing />
                    <h3 className='font-semibold'>Notifications</h3>
                  </div>
                  <ul
                    tabIndex={0}
                    className='dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-[#F8EDED] text-[#173B45]'
                  >
                    <li>
                      <a>Notification 1</a>
                    </li>
                    <li>
                      <a>Notification 2</a>
                    </li>
                    <li>
                      <a>Notification 3</a>
                    </li>
                    <li>
                      <a>Notification 4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className='dropdown dropdown-hover dropdown-end'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn m-1 bg-[#FF8225] hover:bg-[#FF8225] border-none text-white hover:text-white'
                >
                  <div className='avatar'>
                    <div className='ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2'>
                      <img src='src\assets\avatar.png' />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-[#F8EDED] text-[#173B45]'
                >
                  <li>
                    <a>
                      <UserRound /> View Profile
                    </a>
                  </li>
                  <li>
                    <a>
                      <Settings /> Settings
                    </a>
                  </li>
                  <li>
                    <a>
                      <BadgeHelp /> Help/Support
                    </a>
                  </li>
                  <li>
                    <a>
                      <LogOut /> Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex gap-4 justify-center items-center pr-8'>
            <div>
              <Link to={'/agency-login'}>
              <button className='flex gap-2 hover:bg-[#fb8a33]'>
                <LogIn /> Login
              </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
