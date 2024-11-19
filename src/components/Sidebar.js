import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import SvgIcons from './svg';

const Sidebar = () => {
  const { id } = useParams();

  return (
    <nav className='w-full p-3 h-full border border-r-[1px] border-black border-l-0 border-t-0 border-b-0'>
      <div className='flex flex-col justify-between h-[100%]'>
        <div className='py-3'>
          {' '}
          <div className='pb-10'>
            <NavLink to='home' className={'block w-full font-bold'}>
              <h1 className='font-poppins font-bold text-[38px]'>TMF</h1>
            </NavLink>
          </div>
          <div className='py-1'>
            <NavLink
              to='home'
              className={({ isActive }) =>
                isActive
                  ? ' w-full bg-[#EAE9F7] p-2 flex gap-3'
                  : 'p-2 flex gap-3 w-full hover:bg-[#EAE9F1]'
              }
            >
              <SvgIcons.SHome /> Home
            </NavLink>
          </div>
          {/* <div className='py-1'>
            <NavLink
              to='recent'
              className={({ isActive }) =>
                isActive
                  ? ' w-full bg-[#EAE9F7] p-2 flex gap-3'
                  : 'p-2 flex gap-3 w-full hover:bg-[#EAE9F1]'
              }
            >
              <SvgIcons.SRecents />
              Recent
            </NavLink>
          </div>
          <div className='py-1'>
            <NavLink
              to='generate'
              className={({ isActive }) =>
                isActive
                  ? ' w-full bg-[#EAE9F7] p-2 flex gap-3'
                  : 'p-2 flex gap-3 w-full hover:bg-[#EAE9F1]'
              }
            >
              <SvgIcons.SGenerate />
              Generate
            </NavLink>
          </div> */}
        </div>
        <div className='border border-r-0 py-3 border-black border-l-0 border-t-[1px] border-b-[1px]'>
          <div className='py-1'>
            <NavLink
              to='support'
              className={({ isActive }) =>
                isActive
                  ? ' w-full bg-[#EAE9F7] p-2 flex gap-3'
                  : 'p-2 flex gap-3 w-full hover:bg-[#EAE9F1]'
              }
            >
              <SvgIcons.SSupport /> Support
            </NavLink>
          </div>
          <div className='py-1'>
            <NavLink
              to='setting'
              className={({ isActive }) =>
                isActive
                  ? ' w-full bg-[#EAE9F7] p-2 flex gap-3'
                  : 'p-2 flex gap-3 w-full hover:bg-[#EAE9F1]'
              }
            >
              <SvgIcons.SSettings /> Setting
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
