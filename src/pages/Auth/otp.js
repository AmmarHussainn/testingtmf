import React, { useState } from 'react';
import { SimpleButton } from '../../components/SimpleButton';
import { useNavigate } from 'react-router-dom';
import OTPInput from '../../components/OTPInput';
export const OTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(4).fill(''));
 

 
  const handleConfirmClick = () => {
      const resetPasswordData = sessionStorage.getItem('reset-password');
      if (resetPasswordData) {
          const dataObject = JSON.parse(resetPasswordData);
          dataObject.otp = otp.join('');
          sessionStorage.setItem('reset-password', JSON.stringify(dataObject));
          navigate("/resetpassword-two");
      }
  }
  return (
    <div className='w-full flex justify-center'>
      <div className='w-[90%] md:w-[480px] border-[1px] border-black flex flex-col items-center mt-20'>
        <h2 className='text-[30px] md:text-[38px] font-bold font-poppins py-3'>
          TMF
        </h2>
        <h1 className='text-[40px] md:text-[48px] font-bold font-roboto '>
          Enter OTP
        </h1>
        <p className='text-[14px] md:text-[18px]  font-roboto py-3 w-[90%] md:w-[80%] text-center'>
          Please enter the four digit code you received on your email
        </p>
        

        <div className='w-[90%] md:w-[80%] py-5'>
          <OTPInput valueArray={otp} setOtp={setOtp} />
        </div>
        {
          console.log(otp)
        }
        <div className='w-[90%] md:w-[80%] pb-8'>
          <SimpleButton
            text='Confirm'
            style='dark'
            onClick={handleConfirmClick}
            disabled={otp.includes('')}
          />
        </div>

        
      </div>
    </div>
  );
};
