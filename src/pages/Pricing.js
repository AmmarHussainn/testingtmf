import React from 'react';
import Header from '../components/Header';
import SvgIcons from '../components/svg';
import Trusted from '../components/Trusted';
import TestiMonials from '../components/testi';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';

export const Pricing = () => {
  // const imageUrl = `${process.env.PUBLIC_URL}/images/OneBack.png`;
  // const bgImageStyle = {
  //   backgroundImage: `url(${imageUrl})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  // };
  const imageUrlOne = `${process.env.PUBLIC_URL}/images/pricingOneBackground.png`;
  const bgImageStyleOne = {
    backgroundImage: `url(${imageUrlOne})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div>
      <Header />

      {/* 1ST SECTION */}

      <div style={bgImageStyleOne} className='flex justify-center '>
        <div className='pt-20 flex flex-col items-center w-[90%]'>
          <h5 className='font-poppins font-semibold text-[14px] md:text-[16px]'>
            Pricing plans
          </h5>
          <h1 className='text-[30px] md:text-[48px] font-bold font-poppins '>
            Introduce pricing plans
          </h1>
          <p className='font-poppins text-[16px] md:text-[18px] pt-3'>
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </p>

          <div className='flex pt-10'>
            <div className='border border-black w-fit py-2 px-4 ml-auto mr-auto cursor-pointer bg-black text-white'>
              Monthly
            </div>
            <div className='border  border-black w-fit py-2 px-4 ml-auto mr-auto cursor-pointer bg-white text-black'>
              Yearly
            </div>
          </div>

          <div className='flex gap-10 justify-center w-[100%] items-center flex-col flex-wrap md:flex-row pb-20 pt-10'>
            <div className='h-[450px] w-[90%] md:w-[375px] flex flex-col gap-y-4 items-center shadow-custom bg-white p-7 rounded-lg'>
              <h4 className='text-[20px] font-bold font-poppins '>
                Baisc Plan
              </h4>
              <div className=' '>
                <div className='flex'>
                  <h3 className='font-bold font-roboto text-[48px] md:text-[56px]'>
                    $19
                  </h3>
                  <h3 className='font-bold font-roboto text-[25px] md:text-[32px] pt-7'>
                    /mo
                  </h3>
                </div>
                <p className='text-[16px] font-poppins text-center'>
                  or $199 yearly
                </p>
              </div>

              <div className='flex flex-col gap-3 pt-7'>
                <span className='flex gap-3'>
                  <SvgIcons.Check />
                  <p className='text-[16px] font-roboto text-center'>
                    Feature text goes here
                  </p>
                </span>
                <span className='flex gap-3'>
                  <SvgIcons.Check />
                  <p className='text-[16px] font-roboto text-center'>
                    Feature text goes here
                  </p>
                </span>
                <span className='flex gap-3'>
                  <SvgIcons.Check />
                  <p className='text-[16px] font-roboto text-center'>
                    Feature text goes here
                  </p>
                </span>
              </div>
              <button className='bg-black text-white w-[100%] py-2 mt-9 '>
                Get started
              </button>
            </div>
            <div className='h-[450px] w-[90%] md:w-[375px] flex flex-col gap-y-4 items-center shadow-custom bg-white p-7 rounded-lg'>
              <h4 className='text-[20px] font-bold font-poppins '>
                Baisc Plan
              </h4>
              <div className=' '>
                <div className='flex'>
                  <h3 className='font-bold font-roboto text-[48px] md:text-[56px]'>
                    $19
                  </h3>
                  <h3 className='font-bold font-roboto text-[25px] md:text-[32px] pt-7'>
                    /mo
                  </h3>
                </div>
                <p className='text-[16px] font-poppins text-center'>
                  or $199 yearly
                </p>
              </div>

              <div className='flex flex-col gap-3 pt-7'>
                <span className='flex gap-3'>
                  <SvgIcons.Check />
                  <p className='text-[16px] font-roboto text-center'>
                    Feature text goes here
                  </p>
                </span>
                <span className='flex gap-3'>
                  <SvgIcons.Check />
                  <p className='text-[16px] font-roboto text-center'>
                    Feature text goes here
                  </p>
                </span>
                <span className='flex gap-3'>
                  <SvgIcons.Check />
                  <p className='text-[16px] font-roboto text-center'>
                    Feature text goes here
                  </p>
                </span>
              </div>
              <button className='bg-black text-white w-[100%] py-2 mt-9 '>
                Get started
              </button>
            </div>
            <div className='h-[450px] w-[90%] md:w-[375px] flex flex-col gap-y-4 items-center shadow-custom bg-white p-7 rounded-lg'>
              <h4 className='text-[20px] font-bold font-poppins '>
                Baisc Plan
              </h4>
              <div className=' '>
                <div className='flex'>
                  <h3 className='font-bold font-roboto text-[48px] md:text-[56px]'>
                    $19
                  </h3>
                  <h3 className='font-bold font-roboto text-[25px] md:text-[32px] pt-7'>
                    /mo
                  </h3>
                </div>
                <p className='text-[16px] font-poppins text-center'>
                  or $199 yearly
                </p>
              </div>

              <div className='flex flex-col gap-3 pt-7'>
                <span className='flex gap-3'>
                  <SvgIcons.Check />
                  <p className='text-[16px] font-roboto text-center'>
                    Feature text goes here
                  </p>
                </span>
                <span className='flex gap-3'>
                  <SvgIcons.Check />
                  <p className='text-[16px] font-roboto text-center'>
                    Feature text goes here
                  </p>
                </span>
                <span className='flex gap-3'>
                  <SvgIcons.Check />
                  <p className='text-[16px] font-roboto text-center'>
                    Feature text goes here
                  </p>
                </span>
              </div>
              <button className='bg-black text-white w-[100%] py-2 mt-9 '>
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2ND SECTION */}
      <div className='bg-[#E9EFFD] flex justify-center'>
        <div className='w-[90%] flex items-center flex-col pt-20'>
          <h1 className=' text-[38px] md:text-[48px] font-bold font-roboto text-center'>
            Compare plans
          </h1>
          <p className=' text-[16px] md:text-[18px] font-poppins text-center w-[100%] md:w-[70%] pt-5 pb-20'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className='w-full'>
            <div className='flex border border-l-0 border-r-0 border-t-0 border-b-1 border-black'>
              <div className='w-0 md:w-[40%] '></div>
              <div className='w-[33.3%] md:w-[20%] flex justify-center border md:border-l-1 border-l-0  border-r-0 border-t-0 border-b-0 border-black'>
                <div className='w-[90%] flex flex-col gap-5 py-5'>
                  <h4 className='text-[20px] font-bold font-roboto'>Basic</h4>
                  <p className='text-[16px]  font-roboto'>Lorem Lipsum</p>
                  <button className='bg-black text-white w-[100%] py-2 '>
                    Get started
                  </button>
                </div>
              </div>
              <div className='w-[33.3%] md:w-[20%] flex justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black'>
                <div className='w-[90%] flex flex-col gap-5 py-5'>
                  <h4 className='text-[20px] font-bold font-roboto'>
                    Business
                  </h4>
                  <p className='text-[16px]  font-roboto'>Lorem Lipsum</p>
                  <button className='bg-black text-white w-[100%] py-2 '>
                    Get started
                  </button>
                </div>
              </div>
              <div className='w-[33.3%] md:w-[20%] flex justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black'>
                <div className='w-[90%] flex flex-col gap-5 py-5'>
                  <h4 className='text-[20px] font-bold font-roboto'>
                    Profesional
                  </h4>
                  <p className='text-[16px]  font-roboto'>Lorem Lipsum</p>
                  <button className='bg-black text-white w-[100%] py-2 '>
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h5 className='text-[18px] md:text-[20px] font-bold font-roboto py-3'>
                Feature Category
              </h5>
            </div>
            {/* 1box */}
            <div className=' flex flex-wrap border border-l-0 border-r-0 border-t-1 border-b-1 border-black'>
              <div className='w-[100%] py-3 md:w-[40%] border border-l-0 border-r-0 border-t-0 border-b-1 md:border-b-0 border-black'>
                <p>Feature text goes here</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-0 md:border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>10</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>25</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>
                  UNLIMITED
                </p>
              </div>
            </div>

            {/* 1box */}

            <div className=' flex flex-wrap border border-l-0 border-r-0 border-t-0 border-b-1 border-black'>
              <div className='w-[100%] py-3 md:w-[40%] border border-l-0 border-r-0 border-t-0 border-b-1 md:border-b-0 border-black'>
                <p>Feature text goes here</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-0 md:border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>10</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>25</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>
                  UNLIMITED
                </p>
              </div>
            </div>

            {/* 1box */}
            <div className=' flex flex-wrap border border-l-0 border-r-0 border-t-0 border-b-1 border-black'>
              <div className='w-[100%] py-3 md:w-[40%] border border-l-0 border-r-0 border-t-0 border-b-1 md:border-b-0 border-black'>
                <p>Feature text goes here</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-0 md:border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>10</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>25</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>
                  UNLIMITED
                </p>
              </div>
            </div>
            {/* 1box */}
            <div className=' flex flex-wrap border border-l-0 border-r-0 border-t-0 border-b-1 border-black'>
              <div className='w-[100%] py-3 md:w-[40%] border border-l-0 border-r-0 border-t-0 border-b-1 md:border-b-0 border-black'>
                <p>Feature text goes here</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-0 md:border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>10</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>25</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>
                  UNLIMITED
                </p>
              </div>
            </div>
            {/* 1box */}
            <div className=' flex flex-wrap border border-l-0 border-r-0 border-t-0 border-b-1 border-black'>
              <div className='w-[100%] py-3 md:w-[40%] border border-l-0 border-r-0 border-t-0 border-b-1 md:border-b-0 border-black'>
                <p>Feature text goes here</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-0 md:border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>10</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>25</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>
                  UNLIMITED
                </p>
              </div>
            </div>
            {/* 1box */}





              <div>
              <h5 className='text-[18px] md:text-[20px] font-bold font-roboto py-3'>
                Feature Category
              </h5>
            </div>
            {/* 1box */}
            <div className=' flex flex-wrap border border-l-0 border-r-0 border-t-1 border-b-1 border-black'>
              <div className='w-[100%] py-3 md:w-[40%] border border-l-0 border-r-0 border-t-0 border-b-1 md:border-b-0 border-black'>
                <p>Feature text goes here</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-0 md:border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>10</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>25</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>
                  UNLIMITED
                </p>
              </div>
            </div>

            {/* 1box */}

            <div className=' flex flex-wrap border border-l-0 border-r-0 border-t-0 border-b-1 border-black'>
              <div className='w-[100%] py-3 md:w-[40%] border border-l-0 border-r-0 border-t-0 border-b-1 md:border-b-0 border-black'>
                <p>Feature text goes here</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-0 md:border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>10</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>25</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>
                  UNLIMITED
                </p>
              </div>
            </div>

            {/* 1box */}
            <div className=' flex flex-wrap border border-l-0 border-r-0 border-t-0 border-b-1 border-black'>
              <div className='w-[100%] py-3 md:w-[40%] border border-l-0 border-r-0 border-t-0 border-b-1 md:border-b-0 border-black'>
                <p>Feature text goes here</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-0 md:border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>10</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>25</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>
                  UNLIMITED
                </p>
              </div>
            </div>
            {/* 1box */}
            <div className=' flex flex-wrap border border-l-0 border-r-0 border-t-0 border-b-1 border-black'>
              <div className='w-[100%] py-3 md:w-[40%] border border-l-0 border-r-0 border-t-0 border-b-1 md:border-b-0 border-black'>
                <p>Feature text goes here</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-0 md:border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>10</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>25</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>
                  UNLIMITED
                </p>
              </div>
            </div>
            {/* 1box */}
            <div className=' flex flex-wrap border border-l-0 border-r-0 border-t-0 border-b-1 border-black'>
              <div className='w-[100%] py-3 md:w-[40%] border border-l-0 border-r-0 border-t-0 border-b-1 md:border-b-0 border-black'>
                <p>Feature text goes here</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-0 md:border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>10</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>25</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>
                  UNLIMITED
                </p>
              </div>
            </div>
            {/* 1box */}





              <div>
              <h5 className='text-[18px] md:text-[20px] font-bold font-roboto py-3'>
                Feature Category
              </h5>
            </div>
            {/* 1box */}
            <div className=' flex flex-wrap border border-l-0 border-r-0 border-t-1 border-b-1 border-black'>
              <div className='w-[100%] py-3 md:w-[40%] border border-l-0 border-r-0 border-t-0 border-b-1 md:border-b-0 border-black'>
                <p>Feature text goes here</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-0 md:border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>10</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>25</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>
                  UNLIMITED
                </p>
              </div>
            </div>

            {/* 1box */}

            <div className=' flex flex-wrap border border-l-0 border-r-0 border-t-0 border-b-1 border-black'>
              <div className='w-[100%] py-3 md:w-[40%] border border-l-0 border-r-0 border-t-0 border-b-1 md:border-b-0 border-black'>
                <p>Feature text goes here</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-0 md:border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>10</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>25</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>
                  UNLIMITED
                </p>
              </div>
            </div>

            {/* 1box */}
            <div className=' flex flex-wrap border border-l-0 border-r-0 border-t-0 border-b-1 border-black'>
              <div className='w-[100%] py-3 md:w-[40%] border border-l-0 border-r-0 border-t-0 border-b-1 md:border-b-0 border-black'>
                <p>Feature text goes here</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-0 md:border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>10</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>25</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>
                  UNLIMITED
                </p>
              </div>
            </div>
            {/* 1box */}
            <div className=' flex flex-wrap border border-l-0 border-r-0 border-t-0 border-b-1 border-black'>
              <div className='w-[100%] py-3 md:w-[40%] border border-l-0 border-r-0 border-t-0 border-b-1 md:border-b-0 border-black'>
                <p>Feature text goes here</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-0 md:border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>10</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>25</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>
                  UNLIMITED
                </p>
              </div>
            </div>
            {/* 1box */}
            <div className=' flex flex-wrap border border-l-0 border-r-0 border-t-0 border-b-1 border-black'>
              <div className='w-[100%] py-3 md:w-[40%] border border-l-0 border-r-0 border-t-0 border-b-1 md:border-b-0 border-black'>
                <p>Feature text goes here</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-0 md:border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>10</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>25</p>
              </div>
              <div className='w-[33.3%] flex py-3 justify-center border border-l-1 border-r-0 border-t-0 border-b-0 border-black md:w-[20%]'>
                <p className='text-[16px] font-semibold font-roboto'>
                  UNLIMITED
                </p>
              </div>
            </div>
            {/* 1box */}
          </div>
        </div>
      </div>

      {/* 3RD SECTION */}

      <Trusted
        className='bg-white'
        text='We Support a Variety of Payment Methods'
        text_classes='font-poppins w-[90%] font-extrabold text-center md:w-fit text-[22px] md:text-[30px] pt-20 pb-10'
      />

      {/* 4TH SECTION */}

      <div className='bg-[#EBF2FF] flex justify-center'>
        <div className='w-[90%] flex flex-col items-center pt-20 pb-20'>
          <h1 className=' text-[38px] md:text-[48px] font-bold font-poppins text-center'>
            Customer Testimonials
          </h1>
          <p className=' text-[16px] md:text-[18px] font-poppins text-center w-[100%] md:w-[70%] pt-5'>
            Join the countless individuals who have found solace, healing, and
            renewed vitality through our compassionate care. Discover firsthand
            the transformative power of acupuncture and integrative medicine at
            Janie Forbes MD's Acupuncture Practice.
          </p>

          <div>
            {/* <Carosal /> */}
            <TestiMonials />
          </div>
        </div>
      </div>

      {/* 5TH SECTION */}

      <div className='bg-white'>
        <FAQs />
      </div>

      {/* 6TH SECTION */}
      <div className='bg-[#ffffff] flex justify-center '>
        <div className='w-[90%] md:w-[60%] pt-40 pb-40 flex flex-col gap-y-5'>
          <h1 className=' text-[38px] md:text-[48px] font-bold font-roboto text-center'>
            Still have a question?
          </h1>
          <p className='text-[16px] md:text-[18px]  font-poppins text-center'>
            Support details to capture customers that might be on the fence.
          </p>

          <div className='border border-black w-fit py-2 px-4 ml-auto mr-auto cursor-pointer hover:bg-black hover:text-white'>
            Contact Us
          </div>
        </div>
      </div>

      {/* 7TH SECTION */}
      <div className=' bg-black'>
        <Footer />
      </div>
    </div>
  );
};
