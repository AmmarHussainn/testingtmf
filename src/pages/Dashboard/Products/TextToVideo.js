import React from 'react';
import { NavLink } from 'react-router-dom';

export const TextToVideo = () => {
  const user = JSON.parse(localStorage.getItem('user')); 

  const questions = [
    {
      questoin: `What's`,
    },
    {
      questoin: `What's in`,
    },
    {
      questoin: `What's in your`,
    },
    {
      questoin: `What's in your mind?`,
    },
    {
      questoin: `What's in your mind?...`,
    },
  ];
  return (
    <div>
      <div className='w-full h-[100vh] flex items-center justify-center'>
        <div className='w-[20%] shadow-[4px_-2px_46px_0px_rgba(0,_0,_0,_0.1)] h-[95%] rounded-xl flex flex-col justify-between'>
          <div>
            {' '}
            <div className='p-3'>
            <NavLink to={`/${user?.userId}/dashboard/home`} className='block w-full font-bold'>
              <h1 className='font-poppins font-bold text-[38px]'>TMF</h1>
            </NavLink>
            </div>
            <div className='w-[100%] bg-[#E9EDF7] h-[1px]  mt-5'></div>
            <div className='flex w-[80%] justify-start ml-auto mr-auto gap-3 pt-8'>
              <div className='w-[24px] h-[24px]'>
                <img src={process.env.PUBLIC_URL + '/images/AIlogo.png'} />
              </div>
              <h2 className='font-bold font-Poppins text-[16px]'>
                Text to Video
              </h2>
            </div>
            {questions.map((item, idx) => {
              return (
                <div className='flex w-[70%] ml-auto mr-auto justify-start gap-3 pt-7'>
                  <div className='w-[18px] h-[16px]'>
                    <img
                      src={process.env.PUBLIC_URL + '/images/chatIcon.png'}
                    />
                  </div>
                  <h2 className=' font-Poppins text-[14px] text-[#00000066]'>
                    {item.questoin}
                  </h2>
                </div>
              );
            })}
          </div>
          <div div>
            <div className='w-[85%] p-5 ml-auto mr-auto rounded-2xl text-center gap-3 flex flex-col bg-custom-gradient'>
              <h3 className='font-bold font-Poppins text-[18px] text-white'>
                Go unlimited with TMF
              </h3>
              <p className='font-medium font-Poppins text-[14px]  text-white'>
                Get your exports to another level and start doing more with TMF
                AI Tools!
              </p>
              <button className=' text-white p-3 bg-[#ffffff24] rounded-full'>
                Get started with TMF
              </button>
            </div>
            <div className='w-[85%] p-5 ml-auto mr-auto rounded-full text-center flex shadow-[4px_-2px_46px_0px_rgba(0,_0,_0,_0.1)] mt-4 mb-4 justify-between'>
              <div className='flex items-center gap-3'>
                {' '}
                <div className='w-[34px] h-[34px] '>
                  <img src={process.env.PUBLIC_URL + '/images/mohsin.png'} />
                </div>
                <h3 className='font-bold font-Poppins text-[14px] '>Mohsin</h3>
              </div>
              <div className='w-[34px] h-[34px] cursor-pointer '>
                <img src={process.env.PUBLIC_URL + '/images/Logout.png'} />
              </div>
            </div>
          </div>
        </div>
        <div className='w-[77%]  h-[95%] p-5 flex flex-col'>
          {/* HEAD */}
          <div className='flex'>
            <h1 className='font-bold font-Poppins text-[34px]'>
              Text to Video
            </h1>
          </div>
          {/* BODY */}

          <div className=' h-[75%] w-[73%]  ml-auto mr-auto flex flex-col justify-between '>
            <div className='w-[70%] border-[1px] border-[#B9B9B9] ml-auto mr-auto mt-10 rounded-lg p-5'>
              <div className='flex gap-8'>
                <div className='flex items-center gap-3'>
                  <div className='w-[34px] h-[34px] rounded-full text-white bg-[#5C57C3] flex justify-center items-center text-[18px] font-roboto'>
                    1
                  </div>
                  <div className='text-[12px] font-roboto'>
                    Write your content
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-[34px] h-[34px] rounded-full text-[#A6A6A6] bg-[#DCDCDC] flex justify-center items-center text-[18px] font-roboto'>
                    2
                  </div>
                  <div className='text-[12px] font-roboto'>Preview Video</div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-[34px] h-[34px] rounded-full text-[#A6A6A6] bg-[#DCDCDC] flex justify-center items-center text-[18px] font-roboto'>
                    3
                  </div>
                  <div className='text-[12px] font-roboto'>Download</div>
                </div>
              </div>

              <>
                {' '}
                <h4 className='pt-5 pb-2 font-roboto'>
                  Write your prompt here
                </h4>
                <textarea
                  className='w-full border border-[#B9B9B9] rounded-md p-2 resize-none focus:outline-none focus:border-[1px]'
                  rows='16'
                ></textarea>
              </>

              <div className='flex justify-end pt-3'>
                <button className='text-[12px] text-white font-poppins  flex items-center justify-center bg-[#5C57C3] p-3 px-5 w-[143px] rounded-md cursor-pointer'>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
