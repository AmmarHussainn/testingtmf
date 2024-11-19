import React, { useState } from 'react';
import SvgIcons from '../../components/svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Generate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [conditions, setConditions] = React.useState('one');
  const [image, setImage] = useState(null);
  const [items, setItems] = useState({
    Name: '',
    Price: '',
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
  const data = [
    {
      heading: 'Text to Video Creation ',
      description: 'Start from scratch',
      con: 'one',
      path: 'texttovideo',
    },
    {
      heading: 'Image To Video',
      description: 'Upload the image and get your video',
      con: 'two',
      path: 'imagetovideo',
    },
    {
      heading: 'Video Menu Generation',
      description: 'Upload product details to get video',
      con: 'three',
      path: 'videomenugeneration',
    },
    {
      heading: 'Food Export Assistant',
      description: 'Explore the market with AI',
      con: 'four',
      path: 'foodexportassistant',
    },
  ];

  console.log('Location ', location);
  console.log('Navigation ', navigate);

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
      {/* GREETINGS */}
      <div className='border border-b-1 border-t-0 border-l-0 border-r-0 pb-9 border-black'>
        <h1 className='font-bold font-roboto text-[38px]'>
          Hello, Ahmad Raza{' '}
        </h1>
        <h3 className='font-poppins text-[24px]'>Good to see you again</h3>
      </div>

      {/* BODY */}
      {/* 1 */}

      {/* <div className='flex justify-between py-3'>
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
      </div> */}

      <div className='flex flex-wrap gap-5 mt-9 py-3'>
        {data.map((item, index) => {
          return (
            <Link
              key={index}
              rel='noopener noreferrer'
              className='bg-[#5C57C3] flex items-center justify-between p-5 w-[35%] h-[187px] rounded-lg group cursor-pointer'
              to={`${window.location.origin}${location.pathname}/${item.path}`}
              target='_blank'
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
            </Link>
          );
        })}
      </div>

      {/* 2 */}

      {/* <div className='w-[70%] border-[1px] border-[#B9B9B9] ml-auto mr-auto mt-10 rounded-lg p-5'>
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
        {conditions === 'one' ? (
          <>
            {' '}
            <h4 className='pt-5 pb-2 font-roboto'>Write your prompt here</h4>
            <textarea
              className='w-full border border-[#B9B9B9] rounded-md p-2 resize-none focus:outline-none focus:border-[1px]'
              rows='16'
            ></textarea>
          </>
        ) : conditions === 'two' ? (
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
        ) : (
          <>
           <h4 className='pt-5 pb-2 font-roboto'>
              Upload Your Image
            </h4>
            <div className='h-[60px] w-full  flex justify-between pb-3'>
                <input value={items.Name} onInput={(e)=>{setItems({...items, Name : e.target.value})}} placeholder='Item Name' className='w-[80%] p-2 border focus:border-[#5C57C3] focus:outline-none border-[#B9B9B9] rounded-md' />
                <input value={items.Price} onInput={(e)=>{setItems({...items, Price : e.target.value})}} placeholder='Item Price' className='w-[17%] p-2 focus:border-[#5C57C3] focus:outline-none border border-[#B9B9B9] rounded-md' />
            </div>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className='w-full border border-[#B9B9B9] border-dashed rounded-md p-2 text-center flex items-center justify-center h-[342px]'
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
        )}

        <div className='flex justify-end pt-3'>
          <button className='text-[12px] text-white font-poppins  flex items-center justify-center bg-[#5C57C3] p-3 px-5 w-[143px] rounded-md cursor-pointer'>
            Get Started
          </button>
        </div>
      </div> */}
    </div>
  );
};
