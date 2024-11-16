import React , {useState} from 'react';
import DropDown from '../../components/DropDown';
import SvgIcons from '../../components/svg';

export const Dashboard_Home = () => {
  const [conditions, setConditions] = React.useState('one');
  const data = [
    {
      heading: 'Text to Video Creation ',
      description: 'Start from scratch',
      con: 'one',
    },
    {
      heading: 'Image To Video',
      description: 'Upload the image and get your video',
      con: 'two',
    },
    {
      heading: 'Video Menu Generation',
      description: 'Upload product details to get video',
      con: 'three',
    },
  ];
  return (
    <div className='p-3 h-full overflow-scroll'>
      {/* HEADER */}
      <div className='w-[100%] flex justify-end items-center py-3 gap-5'>
       <DropDown />
      </div>
      {/* GREETINGS */}
      <div>
        <h1 className='font-bold font-roboto text-[38px]'>
          Hello, Ahmad Raza{' '}
        </h1>
        <h3 className='font-poppins text-[24px]'>Good to see you again</h3>
      </div>


       {/* BODY */}
      {/* 1 */}


      <div className='pt-10 pb-2 text-[18px] font-roboto'>Generate New Videos</div>

      <div className='flex justify-between py-3'>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className='bg-[#5C57C3] flex items-center justify-between p-5 w-[32%] rounded-lg group cursor-pointer'
              onClick={() => setConditions(item.con)}
            >
              <div>
                <h1 className='text-[22px] text-white font-bold font-roboto'>
                  {item.heading}
                </h1>
                <p className='text-[16px] text-white font-roboto'>
                  {item.description}
                </p>
              </div>
              <div className='rounded-full w-[32px] h-[32px] bg-white flex justify-center items-center transform transition-transform duration-500 group-hover:rotate-180'>
                <SvgIcons.Plus />
              </div>
            </div>
          );
        })}
      </div>

      {/* 2 */}

      <div className='pt-5 pb-2 text-[18px] font-roboto'>Your Recent Videos</div>

      <div className='flex justify-between gap-y-5 flex-wrap'>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'><SvgIcons.VideoSkeleton /></div>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'><SvgIcons.VideoSkeleton /></div>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'><SvgIcons.VideoSkeleton /></div>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'><SvgIcons.VideoSkeleton /></div>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'><SvgIcons.VideoSkeleton /></div>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'><SvgIcons.VideoSkeleton /></div>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'><SvgIcons.VideoSkeleton /></div>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'><SvgIcons.VideoSkeleton /></div>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'><SvgIcons.VideoSkeleton /></div>
      </div>

    </div>
  );
};
