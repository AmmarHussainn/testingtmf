import React, { useState, useEffect, useRef } from 'react';

const OTPInput = ({ ...props }) => {
  const [otp, setOtp] = useState(props.valueArray || ['', '', '', '']);
  const inputRefs = useRef([]);

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]{1}$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      props.setOtp(newOtp);

      // Move focus to the next input field
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (value === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      props.setOtp(newOtp);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      e.preventDefault();
      if (otp[index] === '') {
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
      } else {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
        props.setOtp(newOtp);
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text');
    if (new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
      const newOtp = text.split('');
      setOtp(newOtp);
      inputRefs.current[otp.length - 1].focus();
    }
  };

  const handleFocus = (index) => {
    inputRefs.current[index].select();
  };

  return (
    <div className=''>
      <div className='flex items-center justify-center gap-3'>
        {otp.map((_, index) => (
          <input
            key={index}
            type='text'
            className='w-14 h-14 text-center text-2xl font-extrabold text-black border border-black  appearance-none rounded p-4 outline-none focus:bg-white  '
            value={otp[index]}
            onChange={(e) => handleInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={() => handleFocus(index)}
            onPaste={handlePaste}
            ref={(el) => (inputRefs.current[index] = el)}
            maxLength={1}
          />
        ))}
      </div>
    </div>
  );
};

export default OTPInput;
