import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='h-[10%] bg-[#173B45] text-[#F8EDED] sticky font-mono font-bold p-1 z-50'>
      <div className='footer text-[#F8EDED] p-10'>
        <aside>
          <h1 className='text-3xl'>Aapda Sahayak</h1>
          <p className='italic'>
            Collaborate, communicate, and come to each other's
            <br /> aid in the face of catastrophe
          </p>
        </aside>
        <nav>
          <h6 className='footer-title'>Services</h6>
          <Link to={'/help'} className='link  link-hover'>
            Help
          </Link>
          <Link to={'/feedback'} className='link  link-hover'>
            Feedback
          </Link>
          <Link to={'/map-overview'} className='link  link-hover'>
            Map Overview
          </Link>
        </nav>
        <nav>
          <h6 className='footer-title'>Company</h6>
          <Link to={'/'} className='link  link-hover'>
            Home
          </Link>
          <Link to={'/emergency-history'} className='link  link-hover'>
            Emergency History
          </Link>
        </nav>
        <nav>
          <h6 className='footer-title'>Legal</h6>
          <Link to={'/'} className='link  link-hover'>
            Terms of use
          </Link>
          <Link to={'/'} className='link  link-hover'>
            Privacy policy
          </Link>
          <Link to={'/'} className='link  link-hover'>
            Cookie policy
          </Link>
        </nav>
        <nav>
          <h6 className='footer-title'>Test Links</h6>
          <Link to={'/collaborate'} className='link  link-hover'>
            Collaborate
          </Link>
          <Link to={'/chat-room'} className='link  link-hover'>
            Chat Room
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
