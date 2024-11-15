import React from 'react';
import { useState } from 'react';
export const TextInput = ({ ...props }) => {
  const [inputType, setInputType] = useState(props?.type || 'text');

  const toggleInputType = (e) => {
    e.preventDefault();
    setInputType((prevType) => (prevType === 'text' ? 'password' : 'text'));
  };
  return (
    <div className='flex flex-col w-[100%] py-2 gap-2'>
      <div className='text-[14px] md:text-[16px]  font-roboto w-full'>
        {props?.label}
      </div>
      <div
        className={
          props.error
            ? 'border-[1px] border-[#ff0000] flex items-center'
            : 'border-[1px] border-black flex items-center'
        }
      >
        <input
          type={inputType}
          className='p-2 w-full focus:outline-none'
          value={props?.value}
          onInput={props?.onChange}
          placeholder={props?.placeholder}
        />
        {props?.icon && (
          <div
            className='px-2 cursor-pointer'
            onClick={(e) => toggleInputType(e)}
          >
            {props?.icon}
          </div>
        )}
      </div>
      <div className='text-[14px] md:text-[16px]  font-roboto w-full text-[#ff0000]'>
        {props?.error || ''}
      </div>
    </div>
  );
};
