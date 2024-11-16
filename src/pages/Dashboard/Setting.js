import React from 'react';
import SvgIcons from '../../components/svg';
import { TextInput } from '../../components/TextInput';

export const Setting = () => {
  return (
    <div className='p-3 h-full overflow-scroll'>
      {/* HEADER */}
      <div className='w-[100%] flex justify-end items-center py-3 gap-5'>
        <button className='text-[12px] text-white font-poppins  flex items-center justify-center bg-[#5C57C3] p-3 px-5 w-[143px] rounded-md cursor-pointer'>
          Order a Service
        </button>
        <div className='h-[22px] w-[22px] rounded-full'>
          <img
            className='w-full rounded-full h-full object-cover'
            src={process.env.PUBLIC_URL + '/images/sm.jpg'}
          />
        </div>
        <div>
          <SvgIcons.SSupport />
        </div>
      </div>

      {/* BODY */}

      <div className='pt-5 pb-2 text-[26px] font-poppins'>Setting</div>

      <div className='p-4 border border-black rounded-md'>
        <div className='flex items-center gap-5'>
          <div className='h-[125px] w-[125px]'>
            <img
              src={process.env.PUBLIC_URL + '/images/sm.jpg'}
              className='w-full h-full rounded-full object-cover'
            />
          </div>
          <div>
            <h1 className='text-[26px] font-poppins'>Ahmad Raza</h1>
            <p className='text-[16px] font-poppins'>Ahmad.Raza123@gmail.com</p>
          </div>
        </div>

        <p className='text-[20px] font-poppins py-5'>Personal Details</p>

        <div className='flex gap-5 pb-3'>
          <div className='w-[30%]'>
            <TextInput label='First Name' value='Ahmad' />
          </div>
          <div className='w-[30%]'>
            <TextInput label='Last Name' value='Raza' />
          </div>
        </div>
        <div className='flex gap-5 pb-3'>
          <div className='w-[20%]'>
            <TextInput label='Contact' value='0300-8372835' />
          </div>
          <div className='w-[40%]'>
            <TextInput label='Email' value='Ahmad.Raza123@gmail.com' />
          </div>
        </div>
        <p className='text-[20px] font-poppins py-3'>Change Password</p>

        <div className='flex gap-5 pb-3 items-center'>
          <div className='w-[24%]'>
            <TextInput
              type='password'
              label='Old Password'
              value='0300-8372835'
              icon={<SvgIcons.Eye />}
            />
          </div>
          <div className='w-[24%]'>
            <TextInput
              type='password'
              label='New Password'
              icon={<SvgIcons.Eye />}
            />
          </div>
          <button className='mb-[-24px] text-[12px] h-[40px] text-white font-poppins  flex items-center justify-center bg-[#5C57C3] p-3 px-5 w-[10%] rounded-md cursor-pointer'>
            Save
          </button>
        </div>

        <p className='text-[20px] font-poppins py-3'>Subscription Details</p>
        <div className='flex gap-5 pb-3 items-center'>
          <div className='w-[19.3%]'>
            <TextInput type='text' label='Subscription Type' value='Basic' />
          </div>
          <div className='w-[19.3%]'>
            <TextInput type='text' label='From' value='20-11-2023' />
          </div>
          <div className='w-[19.3%]'>
            <TextInput type='text' label='To' value='20-11-2024' />
          </div>
        </div>

        <div className='flex gap-5 pb-3'>
          <button className='text-[12px] text-white font-poppins  flex items-center justify-center bg-[black] p-3 px-5 w-[30%] rounded-md cursor-pointer'>
            Cancel Subscription
          </button>
          <button className='text-[12px] text-white font-poppins  flex items-center justify-center bg-[#5C57C3] p-3 px-5 w-[30%] rounded-md cursor-pointer'>
            Upgrade Subscription
          </button>
        </div>
      </div>
    </div>
  );
};
