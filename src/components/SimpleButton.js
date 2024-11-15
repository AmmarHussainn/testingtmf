import React from 'react';
import { useState } from 'react';
export const SimpleButton = ({ ...props }) => {
  return (
    <div className='w-[100%] py-2'>
      <button
        className={
          props?.style == 'dark'
            ? `bg-black text-[14px] md:text-[16px] font-roboto text-white border-[1px] p-2 border-black w-full active:bg-white active:text-black flex justify-center items-center ${props.disabled && 'pointer-events-none'}`
            : `bg-white text-[14px] md:text-[16px] font-roboto text-black border-[1px] p-2 border-black w-full active:bg-black active:text-white flex justify-center items-center ${props.disabled && 'pointer-events-none'}`
        }
        onClick={props?.onClick}
      >
        {props?.text}
      </button>
    </div>
  );
};
