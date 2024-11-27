import React , {useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const ImageToVideo = () => {
  const user = JSON.parse(localStorage.getItem('user')); 


  const navigate = useNavigate()


  const handleTabVisibility = () => {
    if (document.visibilityState === 'visible') {
      PerformActionOnTabVisible();
    } 
  };

  const PerformActionOnTabVisible = () => {
    let user =  localStorage.getItem('user');
    if(!user) navigate("/login")
  };

  useEffect(() => {
    document.addEventListener('visibilitychange', handleTabVisibility);
    return () => {
      document.removeEventListener('visibilitychange', handleTabVisibility);
    };
  }, []);

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
  const [image, setImage] = useState(null);
  const [items , setItems] = useState({
    Name : '',
    Price : ''
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className='w-full h-[100vh] flex items-center justify-center'>
        <div className='w-[20%] shadow-[4px_-2px_46px_0px_rgba(0,_0,_0,_0.1)] h-[95%] rounded-xl flex flex-col justify-between'>
          <div>
            {' '}
            <div className='p-3'>
            <NavLink to={`/${user?.userId}/dashboard/home`} className='block w-full font-bold'>
              <h1 className='font-poppins font-bold text-[38px]'>TMF</h1>
            </NavLink>
            </div>
            <div className='w-[100%] bg-[#E9EDF7] h-[1px] mt-5'></div>
            <div className='flex w-[70%] justify-start ml-auto mr-auto gap-3 pt-8'>
              <div className='w-[24px] h-[24px]'>
                <img src={process.env.PUBLIC_URL + '/images/AIlogo.png'} />
              </div>
              <h2 className='font-bold font-Poppins text-[16px]'>
              Image to Video
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
        <div className='w-[77%]  h-[95%] p-5 flex flex-col '>
          {/* HEAD */}
          <div className='flex'>
            <h1 className='font-bold font-Poppins text-[34px]'>
              Image to Video
            </h1>
          </div>
          {/* BODY */}

          <div className='h-[75%] w-[73%]  ml-auto mr-auto flex flex-col justify-between mt-10 '>
           
             
          <div className='w-[70%] border-[1px] border-[#B9B9B9] ml-auto mr-auto rounded-lg p-5'>
        <div className='flex gap-8'>
          <div className='flex items-center gap-3'>
            <div className='w-[34px] h-[34px] rounded-full text-white bg-[#5C57C3] flex justify-center items-center text-[18px] font-roboto'>
              1
            </div>
            <div className='text-[12px] font-roboto'>Write your content</div>
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
            <h4 className='pt-5 pb-2 font-roboto'>
              Upload Your Image
            </h4>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className='w-full border border-[#B9B9B9] border-dashed rounded-md p-2 text-center flex items-center justify-center h-[402px]'
            >
              <label
                htmlFor='file-upload'
                className='w-full h-full flex items-center justify-center  rounded-md cursor-pointer'
              >
                <input
                  id='file-upload'
                  type='file'
                  className='hidden'
                  accept='image/*'
                  onChange={handleFileChange}
                />
                {image ? (
                  <img
                    src={image}
                    alt='Uploaded'
                    className='object-contain w-full h-full rounded-md'
                  />
                ) : (
                  <p className='text-gray-600'>
                    Click to add media or drag & drop <br /> Your media will be reviewed by AI to compose your video
                  </p>
                )}
              </label>
            </div>
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
    </>
  );
};
