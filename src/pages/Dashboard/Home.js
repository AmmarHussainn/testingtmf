import React, { useEffect, useState } from 'react';
import DropDown from '../../components/DropDown';
import SvgIcons from '../../components/svg';
import FormPopup from '../../components/FormPopup';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Dashboard_Home = () => {
  // const [conditions, setConditions] = React.useState('one');
  const location = useLocation();
  const [user, setUser] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  console.log('isPopupOpen',isPopupOpen);
  const navigate = useNavigate()
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  const handleMenuItemClick = (service) => {
    console.log(`Selected service: ${service}`);
    setSelectedService(service);
    setIsPopupOpen(false)
    setIsPopupOpen(true); 
  };

  const handleButtonClick = () => {
    console.log('Dropdown button clicked');
  };

  const handleFormSubmit = async (data) => {
    try {
      const response = await fetch(
        ' https://tmf-backend.onrender.com/orders/create',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log('Order created successfully:', result);
    } catch (error) {
      console.error('Error creating order:', error);
    }
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
  return (
    <div className='p-3 h-full overflow-scroll'>
      {/* HEADER */}
      <div className='w-[100%] flex justify-end items-center py-3 gap-5'>
        <DropDown
          onMenuItemClick={handleMenuItemClick}
          onButtonClick={handleButtonClick}
        />

        {isPopupOpen && (
          <FormPopup
            setFpopup={setIsPopupOpen}
            service={selectedService}
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            onSubmit={handleFormSubmit}
            userCredentials={user}
          />
        )}

<button
         onClick={()=>{
          localStorage.removeItem("user");
          navigate('/login')
         }}
         className='text-[12px] text-white font-poppins flex items-center justify-center bg-[#c62631] p-3 px-5 w-[143px] rounded-md cursor-pointer'>
        Logout
          {/* <SvgIcons.Logout/>   */}
        </button>
       
      </div>
      {/* GREETINGS */}
      <div>
        <h1 className='font-bold font-roboto text-[38px]'>Hello, {user?.name}</h1>
        <h3 className='font-poppins text-[24px]'>Good to see you again</h3>
      </div>

      {/* BODY */}
      {/* 1 */}

      <div className='pt-10 pb-2 text-[24px] font-roboto'>
        Generate New Videos
      </div>
      <div className='flex flex-wrap gap-5 mt-9 py-3'>
        {data.map((item, index) => {
          return (
            <Link
              key={index}
              rel='noopener noreferrer'
              className='bg-[#5C57C3] flex items-center justify-between p-5 w-[30%] h-[157px] rounded-lg group cursor-pointer'
              to={`${window.location.origin}${location.pathname.replace('home','generate')}/${item.path}`}
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
      {/* <div className='flex justify-between py-3'>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className='bg-[#5C57C3] flex items-center justify-between p-5 w-[32%] rounded-lg group cursor-pointer'
              // onClick={() => setConditions(item.con)}
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

      {/* 2 */}

      {/* <div className='pt-5 pb-2 text-[18px] font-roboto'>
        Your Recent Videos
      </div>

      <div className='flex justify-between gap-y-5 flex-wrap'>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'>
          <SvgIcons.VideoSkeleton />
        </div>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'>
          <SvgIcons.VideoSkeleton />
        </div>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'>
          <SvgIcons.VideoSkeleton />
        </div>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'>
          <SvgIcons.VideoSkeleton />
        </div>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'>
          <SvgIcons.VideoSkeleton />
        </div>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'>
          <SvgIcons.VideoSkeleton />
        </div>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'>
          <SvgIcons.VideoSkeleton />
        </div>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'>
          <SvgIcons.VideoSkeleton />
        </div>
        <div className='bg-[#D9D9D9] w-[32%] h-[162px] flex justify-center items-center rounded-md'>
          <SvgIcons.VideoSkeleton />
        </div>
      </div> */}
    </div>
  );
};
