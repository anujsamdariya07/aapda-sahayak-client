import React from 'react';
import {Filter} from 'lucide-react'
import { agencies } from '../../../constants';
import AgencyDisplayBox from '../AgencyDisplayBox/AgencyDisplayBox';

const Collaborate = () => {
  return (
    <div className='min-h-screen h-auto flex text-lg text-[#173B45] bg-[#] w-[100%]'>
      <div className='p-5 flex flex-col gap-5 items-start justify-center h-full ml-5 w-[100%]'>
        <div className=' w-[100%] flex items-center justify-between'>
          <h1 className='text-4xl font-bold underline w-[90vw]'>
            List Of Agencies
          </h1>
          <button className='flex btn btn-primary text-white mt-5'>
            <Filter/>Filter
          </button>
        </div>

        <div className='flex flex-col w-[100%]'>
          {agencies.map((agency) => (
            <div key={agency}>
              <AgencyDisplayBox 
                id={agency.agencyId}
                agencyName={agency.agencyName}
                headName={agency.headName}
                headContactNumber={agency.headContactNumber}
                expertise={agency.expertise}
                address={agency.address}
                equipmentRequirements={agency.equipmentRequirements}
                workforce={agency.workforce}
                about={agency.about}
                emailAddress={agency.emailAddress}
                password={agency.password}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborate;

const x = () => {
  return (
    <div className='drawer'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label htmlFor='my-drawer' className='btn btn-primary drawer-button'>
          Open drawer
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4'>
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
