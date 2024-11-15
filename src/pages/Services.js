import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SvgIcons from '../components/svg';
import Popup from '../components/popup';
import { useNavigate } from 'react-router-dom';
export const Services = () => {
  const [popup, setPopup] = useState(false);
  const imageUrl = `${process.env.PUBLIC_URL}/images/OneBack.png`;
  const bgImageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const imageUrlTwo = `${process.env.PUBLIC_URL}/images/TwoBack.png`;
  const bgImageStyleTwo = {
    backgroundImage: `url(${imageUrlTwo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const imageUrlThree = `${process.env.PUBLIC_URL}/images/pricingOneBackground.png`;
  const bgImageStyleThree = {
    backgroundImage: `url(${imageUrlThree})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const navigate = useNavigate();
  let data = [
    {
      _id: '123456',
      image: 'PlaceholderImage.png',
      title: 'How to Create Professional Videos in Minutes with Our Software',
      description:
        'Discover how our intuitive video production software enables you to transform your images and text into high-quality videos in just a few clicks. Perfect for marketers, content creators, and anyone looking to enhance their visual content effortlessly.',
    },
    {
      _id: '7891011',
      image: 'PlaceholderImage1.png',
      title: ' 5 Tips for Making Your Videos Stand Out',
      description:
        'Learn the top five tips for creating engaging and impactful videos using our software. From choosing the right visuals to adding the perfect audio, these tips will help you captivate your audience and elevate your content strategy.',
    },
    {
      _id: '12131415',
      image: 'PlaceholderImage2.png',
      title:
        'The Future of Content Creation: How AI is Revolutionizing Video Production',
      description:
        'Explore how artificial intelligence is changing the landscape of video production. Our software leverages cutting-edge AI technology to simplify the video creation process, making it accessible to everyone, regardless of technical expertise.',
    },
  ];
  return (
    <div>
      <Header />

      {/* 1ST COMPONENT */}

      <div
        style={bgImageStyle}
        className='h-[calc(100vh-84px)] md:h-[calc(100vh-60px)] w-100 flex items-center flex-col md:flex-row justify-center md:gap-0 gap-20'
      >
        <div className='w-[90%] md:w-[50%] flex flex-col px-0  md:px-10 gap-4 md:gap-8'>
          <h1 className='text-[30px] md:text-[48px] font-bold font-poppins '>
            Our Services help you create Stunning Videos with just few steps
          </h1>
          <p className='font-poppins text-[16px] md:text-[18px]'>
            Start Creating with Our User-Friendly Platform
          </p>
          <div
            onClick={() => setPopup(!popup)}
            className=' flex items-center justify-center bg-[#5C57C3] p-3 px-5 w-[143px] rounded-md cursor-pointer'
          >
            <a className='text-[12px] text-white font-poppins '>
              Join the Waitlist
            </a>
          </div>
        </div>
        <div className='w-[80%] md:w-[40%] px-10'>
          <img src={process.env.PUBLIC_URL + '/images/amico.png'} />
        </div>
      </div>

      {/* 2ND SECTION */}

      <div style={bgImageStyleThree} className='flex justify-center'>
        <div className='w-[90%] md:w-[80%] flex flex-col items-center pt-20'>
          <h1 className='font-poppins text-[38px] md:text-[48px] font-bold'>
            Our Services
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
                <div className='w-[43px] h-[42px]'>
                  <img
                    className='w-full'
                    src={process.env.PUBLIC_URL + '/images/text-to-image1.png'}
                  />
                </div>
                <h4 className='font-roboto text-[18px] font-medium text-white text-left'>
                  Image to Video
                </h4>
              </div>
              <p className='font-roboto text-[16px] text-white'>
                Convert your images into stunning videos effortlessly. Simply
                upload your photos, add transitions and effects, and produce a
                captivating video in minutes. Try it now to bring your visuals
                to life.
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

      {/* 3RD SECTION */}

      <div
        style={bgImageStyleTwo}
        className='flex justify-center items-center flex-col'
      >
        <h2 className='text-[30px] md:text-[40px] font-bold font-poppins pt-20 pb-10'>
          How it works
        </h2>

        <div className='flex gap-10 justify-center items-center flex-col flex-wrap md:flex-row pb-20'>
          <div className='h-[260px] w-[90%] md:w-[305px] flex flex-col gap-y-4 items-center shadow-custom bg-white p-7 rounded-lg'>
            <div className='bg-[#5C57C3] w-[36px] h-[36px] flex items-center justify-center'>
              <img
                className='w-[27px] h-[27px]'
                src={process.env.PUBLIC_URL + '/images/icon _cloud upload_.png'}
              />
            </div>
            <h4 className='text-[17px] font-bold font-poppins '>
              Input Text or Upload Image
            </h4>
            <p className='text-[14px] font-poppins text-center'>
              Easily input your text or upload an image to start creating your
              video content
            </p>
          </div>

          <div className='h-[260px] w-[90%] md:w-[305px] flex flex-col gap-y-4 items-center shadow-custom bg-white p-7 rounded-lg'>
            <div className='bg-[#5C57C3] w-[36px] h-[36px] flex items-center justify-center'>
              <img
                className='w-[27px] h-[27px]'
                src={
                  process.env.PUBLIC_URL + '/images/icon _cloud upload_2.png'
                }
              />
            </div>
            <h4 className='text-[17px] font-bold font-poppins '>
              Generate and Revise
            </h4>
            <p className='text-[14px] font-poppins text-center'>
              Our platform generates your video, allowing you to make any
              necessary revisions effortlessly.
            </p>
          </div>

          <div className='h-[260px] w-[90%] md:w-[305px] flex flex-col gap-y-4 items-center shadow-custom bg-white p-7 rounded-lg'>
            <div className='bg-[#5C57C3] w-[36px] h-[36px] flex items-center justify-center'>
              <img
                className='w-[27px] h-[27px]'
                src={
                  process.env.PUBLIC_URL + '/images/icon _cloud upload_3.png'
                }
              />
            </div>
            <h4 className='text-[17px] font-bold font-poppins '>Export</h4>
            <p className='text-[14px] font-poppins text-center'>
              Once satisfied, export your high-quality video ready to showcase
              your food business.
            </p>
          </div>
        </div>
      </div>

      {/* 4TH SECTION */}
      <div className='bg-black flex justify-center'>
        <div className='w-[90%] pt-20 flex flex-col items-center pb-20'>
          <p className=' text-[14px] md:text-[16px] font-semibold text-white  font-poppins '>
            Blog
          </p>
          <h3 className='text-[40px] md:text-[48px] pt-3 font-bold font-poppins text-white text-center '>
            Learn With the TMF Community
          </h3>
          <p className=' text-[16px] md:text-[18px] pt-3 text-white  font-poppins  text-center'>
            Stay Updated with Our Expert Blog Posts on Video Production and
            Content Creation
          </p>

          <div className='w-full flex gap-5 justify-center flex-wrap pt-20 pb-20'>
            {data.map((item) => {
              return (
                <div
                  onClick={() => {
                    localStorage.setItem('blog', JSON.stringify(item));
                    navigate(`/individualblog/${item._id}`);
                  }}
                  className='w-[100%] md:w-[416px] cursor-pointer'
                  id={item._id}
                >
                  <div>
                    <img
                      className='w-[100%]'
                      src={process.env.PUBLIC_URL + '/images/' + item.image}
                    />
                  </div>
                  <div className='flex pt-4 '>
                    <div className='bg-white py-1 px-2 text-[14px] font-semibold  font-roboto'>
                      Category
                    </div>
                    <div className='text-white py-1 px-2 text-[14px] font-semibold  font-roboto'>
                      5 min read
                    </div>
                  </div>
                  <div className='flex pt-4 flex-col'>
                    <h3 className='text-[22px] md:text-[24px] font-bold font-roboto text-white '>
                      {item.title}
                    </h3>
                    <p className='text-[16px] pt-3 text-white  font-roboto '>
                      {item.description}
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      localStorage.setItem('blog', JSON.stringify(item));
                      navigate(`/individualblog/${item._id}`);
                    }}
                    className='text-[16px] pt-5 text-white  font-roboto flex items-center gap-3 cursor-pointer'
                  >
                    Read More <SvgIcons.ArrowRightSM />
                  </div>
                </div>
              );
            })}
          </div>

          <div className='border text-white border-white w-fit py-2 px-4 ml-auto mr-auto cursor-pointer hover:bg-white hover:text-black'>
            View All
          </div>
        </div>
      </div>
      {/* 5TH SECTION */}

      <div className='bg-black'>
        <Footer />
      </div>

      {popup && <Popup setPopup={setPopup} />}
    </div>
  );
};
