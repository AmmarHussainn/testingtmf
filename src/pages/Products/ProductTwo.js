import React, { useState } from 'react';
import Header from '../../components/Header';
import SvgIcons from '../../components/svg';
import Footer from '../../components/Footer';
import Popup from '../../components/popup';

export const ProductTwo = () => {
  const [popup , setPopup] = useState(false) 
  const imageUrl = `${process.env.PUBLIC_URL}/images/gradient-bg.png`;
  const bgImageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const imageUrlThree = `${process.env.PUBLIC_URL}/images/pricingOneBackground.png`;
  const bgImageStyleThree = {
    backgroundImage: `url(${imageUrlThree})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div>
      <Header />

      {/* 1ST SECTION */}

      <div
        style={bgImageStyle}
        className='h-[calc(100vh-84px)] md:h-[calc(100vh-60px)] gap-20 md:gap-0 w-100 flex items-center flex-col md:flex-row justify-center'
      >
        <div className='w-[90%] md:w-[55%] flex flex-col px-0  md:px-10 gap-4 md:gap-8'>
          <h1 className='text-[30px] md:text-[48px] font-bold font-poppins text-white '>
            Image to Video Generation
          </h1>
          <p className='font-poppins text-[16px] md:text-[18px] text-white'>
            Transform your static images into captivating videos with our
            AI-powered Image to Video generation tool
          </p>
          <div className='flex gap-7 items-center'>
            <p className='font-poppins text-[14px] md:text-[16px] text-white'>
              Easier
            </p>
            <SvgIcons.Circle />
            <p className='font-poppins text-[14px] md:text-[16px] text-white'>
              Faster
            </p>
            <SvgIcons.Circle />
            <p className='font-poppins text-[14px] md:text-[16px] text-white'>
              Reliable
            </p>
          </div>
          <div onClick={()=>setPopup(!popup)}  className=' flex items-center justify-center bg-[#5C57C3] p-3 px-5 w-[280px] rounded-md cursor-pointer'>
            <a className='text-[12px] text-white font-poppins '>
            Join the Waitlist
            </a>
          </div>
        </div>
        <div className='w-[80%] md:w-[40%] px-10'>
          <img src={process.env.PUBLIC_URL + '/images/imgtovidOne.png'} />
        </div>
      </div>

      {/* 2ND SECTION */}

      <div className='bg-[#E9EFFD] py-20 flex items-center flex-col md:flex-row justify-center'>
        <div className='w-[90%] md:w-[50%] flex flex-col px-0  md:px-10 gap-4 md:gap-8'>
          <h1 className='text-[30px] md:text-[48px] font-bold font-poppins '>
            How Our Image to Video Generation Tool Works?
          </h1>
          <p className='font-poppins text-[16px] md:text-[18px] text-justify'>
            Our Image to Video generation tool transforms static images into
            dynamic, engaging videos with ease. Utilizing cutting-edge AI and
            machine learning technologies, our platform allows you to create
            high-quality videos from your images without any advanced video
            editing skills. Ideal for marketers, educators, and content
            creators, this tool streamlines the video production process, saving
            time and enhancing your content’s visual appeal and impact. Our
            Image to Video generation tool is powered by a state-of-the-art AI
            model that excels in creating visually captivating videos. Using
            sophisticated image recognition and computer vision algorithms, the
            AI seamlessly integrates your images with animations, transitions,
            and soundtracks to produce high-quality videos. This robust model
            ensures that each video is not only professional-grade but also
            uniquely tailored to your specifications.
          </p>
        </div>
        <div className='w-[80%] md:w-[40%] px-10'>
          <img
            src={
              process.env.PUBLIC_URL +
              '/images/imgtovidTwo.png'
            }
          />
        </div>
      </div>

      {/* 3RD SECTION */}

      <div className='flex justify-center items-center flex-col bg-[#DDE6FC]'>
        <h2 className='text-[30px] text-center md:text-[40px] font-bold font-poppins pt-20 pb-10'>
        Advanced AI Technology
        </h2>

        <div className='flex gap-10 justify-center items-center flex-col flex-wrap md:flex-row pb-20'>
          <div className='h-[230px] w-[90%] md:w-[140px] flex flex-col gap-y-4 items-center    '>
            <div className='bg-[#5C57C3] w-[140px] h-[140px] flex items-center justify-center rounded-lg'>
              <img
                className='w-[60px] h-[40px]'
                src={process.env.PUBLIC_URL + '/images/3x.png'}
              />
            </div>

            <p className='text-[14px] md:text-[16px] font-poppins text-center'>
            Faster And Accurate NLP Model
            </p>
          </div>

          <div className='h-[230px] w-[90%] md:w-[140px] flex flex-col gap-y-4 items-center    '>
            <div className='bg-[#5C57C3] w-[140px] h-[140px] flex items-center justify-center rounded-lg'>
              <img
                className='w-[78px] h-[78px]'
                src={
                  process.env.PUBLIC_URL +
                  '/images/eos-icons_machine-learning-outlined.png'
                }
              />
            </div>

            <p className='text-[14px] md:text-[16px] font-poppins text-center'>
            Machine Learning Algorithms
            </p>
          </div>
          <div className='h-[230px] w-[90%] md:w-[140px] flex flex-col gap-y-4 items-center    '>
            <div className='bg-[#5C57C3] w-[140px] h-[140px] flex items-center justify-center rounded-lg'>
              <img
                className='w-[78px] h-[78px]'
                src={
                  process.env.PUBLIC_URL +
                  '/images/solar_high-quality-broken.png'
                }
              />
            </div>

            <p className='text-[14px] md:text-[16px] font-poppins text-center'>
              High Quality Output
            </p>
          </div>
          <div className='h-[230px] w-[90%] md:w-[140px] flex flex-col gap-y-4 items-center    '>
            <div className='bg-[#5C57C3] w-[140px] h-[140px] flex items-center justify-center rounded-lg'>
              <img
                className='w-[80px] h-[80px]'
                src={process.env.PUBLIC_URL + '/images/mdi_automatic.png'}
              />
            </div>

            <p className='text-[14px] md:text-[16px] font-poppins text-center'>
            Automated Visual Integration
            </p>
          </div>
        </div>
      </div>
      {/* 4TH SECTION */}

      <div style={bgImageStyleThree} className='flex justify-center'>
        <div className='w-[90%] md:w-[80%] flex flex-col items-center pt-20'>
          <h1 className='font-poppins text-[38px] md:text-[48px] font-bold'>
            More Products
          </h1>
          <p className='font-roboto text-[14px] md:text-[18px] text-center p-[10px] md:p-[40px] pb-[20px]'>
            We offer a variety of Services that you can test out, all these
            services are free for you to test out and generate your very own
            professional video in few simple steps
          </p>
          <div className='w-[161px] h-[2px] bg-black'></div>

          <div className='flex pt-[40px] flex-wrap justify-center gap-10 pb-20'>
          <div className='bg-[#1F1D2C] w-[90%] md:w-[348px] md:h-[300px] rounded-lg p-3 flex  flex-col  gap-3'>
              <div className='flex gap-4 items-center'>
                {' '}
                <div className='w-[43px] h-[42px]'>
                  <img
                    className='w-full'
                    src={process.env.PUBLIC_URL + '/images/text-to-image.png'}
                  />
                </div>
                <h4 className='font-roboto text-[18px] font-medium text-white text-left'>
                  Text to Video
                </h4>
              </div>
              <p className='font-roboto text-[16px] text-white'>
                Transform your text into engaging videos with just a few clicks.
                Enter your content, choose a style, and watch it turn into a
                professional video. Try it now and create your own dynamic
                visuals.
              </p>

              <div
                onClick={() => setPopup(!popup)}
                className=' flex items-center justify-center bg-[#5C57C3] p-3 px-5 mt-5 ml-auto mr-auto w-[143px] rounded-md cursor-pointer'
              >
                <a className='text-[12px] text-white font-poppins '>
                  Join the Waitlist
                </a>
              </div>
            </div>

            <div className='bg-[#1F1D2C] w-[90%] md:w-[348px] md:h-[300px] rounded-lg p-3 flex  flex-col  gap-3'>
              <div className='flex gap-4 items-center'>
                <div className='w-[43px] h-[42px]'>
                  <img
                    className='w-full'
                    src={process.env.PUBLIC_URL + '/images/text-to-image.png'}
                  />
                </div>
                <h4 className='font-roboto text-[18px] font-medium text-white text-left'>
                  Video Menu Generation
                </h4>
              </div>
              <p className='font-roboto text-[16px] text-white'>
                Generate custom video menus to organize and present your content
                seamlessly. With easy steps, create a sleek, user-friendly
                interface for your videos. Try it now to enhance your video
                presentation.
              </p>
              <div
                onClick={() => setPopup(!popup)}
                className=' flex items-center justify-center bg-[#5C57C3] p-3 px-5 mt-5 ml-auto mr-auto w-[143px] rounded-md cursor-pointer'
              >
                <a className='text-[12px] text-white font-poppins '>
                  Join the Waitlist
                </a>
              </div>
            </div>

           
            <div className='bg-[#1F1D2C] w-[90%] md:w-[348px] md:h-[300px] rounded-lg p-3 flex  flex-col  gap-3'>
              <div className='flex gap-4 items-center'>
                {' '}
                <div className='w-[43px] h-[42px]'>
                  <img
                    className='w-full'
                    src={process.env.PUBLIC_URL + '/images/text-to-image2.png'}
                  />
                </div>
                <h4 className='font-roboto text-[18px] font-medium text-white text-left'>
                  Conventional Video Production
                </h4>
              </div>
              <p className='font-roboto text-[16px] text-white '>
                Produce high-quality conventional videos with our easy-to-use
                platform. Choose from templates, add your footage, and customize
                it to suit your needs. Try it now to create professional-grade
                videos.
              </p>
              <div
                onClick={() => setPopup(!popup)}
                className=' flex items-center justify-center bg-[#5C57C3] p-3 px-5 mt-5 ml-auto mr-auto w-[143px] rounded-md cursor-pointer'
              >
                <a className='text-[12px] text-white font-poppins '>
                  Join the Waitlist
                </a>
              </div>
            </div>
            <div className='bg-[#1F1D2C] w-[90%] md:w-[348px] h-[300px] rounded-lg p-3 flex  flex-col  gap-3'>
              <div className='flex gap-4 items-center'>
                <div className='w-[43px] h-[42px]'>
                  <img
                    className='w-full'
                    src={process.env.PUBLIC_URL + '/images/text-to-image3.png'}
                  />
                </div>
                <h4 className='font-roboto text-[18px] font-medium text-white text-left'>
                  Animated Video
                </h4>
              </div>
              <p className='font-roboto text-[16px] text-white '>
                Create eye-catching animated videos that convey your message
                creatively. Select characters, scenes, and styles to produce
                custom animations. Try it now to craft your unique animated
                story.
              </p>

              <div
                onClick={() => setPopup(!popup)}
                className=' flex items-center justify-center bg-[#5C57C3] p-3 px-5 mt-5 ml-auto mr-auto w-[143px] rounded-md cursor-pointer'
              >
                <a className='text-[12px] text-white font-poppins '>
                  Join the Waitlist
                </a>
              </div>
            </div>
            <div className='bg-[#1F1D2C] w-[90%] md:w-[348px] h-[300px] rounded-lg p-3 flex  flex-col  gap-3'>
              <div className='flex gap-4 items-center'>
                <div className='w-[43px] h-[42px]'>
                  <img
                    className='w-full'
                    src={process.env.PUBLIC_URL + '/images/text-to-image3.png'}
                  />
                </div>
                <h4 className='font-roboto text-[18px] font-medium text-white text-left'>
                Food export Assistant
                </h4>
              </div>
              <p className='font-roboto text-[16px] text-white '>
              Our Food Export Assistant AI Chatbot helps you discover the best markets for your food exports worldwide. Gain insights into demand, trends, and regulations in target countries, streamlining your export planning
              </p>

              <div
                onClick={() => setPopup(!popup)}
                className=' flex items-center justify-center bg-[#5C57C3] p-3 px-5 mt-5 ml-auto mr-auto w-[143px] rounded-md cursor-pointer'
              >
                <a className='text-[12px] text-white font-poppins '>
                  Join the Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5TH SECTION */}
      <div className='bg-black'>
        <Footer />
      </div>
      {
        popup && <Popup setPopup={setPopup}  />
      }
    </div>
  );
};
