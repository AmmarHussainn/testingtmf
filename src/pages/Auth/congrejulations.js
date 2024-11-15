import React from 'react';
import { SimpleButton } from '../../components/SimpleButton';
import { useNavigate } from 'react-router-dom';

export const Congratulations = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full flex justify-center'>
      <div className='w-[90%] md:w-[480px] border-[1px] border-black flex flex-col items-center mt-20'>
        <h2 className='text-[30px] md:text-[38px] font-bold font-poppins py-3'>
          TMF
        </h2>
        <h1 className='text-[40px] md:text-[48px] font-bold font-roboto '>
        Congratulations
        </h1>
        <p className='text-[14px] md:text-[18px]  font-roboto py-3 w-[90%] md:w-[80%] text-center'>
        You can now sign in with your new password
        </p>
        

        <div className='w-[90%] md:w-[80%] pb-8'>
          <SimpleButton
            text='Sign In'
            style='dark'
            onClick={() => {
             navigate('/login');
            }}
            disabled={false}
          />
        </div>

        {/* <p className='text-[14px] md:text-[16px] flex  font-roboto py-3 pb-5 gap-2'>
            Don't have an account?
          <span className='cursor-pointer underline' onClick={()=>{navigate('/signup')}}>{` Sign Up`}</span>
        </p> */}
      </div>
    </div>
  );
};
