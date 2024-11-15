import React from 'react';
import SvgIcons from './svg';

const Footer = () => {
  return (
    // <footer className=' dark:bg-black border-t-2 border-[#0040FF] '>
    //   <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
    //     <div className='sm:flex sm:items-center sm:justify-between'>
    //     <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-white'>
    //         <li>
    //           <a href='#' className='hover:underline me-4 md:me-6'>
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a href='#' className='hover:underline me-4 md:me-6'>
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a href='#' className='hover:underline me-4 md:me-6'>
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a href='#' className='hover:underline'>
    //            Portfolio
    //           </a>
    //         </li>
    //       </ul>
    //       <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-white'>
    //         <li>
    //           <a href='#' className='hover:underline me-4 md:me-6'>
    //             Facebook
    //           </a>
    //         </li>
    //         <li>
    //           <a href='#' className='hover:underline me-4 md:me-6'>
    //             Twitter
    //           </a>
    //         </li>
    //         <li>
    //           <a href='#' className='hover:underline me-4 md:me-6'>
    //             LinkedIn
    //           </a>
    //         </li>
    //         <li>
    //           <a href='#' className='hover:underline'>
    //            Instagram
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <hr className='my-6 border-[#0040FF] sm:mx-auto dark:border-[#0040FF] lg:my-8' />
    //     <span className='block text-sm text-white sm:text-center dark:text-white'>
    //       © 2024{' '}
    //       <a  className='hover:underline'>
    //         Unitech
    //       </a>
    //       . All Rights Reserved.
    //     </span>
    //   </div>
    // </footer>
    <footer className='relative bg-black '>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap text-left lg:text-left justify-between'>
          <div className='w-full lg:w-4/12 px-4 border border-r-2 border-t-0  border-b-0 border-l-0 border-white pt-20 pb-6 flex justify-center items-center'>
           
              <img
                className='w-[150px]'
                src={process.env.PUBLIC_URL + '/images/Vector.png'}
                alt='Your Company'
              />{' '}
           
           
           
          </div>
          <div className='w-full lg:w-8/12  pt-20  pb-6'>
            <div className='flex px-4 flex-wrap items-top mb-6 border border-r-0 border-t-0  border-b-2 border-l-0 border-white'>
              <div className='w-full lg:w-4/12 px-4 '>
                <span className=' text-white text-[22px] font-poppins mb-6  '>
                Our Services
                </span>
                <ul className='list-unstyled w-full'>
                  <li className="mb-4 mt-4">
                    <a
                      className=' text-white text-[14px] font-poppins '
                      href='#Home'
                    >
                     Text to Image
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=' text-white text-[14px] font-poppins '
                      href='#Home'
                    >
                    Image to Video
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=' text-white text-[14px] font-poppins '
                      href='#Home'
                    >
                     Conventional Video Production
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=' text-white text-[14px] font-poppins '
                      href='#Home'
                    >
                    Animation Video
                    </a>
                  </li>
                 
                </ul>
              </div>
              <div className='w-full lg:w-4/12 px-4 '>
                <span className=' text-white text-[22px] font-poppins mb-6  '>
                Help Center
                </span>
                <ul className='list-unstyled w-full'>
                  <li className="mb-4 mt-4">
                    <a
                      className=' text-white text-[14px] font-poppins '
                      href='#Home'
                    >
                     Contact Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=' text-white text-[14px] font-poppins '
                      href='#Home'
                    >
                    Account
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=' text-white text-[14px] font-poppins '
                      href='#Home'
                    >
                    Support & Registration
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=' text-white text-[14px] font-poppins '
                      href='#Home'
                    >
                   Blog
                    </a>
                  </li>
                 
                </ul>
              </div>  
               <div className='w-full lg:w-4/12 px-4 '>
                <span className=' text-white text-[22px] font-poppins mb-6  '>
                Follow Us
                </span>
                <ul className='list-unstyled w-full'>
                  <li className="mb-4 mt-4">
                    <a
                      className=' text-white text-[14px] font-poppins flex'
                      href='#Home'
                    >
                    <img src={process.env.PUBLIC_URL + '/images/facebook1.png'} alt='facebook' className='w-[26px] h-[26px] me-2' />
                    <img src={process.env.PUBLIC_URL + '/images/instagram1.png'} alt='facebook' className='w-[26px] h-[26px] me-2' />
                    <img src={process.env.PUBLIC_URL + '/images/youtube1.png'} alt='facebook' className='w-[26px] h-[26px] me-2' />
                    </a>
                  </li>
                 
                 
                </ul>
              </div>
            </div>
            <div className='text-sm text-white font-semibold py-1 text-center'>
            Tall Man films ©2024. All Rights Reserved
            </div>
          </div>
        </div>
        {/* <div className='flex flex-wrap items-center md:justify-between justify-center'>
          <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
            <div className='text-sm text-blueGray-500 font-semibold py-1'>
              Copyright ©️ 2024 UNI Tech Agency
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
